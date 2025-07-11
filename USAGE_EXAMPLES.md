# Vue SVG Icon 使用範例

## 安裝及使用

### 1. ES 模組使用（推薦）

```typescript
// 使用具名匯出 - 推薦方式
import { VueSvgIconPlugin, SvgIcon } from "vue-smart-icons";
import "vue-smart-icons/dist/vue-svg-icon.css";

// 安裝插件
app.use(VueSvgIconPlugin, {
  iconPaths: ["src/assets/icons"],
  defaultSize: 24,
  defaultColor: "currentColor",
});

// 或直接使用組件
import { SvgIcon } from "vue-smart-icons";
```

### 2. UMD 使用（瀏覽器）

```html
<script src="vue-svg-icon.umd.cjs"></script>
<script>
  // 使用具名匯出
  const { VueSvgIconPlugin, SvgIcon } = VueSvgIcon;

  app.use(VueSvgIconPlugin);
</script>
```

### 3. 舊版相容（仍支援預設匯出）

```typescript
// 仍然支援預設匯出，但不推薦
import VueSvgIconPlugin from "vue-smart-icons";
app.use(VueSvgIconPlugin);
```

## API 說明

### 主要匯出

- `VueSvgIconPlugin` - Vue 插件
- `SvgIcon` - SVG 圖標組件
- `setSvgIconConfig` - 設置配置
- `getSvgIconConfig` - 獲取配置
- `addIconPath` - 添加圖標路徑
- `removeIconPath` - 移除圖標路徑
- `resetIconPaths` - 重置圖標路徑
- `viteSvgIcon` - Vite 插件

### 型別定義

- `SvgIconProps` - 組件屬性型別
- `InstallOptions` - 安裝選項型別
