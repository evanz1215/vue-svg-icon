// 測試新的 API 結構
import {
  VueSvgIconPlugin,
  SvgIcon,
  setSvgIconConfig,
  type SvgIconProps,
  type InstallOptions,
} from "../src/index";
import { viteSvgIcon } from "../src/vite-plugin";

// 測試類型
const props: SvgIconProps = {
  name: "home",
  size: 24,
  color: "red",
  class: "my-icon",
  paths: ["custom/path"],
};

const options: InstallOptions = {
  iconPaths: ["src/assets/icons"],
  defaultSize: 24,
  defaultColor: "currentColor",
};

// 測試插件
console.log("VueSvgIconPlugin:", VueSvgIconPlugin);
console.log("SvgIcon:", SvgIcon);
console.log("viteSvgIcon:", viteSvgIcon);
console.log("setSvgIconConfig:", setSvgIconConfig);

export { VueSvgIconPlugin, SvgIcon, viteSvgIcon };
