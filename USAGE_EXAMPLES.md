# Vue SVG Icon 使用範�?

## 安�??�使??

### 1. ES 模�?使用（推?��?

```typescript
// 使用?��??�出 - ?�薦?��?
import { VueSvgIconPlugin, SvgIcon } from "vue-smart-icons";
import "vue-smart-icons/dist/vue-svg-icon.css";

// 安�??�件
app.use(VueSvgIconPlugin, {
  iconPaths: ["src/assets/icons"],
  defaultSize: 24,
  defaultColor: "currentColor",
});

// ?�直?�使?��?�?import { SvgIcon } from "vue-smart-icons";
```

### 2. UMD 使用（瀏覽?��?

```html
<script src="vue-svg-icon.umd.cjs"></script>
<script>
  // 使用?��??�出
  const { VueSvgIconPlugin, SvgIcon } = VueSvgIcon;

  app.use(VueSvgIconPlugin);
</script>
```

### 3. ?��??�容（�??�援?�設?�出�?

```typescript
// 仍然?�援?�設?�出，�?不推??import VueSvgIconPlugin from "vue-smart-icons";
app.use(VueSvgIconPlugin);
```

## API 說�?

### 主�??�出

- `VueSvgIconPlugin` - Vue ?�件
- `SvgIcon` - SVG ?��?組件
- `setSvgIconConfig` - 設置?�置
- `getSvgIconConfig` - ?��??�置
- `addIconPath` - 添�??��?路�?
- `removeIconPath` - 移除?��?路�?
- `resetIconPaths` - ?�置?��?路�?
- `viteSvgIcon` - Vite ?�件

### 類�?定義

- `SvgIconProps` - 組件屬性�???- `InstallOptions` - 安�??��?類�?
