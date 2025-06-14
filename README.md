# Vue SVG Icon Library

[![GitHub License](https://img.shields.io/github/license/evanz1215/vue-svg-icon)](https://github.com/evanz1215/vue-svg-icon/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/@evanz1215/vue-svg-icon)](https://www.npmjs.com/package/@evanz1215/vue-svg-icon)
[![GitHub stars](https://img.shields.io/github/stars/evanz1215/vue-svg-icon)](https://github.com/evanz1215/vue-svg-icon/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/evanz1215/vue-svg-icon)](https://github.com/evanz1215/vue-svg-icon/issues)

一個為 Vue 3 設計的 SVG 圖標組件庫，支援動態載入、TypeScript 和快取功能。

## 特色功能

- ✅ Vue 3 Composition API
- ✅ TypeScript 支援
- ✅ 動態 SVG 載入
- ✅ 記憶體快取
- ✅ 支援 Vite 和 Nuxt 3
- ✅ 自訂尺寸和顏色
- ✅ **自訂圖標路徑配置**
- ✅ **Vite 插件和 Nuxt 模塊**
- ✅ Tree-shaking 支援
- ✅ 載入和錯誤狀態
- ✅ 無依賴（僅依賴 Vue 3）

## 安裝

```bash
npm install @evanz1215/vue-svg-icon
# 或
yarn add @evanz1215/vue-svg-icon
# 或
pnpm add @evanz1215/vue-svg-icon
```

## 使用方式

### Vite + Vue 3

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteSvgIcon } from '@evanz1215/vue-svg-icon/vite'

export default defineConfig({
  plugins: [
    vue(),
    viteSvgIcon({
      iconPaths: ["src/assets/icons", "src/assets/svg"],
      defaultSize: 24,
    }),
  ],
});
```

```typescript
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import { VueSvgIconPlugin } from "@evanz1215/vue-svg-icon";

const app = createApp(App);
app.use(VueSvgIconPlugin, {
  iconPaths: ["src/assets/icons", "src/custom-icons"],
});
app.mount("#app");
```

或者按需引入：

```vue
<template>
  <SvgIcon name="home" size="24" color="#2563eb" />
</template>

<script setup>
import { SvgIcon } from "@evanz1215/vue-svg-icon";
</script>
```

### Nuxt 3

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ["@evanz1215/vue-svg-icon/nuxt"],
  svgIcon: {
    iconPaths: ["~/assets/icons", "~/assets/svg"],
    defaultSize: 24,
    defaultColor: "currentColor",
  },
});
```

## API

### Props

| 屬性    | 類型               | 預設值           | 說明                                    |
| ------- | ------------------ | ---------------- | --------------------------------------- |
| `name`  | `string`           | -                | SVG 檔案名稱（不含 .svg 副檔名）        |
| `size`  | `string \| number` | `24`             | 圖標尺寸，可以是數字（px）或 CSS 尺寸值 |
| `color` | `string`           | `'currentColor'` | 圖標顏色                                |
| `class` | `string`           | `''`             | 自訂 CSS 類別                           |
| `paths` | `string[]`         | `[]`             | 自訂圖標路徑陣列，優先於全局配置        |

## 配置選項

### 全局配置

```typescript
interface InstallOptions {
  iconPaths?: string[]; // 圖標路徑陣列
  defaultSize?: string | number; // 預設尺寸
  defaultColor?: string; // 預設顏色
}
```

### Vite 插件選項

```typescript
interface ViteSvgIconOptions {
  iconPaths?: string[]; // 圖標路徑陣列
  defaultSize?: string | number; // 預設尺寸
  defaultColor?: string; // 預設顏色
}
```

### Nuxt 模塊選項

```typescript
interface NuxtSvgIconOptions {
  iconPaths?: string[]; // 圖標路徑陣列
  defaultSize?: string | number; // 預設尺寸
  defaultColor?: string; // 預設顏色
}
```

## 開發

```bash
# 安裝依賴
npm install

# 建置庫
npm run build

# 生成類型定義
npm run build:types
```

## 授權

MIT License
