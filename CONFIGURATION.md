# ?ç½®?ªå?ç¾©å?æ¨™è·¯å¾?
## Vite + Vue 3 ?ç½®

### vite.config.ts

```typescript
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteSvgIcon } from "@evanz1215/vue-svg-icon";

export default defineConfig({
  plugins: [
    vue(),
    viteSvgIcon({
      iconPaths: [
        "src/assets/icons", // ?è¨­è·¯å?
        "src/assets/svg", // ?ªå?ç¾©è·¯å¾?        "public/icons", // ?¬å…±è³‡æ?è·¯å?
        "src/components/icons", // çµ„ä»¶?§å?æ¨?      ],
      defaultSize: 24,
      defaultColor: "currentColor",
    }),
  ],
});
```

### ?¨ç?ä»¶ä¸­ä½¿ç”¨

```vue
<template>
  <!-- ä½¿ç”¨?¨å??ç½®?„è·¯å¾?-->
  <SvgIcon name="home" />

  <!-- ä½¿ç”¨çµ„ä»¶ç´šåˆ¥?„è‡ªå®šç¾©è·¯å? -->
  <SvgIcon name="custom-icon" :paths="['./custom-icons', '../shared/icons']" />
</template>

<script setup>
import { SvgIcon } from "@evanz1215/vue-svg-icon";
</script>
```

### ?‹è??‚é?ç½?
```typescript
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import VueSvgIcon, { setSvgIconConfig } from "@evanz1215/vue-svg-icon";

const app = createApp(App);

// ?¹æ? 1: ä½¿ç”¨?’ä»¶?¸é?
app.use(VueSvgIcon, {
  iconPaths: ["src/assets/icons", "src/assets/svg"],
  defaultSize: 32,
});

// ?¹æ? 2: ?´æ¥è¨­ç½®?ç½®
setSvgIconConfig({
  iconPaths: ["src/assets/icons", "src/assets/svg"],
  defaultSize: 32,
  defaultColor: "#333",
});

app.mount("#app");
```

## Nuxt 3 ?ç½®

### nuxt.config.ts

```typescript
export default defineNuxtConfig({
  modules: ["@evanz1215/vue-svg-icon/nuxt"],
  svgIcon: {
    iconPaths: [
      "~/assets/icons", // ?è¨­ Nuxt è·¯å?
      "~/assets/svg", // ?ªå?ç¾©è·¯å¾?      "~/public/icons", // ?¬å…±è³‡æ?
      "~/components/icons", // çµ„ä»¶?§å?æ¨?    ],
    defaultSize: 24,
    defaultColor: "currentColor",
  },
});
```

### ??Nuxt çµ„ä»¶ä¸­ä½¿??
```vue
<template>
  <!-- ?ªå?å°å…¥ï¼Œç„¡?€?‹å? import -->
  <SvgIcon name="home" />

  <!-- ä½¿ç”¨çµ„ä»¶ç´šåˆ¥?„è‡ªå®šç¾©è·¯å? -->
  <SvgIcon name="nuxt-icon" :paths="['~/assets/special-icons']" />
</template>
```

## ?•æ??ç½®è·¯å?

```typescript
import {
  addIconPath,
  removeIconPath,
  resetIconPaths,
} from "@evanz1215/vue-svg-icon";

// æ·»å??°è·¯å¾?addIconPath("src/new-icons");

// ç§»é™¤è·¯å?
removeIconPath("src/old-icons");

// ?ç½®?ºé?è¨­è·¯å¾?resetIconPaths();
```

## è·¯å??ªå?ç´?
1. çµ„ä»¶ `paths` å±¬æ€§ï??€é«˜å„ª?ˆç?ï¼?2. ?‹è??‚é?ç½®ç?è·¯å?
3. ?’ä»¶/æ¨¡å??ç½®?„è·¯å¾?4. ?è¨­è·¯å?ï¼ˆæ?ä½å„ª?ˆç?ï¼?
?–æ?è¼‰å…¥?¨æ??‰ç…§?ªå?ç´šé?åºå?è©¦è??¥ï??¾åˆ°ç¬¬ä??‹åŒ¹?ç??–æ??³å?æ­¢ã€?
