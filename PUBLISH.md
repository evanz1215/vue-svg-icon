# ?��??��?

## 準�??��?

1. \*_?�新?�本??_

   ```bash
   npm version patch  # ??minor, major
   ```

2. \*_建置�?_

   ```bash
   npm run build:lib
   ```

3. **測試建置結�?**

   ```bash
   npm pack --dry-run
   ```

4. **?��???npm**
   ```bash
   npm publish
   ```

## ?��?結�?

建置後�? `dist/` ?��??�含�?

```
dist/
?��??� index.d.ts              # 主�?類�?定義
?��??� nuxt.d.ts              # Nuxt ?�件類�?定義
?��??� vue-svg-icon.js        # ES 模�?
?��??� vue-svg-icon.umd.cjs   # UMD ?��?
?��??� vue-svg-icon.css       # �???�件
?��??� *.js                   # ?��?載入??SVG 檔�?
```

## 使用?��?

### Vite + Vue 3

```typescript
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import VueSvgIcon from "vue-smart-icons";
import "vue-smart-icons/dist/vue-svg-icon.css";

const app = createApp(App);
app.use(VueSvgIcon);
app.mount("#app");
```

### Nuxt 3

```typescript
// plugins/svg-icon.client.ts
import VueSvgIcon from "vue-smart-icons/nuxt";

export default VueSvgIcon;
```

## 注�?事�?

1. **SVG 檔�??�置**：�? SVG 檔�??�在 `src/assets/icons/` ??`assets/icons/` ?��?
2. **�??引入**：�?得�???CSS 檔�?
3. **類�??�援**：�??��? TypeScript ?�援
4. **Tree-shaking**：支?��??�載入
