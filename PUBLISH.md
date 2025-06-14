# 發佈指南

## 準備發佈

1. **更新版本號**

   ```bash
   npm version patch  # 或 minor, major
   ```

2. **建置庫**

   ```bash
   npm run build:lib
   ```

3. **測試建置結果**

   ```bash
   npm pack --dry-run
   ```

4. **發佈到 npm**
   ```bash
   npm publish
   ```

## 目錄結構

建置後的 `dist/` 目錄包含：

```
dist/
├── index.d.ts              # 主要類型定義
├── nuxt.d.ts              # Nuxt 插件類型定義
├── vue-svg-icon.js        # ES 模組
├── vue-svg-icon.umd.cjs   # UMD 格式
├── vue-svg-icon.css       # 樣式文件
└── *.js                   # 動態載入的 SVG 檔案
```

## 使用方式

### Vite + Vue 3

```typescript
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import VueSvgIcon from "@your-scope/vue-svg-icon";
import "@your-scope/vue-svg-icon/dist/vue-svg-icon.css";

const app = createApp(App);
app.use(VueSvgIcon);
app.mount("#app");
```

### Nuxt 3

```typescript
// plugins/svg-icon.client.ts
import VueSvgIcon from "@your-scope/vue-svg-icon/nuxt";

export default VueSvgIcon;
```

## 注意事項

1. **SVG 檔案放置**：將 SVG 檔案放在 `src/assets/icons/` 或 `assets/icons/` 目錄
2. **樣式引入**：記得引入 CSS 檔案
3. **類型支援**：完整的 TypeScript 支援
4. **Tree-shaking**：支援按需載入
