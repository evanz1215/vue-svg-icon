# Vue Smart Icons

[![GitHub License](https://img.shields.io/github/license/evanz1215/vue-svg-icon)](https://github.com/evanz1215/vue-svg-icon/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/vue-smart-icons)](https://www.npmjs.com/package/vue-smart-icons)
[![GitHub stars](https://img.shields.io/github/stars/evanz1215/vue-svg-icon)](https://github.com/evanz1215/vue-svg-icon/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/evanz1215/vue-svg-icon)](https://github.com/evanz1215/vue-svg-icon/issues)

一?�為 Vue 3 設�???SVG ?��?組件庫�??�援?��?載入?�TypeScript ?�快?��??��?

## ?�色?�能

- ??Vue 3 Composition API
- ??TypeScript ?�援
- ???��? SVG 載入
- ??記憶體快??- ???�援 Vite ??Nuxt 3
- ???��?尺寸?��???- ??**?��??��?路�??�置**
- ??**Vite ?�件??Nuxt 模�?**
- ??Tree-shaking ?�援
- ??載入?�錯誤�???- ???��?賴�??��?�?Vue 3�?

## 安�?

```bash
npm install vue-smart-icons
# ??yarn add vue-smart-icons
# ??pnpm add vue-smart-icons
```

## 使用?��?

### Vite + Vue 3

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteSvgIcon } from "vue-smart-icons/vite";

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
import { VueSvgIconPlugin } from "vue-smart-icons";

const app = createApp(App);
app.use(VueSvgIconPlugin, {
  iconPaths: ["src/assets/icons", "src/custom-icons"],
});
app.mount("#app");
```

?�者�??�引入�?

```vue
<template>
  <SvgIcon name="home" size="24" color="#2563eb" />
</template>

<script setup>
import { SvgIcon } from "vue-smart-icons";
</script>
```

### Nuxt 3

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ["vue-smart-icons/nuxt"],
  svgIcon: {
    iconPaths: ["~/assets/icons", "~/assets/svg"],
    defaultSize: 24,
    defaultColor: "currentColor",
  },
});
```

## API

### Props

| 屬�?    | 類�?               | ?�設??           | 說�?                                    |
| ------- | ------------------ | ---------------- | --------------------------------------- |
| `name`  | `string`           | -                | SVG 檔�??�稱（�???.svg ?��??��?         |
| `size`  | `string \| number` | `24`             | ?��?尺寸，可以是?��?（px）�? CSS 尺寸?? |
| `color` | `string`           | `'currentColor'` | ?��?顏色                                |
| `class` | `string`           | `''`             | ?��? CSS 類別                           |
| `paths` | `string[]`         | `[]`             | ?��??��?路�????，優?�於?��??�置         |

## ?�置?��?

### ?��??�置

```typescript
interface InstallOptions {
  iconPaths?: string[]; // ?��?路�????
  defaultSize?: string | number; // ?�設尺寸
  defaultColor?: string; // ?�設顏色
}
```

### Vite ?�件?��?

```typescript
interface ViteSvgIconOptions {
  iconPaths?: string[]; // ?��?路�????
  defaultSize?: string | number; // ?�設尺寸
  defaultColor?: string; // ?�設顏色
}
```

### Nuxt 模�??��?

```typescript
interface NuxtSvgIconOptions {
  iconPaths?: string[]; // ?��?路�????
  defaultSize?: string | number; // ?�設尺寸
  defaultColor?: string; // ?�設顏色
}
```

## ?�發

```bash
# 安�?依賴
npm install

# 建置�?npm run build

# ?��?類�?定義
npm run build:types
```

## ?��?

MIT License
