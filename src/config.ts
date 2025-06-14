// 全局配置管理
interface SvgIconConfig {
  iconPaths: string[];
  defaultSize: string | number;
  defaultColor: string;
}

// 預設配置
const defaultConfig: SvgIconConfig = {
  iconPaths: [
    // Vite 預設路徑
    "../assets/icons",
    "/src/assets/icons",
    // Nuxt 預設路徑
    "~/assets/icons",
    "~/assets/img/icons",
    // 其他常見路徑
    "./assets/icons",
    "./icons",
  ],
  defaultSize: 24,
  defaultColor: "currentColor",
};

// 全局配置實例
let globalConfig: SvgIconConfig = { ...defaultConfig };

// 配置管理函數
export const setSvgIconConfig = (config: Partial<SvgIconConfig>) => {
  globalConfig = { ...globalConfig, ...config };
};

export const getSvgIconConfig = (): SvgIconConfig => {
  return { ...globalConfig };
};

export const addIconPath = (path: string) => {
  if (!globalConfig.iconPaths.includes(path)) {
    globalConfig.iconPaths.unshift(path); // 新路徑優先
  }
};

export const removeIconPath = (path: string) => {
  const index = globalConfig.iconPaths.indexOf(path);
  if (index > -1) {
    globalConfig.iconPaths.splice(index, 1);
  }
};

export const resetIconPaths = () => {
  globalConfig.iconPaths = [...defaultConfig.iconPaths];
};

// 檢查環境變數配置
const loadEnvConfig = (): void => {
  if (typeof window !== "undefined" && (window as any).__SVG_ICON_CONFIG__) {
    const envConfig = (window as any).__SVG_ICON_CONFIG__;
    setSvgIconConfig(envConfig);
  }
};

// 檢查 Nuxt SSR 環境
const checkNuxtSSR = (): void => {
  if (
    typeof globalThis !== "undefined" &&
    (globalThis as any).process?.client === false
  ) {
    // SSR 環境中的處理
  }
};

// 從 Vite 或 Nuxt 配置中讀取路徑
export const loadConfigFromEnv = () => {
  loadEnvConfig();
  checkNuxtSSR();
};
