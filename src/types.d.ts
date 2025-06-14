declare module "*.svg?raw" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  const content: string;
  export default content;
}

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

export { SvgIcon } from "./components/SvgIcon.vue";
