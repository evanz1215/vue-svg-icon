import type { App } from "vue";
import SvgIcon from "./components/SvgIcon.vue";
import {
  setSvgIconConfig,
  getSvgIconConfig,
  addIconPath,
  removeIconPath,
  resetIconPaths,
} from "./config";

// 導出主要功能
export {
  SvgIcon,
  setSvgIconConfig,
  getSvgIconConfig,
  addIconPath,
  removeIconPath,
  resetIconPaths,
};

export interface SvgIconProps {
  name: string;
  size?: string | number;
  color?: string;
  class?: string;
  paths?: string[];
}

export interface InstallOptions {
  iconPaths?: string[];
  defaultSize?: string | number;
  defaultColor?: string;
}

// 應用安裝選項配置
const applyInstallOptions = (options?: InstallOptions): void => {
  if (options) {
    setSvgIconConfig(options);
  }
};

// 註冊 SVG 圖標組件
const registerComponent = (app: App): void => {
  app.component("SvgIcon", SvgIcon);
};

// Vue 插件
const VueSvgIconPlugin = {
  install(app: App, options?: InstallOptions) {
    applyInstallOptions(options);
    registerComponent(app);
  },
};

// 導出插件作為命名匯出
export { VueSvgIconPlugin };

// 導出 Vite 插件
export { viteSvgIcon } from "./vite-plugin";

// 為了向後相容，也提供預設匯出
export default VueSvgIconPlugin;
