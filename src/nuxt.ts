// 簡化的 Nuxt 導出 - 適用於直接使用
import SvgIcon from "./components/SvgIcon.vue";
import { setSvgIconConfig } from "./config";

// 應用 SVG 圖標配置
const applySvgIconConfig = (nuxtApp: any): void => {
  if (nuxtApp.$config?.public?.svgIcon) {
    setSvgIconConfig(nuxtApp.$config.public.svgIcon);
  }
};

// 註冊 SVG 圖標組件
const registerSvgIconComponent = (nuxtApp: any): void => {
  nuxtApp.vueApp.component("SvgIcon", SvgIcon);
};

// 簡化的 Nuxt 插件
export default function (nuxtApp: any) {
  applySvgIconConfig(nuxtApp);
  registerSvgIconComponent(nuxtApp);
}

export { SvgIcon };
