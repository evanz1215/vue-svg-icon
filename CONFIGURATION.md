# ?�置?��?義�?標路�?

## Vite + Vue 3 ?�置

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
        "src/assets/icons", // ?�設路�?
        "src/assets/svg", // ?��?義路�?        "public/icons", // ?�共資�?路�?
        "src/components/icons", // 組件?��?�?      ],
      defaultSize: 24,
      defaultColor: "currentColor",
    }),
  ],
});
```

### ?��?件中使用

```vue
<template>
  <!-- 使用?��??�置?�路�?-->
  <SvgIcon name="home" />

  <!-- 使用組件級別?�自定義路�? -->
  <SvgIcon name="custom-icon" :paths="['./custom-icons', '../shared/icons']" />
</template>

<script setup>
import { SvgIcon } from "vue-smart-icons";
</script>
```

### ?��??��?�?

```typescript
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import VueSvgIcon, { setSvgIconConfig } from "vue-smart-icons";

const app = createApp(App);

// ?��? 1: 使用?�件?��?
app.use(VueSvgIcon, {
  iconPaths: ["src/assets/icons", "src/assets/svg"],
  defaultSize: 32,
});

// ?��? 2: ?�接設置?�置
setSvgIconConfig({
  iconPaths: ["src/assets/icons", "src/assets/svg"],
  defaultSize: 32,
  defaultColor: "#333",
});

app.mount("#app");
```

## Nuxt 3 ?�置

### nuxt.config.ts

```typescript
export default defineNuxtConfig({
  modules: ["vue-smart-icons/nuxt"],
  svgIcon: {
    iconPaths: [
      "~/assets/icons", // ?�設 Nuxt 路�?
      "~/assets/svg", // ?��?義路�?      "~/public/icons", // ?�共資�?
      "~/components/icons", // 組件?��?�?    ],
    defaultSize: 24,
    defaultColor: "currentColor",
  },
});
```

### ??Nuxt 組件中使??

```vue
<template>
  <!-- ?��?導入，無?�?��? import -->
  <SvgIcon name="home" />

  <!-- 使用組件級別?�自定義路�? -->
  <SvgIcon name="nuxt-icon" :paths="['~/assets/special-icons']" />
</template>
```

## ?��??�置路�?

```typescript
import { addIconPath, removeIconPath, resetIconPaths } from "vue-smart-icons";

// 添�??�路�?addIconPath("src/new-icons");

// 移除路�?
removeIconPath("src/old-icons");

// ?�置?��?設路�?resetIconPaths();
```

## 路�??��?�?

1. 組件 `paths` 屬性�??�高優?��?�?2. ?��??��?置�?路�?
2. ?�件/模�??�置?�路�?4. ?�設路�?（�?低優?��?�?
   ?��?載入?��??�照?��?級�?序�?試�??��??�到第�??�匹?��??��??��?止�?
