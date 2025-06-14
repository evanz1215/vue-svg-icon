# 配置與自定義圖標路徑

## Vite + Vue 3 配置

### vite.config.ts

```typescript
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteSvgIcon } from "vue-smart-icons";

export default defineConfig({
  plugins: [
    vue(),
    viteSvgIcon({
      iconPaths: [
        "src/assets/icons", // 預設路徑
        "src/assets/svg", // 自定義路徑
        "public/icons", // 公共資源路徑
        "src/components/icons", // 組件圖標目錄
      ],
      defaultSize: 24,
      defaultColor: "currentColor",
    }),
  ],
});
```

### 在組件中使用

```vue
<template>
  <!-- 使用全域配置的路徑 -->
  <SvgIcon name="home" />

  <!-- 使用組件級別的自定義路徑 -->
  <SvgIcon name="custom-icon" :paths="['./custom-icons', '../shared/icons']" />
</template>

<script setup>
import { SvgIcon } from "vue-smart-icons";
</script>
```

### 動態配置

```typescript
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import VueSvgIcon, { setSvgIconConfig } from "vue-smart-icons";

const app = createApp(App);

// 方法 1: 使用插件配置
app.use(VueSvgIcon, {
  iconPaths: ["src/assets/icons", "src/assets/svg"],
  defaultSize: 32,
});

// 方法 2: 直接設置配置
setSvgIconConfig({
  iconPaths: ["src/assets/icons", "src/assets/svg"],
  defaultSize: 32,
  defaultColor: "#333",
});

app.mount("#app");
```

## Nuxt 3 配置

### nuxt.config.ts

```typescript
export default defineNuxtConfig({
  modules: ["vue-smart-icons/nuxt"],
  svgIcon: {
    iconPaths: [
      "~/assets/icons", // 預設 Nuxt 路徑
      "~/assets/svg", // 自定義路徑
      "~/public/icons", // 公共資源
      "~/components/icons", // 組件圖標目錄
    ],
    defaultSize: 24,
    defaultColor: "currentColor",
  },
});
```

### 在 Nuxt 組件中使用

```vue
<template>
  <!-- 自動導入，無需手動 import -->
  <SvgIcon name="home" />

  <!-- 使用組件級別的自定義路徑 -->
  <SvgIcon name="nuxt-icon" :paths="['~/assets/special-icons']" />
</template>
```

## 動態配置路徑

```typescript
import { addIconPath, removeIconPath, resetIconPaths } from "vue-smart-icons";

// 添加新路徑
addIconPath("src/new-icons");

// 移除路徑
removeIconPath("src/old-icons");

// 重置為預設路徑
resetIconPaths();
```

## 路徑優先順序

1. 組件 `paths` 屬性（最高優先級）
2. 動態配置的路徑
3. 插件/模組配置的路徑
4. 預設路徑（最低優先級）

圖標載入會按照優先級順序嘗試查找，直到找到第一個匹配的圖標檔案為止。
