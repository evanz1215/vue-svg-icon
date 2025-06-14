<template>
  <div :class="svgClass" :style="svgStyle">
    <!-- 加載狀態 -->
    <div v-if="isLoading" class="svg-loading">
      <div class="loading-spinner"></div>
    </div>
    <!-- SVG 內容 -->
    <div v-else-if="svgContent" v-html="svgContent" class="fade-in" />
    <!-- 錯誤狀態 -->
    <div
      v-else-if="hasError"
      class="svg-error"
      :title="`Icon '${props.name}' not found`"
    >
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import { getSvgIconConfig, loadConfigFromEnv } from "../config";

export interface SvgIconProps {
  name: string;
  size?: string | number;
  color?: string;
  class?: string;
  paths?: string[]; // 自定義圖標路徑陣列
}

const props = withDefaults(defineProps<SvgIconProps>(), {
  size: 24,
  color: "currentColor",
  class: "",
  paths: () => [],
});

// 載入環境配置
loadConfigFromEnv();

// 全局 SVG 緩存
const svgCache = new Map<string, string>();

const svgContent = ref<string>("");
const isLoading = ref<boolean>(false);
const hasError = ref<boolean>(false);

// 設置載入狀態
const setLoadingState = (loading: boolean, error: boolean = false) => {
  isLoading.value = loading;
  hasError.value = error;
};

// 移除 SVG 屬性
const removeSvgAttributes = (svgText: string): string => {
  return svgText
    .replace(/width="[^"]*"/g, "")
    .replace(/height="[^"]*"/g, "")
    .replace(/style="[^"]*"/g, "");
};

// 標準化 SVG 填充色
const normalizeSvgFill = (svgText: string): string => {
  return svgText.replace(/fill="[^"]*"/g, 'fill="currentColor"');
};

// 添加預設 viewBox
const addDefaultViewBox = (svgText: string): string => {
  const needsViewBox = !svgText.includes("viewBox");
  return svgText.replace(
    "<svg",
    needsViewBox ? '<svg viewBox="0 0 24 24"' : "<svg"
  );
};

// 清理和優化 SVG 內容
const optimizeSvgContent = (svgText: string): string => {
  let result = removeSvgAttributes(svgText);
  result = normalizeSvgFill(result);
  result = addDefaultViewBox(result);
  return result;
};

// 從緩存獲取 SVG
const getFromCache = (iconName: string): boolean => {
  if (svgCache.has(iconName)) {
    svgContent.value = svgCache.get(iconName)!;
    setLoadingState(false);
    return true;
  }
  return false;
};

// 標準化路徑 - 移除尾隨斜槓
const normalizePath = (path: string): string => {
  return path.replace(/\/$/, "");
};

// 生成路徑變體
const createPathVariations = (basePath: string, iconName: string): string[] => {
  const normalizedPath = normalizePath(basePath);
  return [
    `${normalizedPath}/${iconName}.svg?raw`,
    `${normalizedPath}/${iconName}.svg`,
    `${normalizedPath}/${iconName}?raw`,
  ];
};

// 嘗試單一導入路徑
const tryImportPath = async (path: string): Promise<any> => {
  return import(/* @vite-ignore */ path);
};

// 處理導入結果
const processImportResults = (results: PromiseSettledResult<any>[]): any => {
  for (const result of results) {
    if (result.status === "fulfilled") {
      return result.value;
    }
  }
  throw new Error("All imports failed");
};

// 嘗試從單一路徑載入
const tryLoadFromPath = async (
  basePath: string,
  iconName: string
): Promise<any> => {
  const variations = createPathVariations(basePath, iconName);
  const results = await Promise.allSettled(variations.map(tryImportPath));
  return processImportResults(results);
};

// 獲取自定義路徑
const getCustomPaths = (): string[] => {
  return props.paths.length > 0 ? props.paths : [];
};

// 獲取配置路徑
const getConfigPaths = (): string[] => {
  const config = getSvgIconConfig();
  return config.iconPaths;
};

// 獲取所有圖標路徑
const getAllIconPaths = (): string[] => {
  const customPaths = getCustomPaths();
  const configPaths = getConfigPaths();
  return [...customPaths, ...configPaths];
};

// 提取 SVG 內容
const extractSvgContent = (svgModule: any): string => {
  return svgModule.default ?? svgModule;
};

// 記錄載入警告
const logLoadWarning = (iconName: string, paths: string[]): void => {
  console.warn(
    `Icon "${iconName}" not found in any of the configured paths:`,
    paths
  );
};

// 載入 SVG 模塊 - 支援多種載入方式和自定義路徑
const loadSvgModule = async (iconName: string): Promise<string | null> => {
  const allPaths = getAllIconPaths();

  for (const basePath of allPaths) {
    try {
      const svgModule = await tryLoadFromPath(basePath, iconName);
      return extractSvgContent(svgModule);
    } catch {
      continue;
    }
  }

  logLoadWarning(iconName, allPaths);
  return null;
};

// 記錄驗證警告
const logValidationWarning = (iconName: string): void => {
  console.warn(`Invalid SVG content for "${iconName}"`);
};

// 驗證 SVG 內容
const validateSvgContent = (svgText: any, iconName: string): boolean => {
  const isValid = typeof svgText === "string";
  if (!isValid) {
    logValidationWarning(iconName);
  }
  return isValid;
};

// 設置錯誤狀態
const setErrorState = (): void => {
  svgContent.value = "";
  setLoadingState(false, true);
};

// 設置成功狀態
const setSuccessState = (optimizedSvg: string, iconName: string): void => {
  svgCache.set(iconName, optimizedSvg);
  svgContent.value = optimizedSvg;
  setLoadingState(false);
};

// 處理 SVG 內容
const processSvgContent = (iconName: string, svgText: string): void => {
  if (!validateSvgContent(svgText, iconName)) {
    setErrorState();
    return;
  }

  const optimizedSvg = optimizeSvgContent(svgText);
  setSuccessState(optimizedSvg, iconName);
};

// 處理載入成功
const handleLoadSuccess = (iconName: string, svgText: string): void => {
  processSvgContent(iconName, svgText);
};

// 處理載入失敗
const handleLoadFailure = (): void => {
  setErrorState();
};

// 主要載入函數
const loadSvgContent = async (iconName: string): Promise<void> => {
  setLoadingState(true);

  if (getFromCache(iconName)) {
    return;
  }

  const svgText = await loadSvgModule(iconName);

  if (svgText) {
    handleLoadSuccess(iconName, svgText);
  } else {
    handleLoadFailure();
  }
};

// 初始化圖標載入
const initializeIcon = (): void => {
  loadSvgContent(props.name);
};

// 處理圖標名稱變更
const handleNameChange = (newName: string): void => {
  if (newName) {
    loadSvgContent(newName);
  }
};

// 組件掛載時載入圖示
onMounted(initializeIcon);

// 監聽 name 屬性變化
watch(() => props.name, handleNameChange, {
  immediate: false,
  flush: "post",
});

// 檢查是否為純數字字串
const isPureNumericString = (value: string): boolean => {
  const numericValue = parseFloat(value);
  return !isNaN(numericValue) && value.trim() === numericValue.toString();
};

// 處理數字尺寸
const processNumericSize = (size: string): string => {
  return isPureNumericString(size) ? `${parseFloat(size)}px` : size;
};

// 處理數字類型尺寸
const processNumberSize = (size: number): string => {
  return `${size}px`;
};

// 處理字串類型尺寸
const processStringSize = (size: string): string => {
  return processNumericSize(size);
};

// 格式化尺寸值
const formatSizeValue = (size: string | number): string => {
  if (typeof size === "number") {
    return processNumberSize(size);
  }

  if (typeof size === "string") {
    return processStringSize(size);
  }

  return "24px";
};

// 創建尺寸樣式對象
const createSizeStyles = (sizeValue: string) => ({
  width: sizeValue,
  height: sizeValue,
  maxWidth: sizeValue,
  maxHeight: sizeValue,
  minWidth: sizeValue,
  minHeight: sizeValue,
});

// 創建顏色樣式對象
const createColorStyles = (color: string) => ({
  color: color,
});

// 創建自定義屬性樣式
const createCustomProperties = (sizeValue: string) => ({
  "--icon-size": sizeValue,
});

// 計算樣式
const svgClass = computed(() => {
  return ["svg-icon", props.class].filter(Boolean).join(" ");
});

const svgStyle = computed(() => {
  const sizeValue = formatSizeValue(props.size);

  return {
    ...createSizeStyles(sizeValue),
    ...createColorStyles(props.color),
    ...createCustomProperties(sizeValue),
  };
});
</script>

<style scoped>
.svg-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  flex-shrink: 0;
  position: relative;
  box-sizing: border-box;
}

.svg-icon :deep(svg) {
  width: 100% !important;
  height: 100% !important;
  fill: currentColor;
  display: block;
  box-sizing: border-box;
}

/* Fade in animation for loaded SVG */
.fade-in {
  animation: fade-in 0.3s ease-in-out;
}

/* Loading state */
.svg-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.loading-spinner {
  width: 50%;
  height: 50%;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* Error state */
.svg-error {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  opacity: 0.5;
}

.svg-error svg {
  width: 100%;
  height: 100%;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
