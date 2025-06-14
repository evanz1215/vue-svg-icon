# ?¼ä??‡å?

## æº–å??¼ä?

1. **?´æ–°?ˆæœ¬??*

   ```bash
   npm version patch  # ??minor, major
   ```

2. **å»ºç½®åº?*

   ```bash
   npm run build:lib
   ```

3. **æ¸¬è©¦å»ºç½®çµæ?**

   ```bash
   npm pack --dry-run
   ```

4. **?¼ä???npm**
   ```bash
   npm publish
   ```

## ?®é?çµæ?

å»ºç½®å¾Œç? `dist/` ?®é??…å«ï¼?
```
dist/
?œâ??€ index.d.ts              # ä¸»è?é¡å?å®šç¾©
?œâ??€ nuxt.d.ts              # Nuxt ?’ä»¶é¡å?å®šç¾©
?œâ??€ vue-svg-icon.js        # ES æ¨¡ç?
?œâ??€ vue-svg-icon.umd.cjs   # UMD ?¼å?
?œâ??€ vue-svg-icon.css       # æ¨???‡ä»¶
?”â??€ *.js                   # ?•æ?è¼‰å…¥??SVG æª”æ?
```

## ä½¿ç”¨?¹å?

### Vite + Vue 3

```typescript
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import VueSvgIcon from "@evanz1215/vue-svg-icon";
import "@evanz1215/vue-svg-icon/dist/vue-svg-icon.css";

const app = createApp(App);
app.use(VueSvgIcon);
app.mount("#app");
```

### Nuxt 3

```typescript
// plugins/svg-icon.client.ts
import VueSvgIcon from "@evanz1215/vue-svg-icon/nuxt";

export default VueSvgIcon;
```

## æ³¨æ?äº‹é?

1. **SVG æª”æ??¾ç½®**ï¼šå? SVG æª”æ??¾åœ¨ `src/assets/icons/` ??`assets/icons/` ?®é?
2. **æ¨??å¼•å…¥**ï¼šè?å¾—å???CSS æª”æ?
3. **é¡å??¯æ´**ï¼šå??´ç? TypeScript ?¯æ´
4. **Tree-shaking**ï¼šæ”¯?´æ??€è¼‰å…¥
