import type { Plugin } from "vite";

export interface ViteSvgIconOptions {
  iconPaths?: string[];
  defaultSize?: string | number;
  defaultColor?: string;
}

// 創建預設配置
const createDefaultConfig = (options: ViteSvgIconOptions) => ({
  iconPaths: options.iconPaths ?? ["src/assets/icons"],
  defaultSize: options.defaultSize ?? 24,
  defaultColor: options.defaultColor ?? "currentColor",
});

// 配置開發模式的全局變數
const configureDevDefines = (
  config: any,
  options: ViteSvgIconOptions
): void => {
  config.define = config.define ?? {};
  config.define.__SVG_ICON_CONFIG__ = JSON.stringify(
    createDefaultConfig(options)
  );
};

// 創建配置腳本標籤
const createConfigScriptTag = (config: any): string => {
  return `<script>
    window.__SVG_ICON_CONFIG__ = ${JSON.stringify(config)};
  </script>`;
};

// 創建完整的 head 標籤
const createHeadWithScript = (config: any): string => {
  const scriptTag = createConfigScriptTag(config);
  return `<head>
  ${scriptTag}`;
};

// 注入 HTML 配置腳本
const injectConfigScript = (html: string, config: any): string => {
  const newHead = createHeadWithScript(config);
  return html.replace("<head>", newHead);
};

export function viteSvgIcon(options: ViteSvgIconOptions = {}): Plugin {
  const config = createDefaultConfig(options);

  return {
    name: "vite-svg-icon",
    config(viteConfig, { command }) {
      // 在開發模式下注入配置
      if (command === "serve") {
        configureDevDefines(viteConfig, options);
      }
    },
    transformIndexHtml(html) {
      // 在 HTML 中注入配置
      return injectConfigScript(html, config);
    },
  };
}
