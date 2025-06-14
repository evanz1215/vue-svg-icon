import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";
import { fileURLToPath, URL } from "node:url";
import dts from "vite-plugin-dts";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === "lib") {
    // 主庫建置 - 支援 ES 和 UMD
    return {
      plugins: [
        vue(),
        dts({
          insertTypesEntry: true,
          outDir: "dist",
          include: ["src/**/*"],
          exclude: ["src/vite-plugin.ts", "src/nuxt.ts"],
        }),
      ],
      build: {
        lib: {
          entry: resolve(__dirname, "src/index.ts"),
          name: "VueSvgIcon",
          fileName: "vue-svg-icon",
          formats: ["es", "umd"],
        },
        rollupOptions: {
          external: ["vue"],
          output: {
            exports: "named",
            globals: {
              vue: "Vue",
            },
          },
        },
        copyPublicDir: false,
        outDir: "dist",
      },
    };
  }

  // 插件建置 - 只需要 ES 格式
  return {
    plugins: [
      vue(),
      dts({
        outDir: "dist",
        include: ["src/vite-plugin.ts", "src/nuxt.ts"],
        entryRoot: "src",
      }),
    ],
    build: {
      lib: {
        entry: {
          "vite-plugin": resolve(__dirname, "src/vite-plugin.ts"),
          "nuxt-module": resolve(__dirname, "src/nuxt.ts"),
        },
        formats: ["es"],
      },
      rollupOptions: {
        external: ["vue", "vite", "@nuxt/kit"],
        output: {
          entryFileNames: "[name].js",
        },
      },
      copyPublicDir: false,
      outDir: "dist",
      emptyOutDir: false, // 不清空輸出目錄，保留已有文件
    },
  };
});
