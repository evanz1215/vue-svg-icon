# Vue SVG Icon ä½¿ç”¨ç¯„ä?

## å®‰è??Œä½¿??
### 1. ES æ¨¡ç?ä½¿ç”¨ï¼ˆæ¨?¦ï?

```typescript
// ä½¿ç”¨?½å??¯å‡º - ?¨è–¦?¹å?
import { VueSvgIconPlugin, SvgIcon } from "@evanz1215/vue-svg-icon";
import "@evanz1215/vue-svg-icon/dist/vue-svg-icon.css";

// å®‰è??’ä»¶
app.use(VueSvgIconPlugin, {
  iconPaths: ["src/assets/icons"],
  defaultSize: 24,
  defaultColor: "currentColor",
});

// ?–ç›´?¥ä½¿?¨ç?ä»?import { SvgIcon } from "@evanz1215/vue-svg-icon";
```

### 2. UMD ä½¿ç”¨ï¼ˆç€è¦½?¨ï?

```html
<script src="vue-svg-icon.umd.cjs"></script>
<script>
  // ä½¿ç”¨?½å??¯å‡º
  const { VueSvgIconPlugin, SvgIcon } = VueSvgIcon;

  app.use(VueSvgIconPlugin);
</script>
```

### 3. ?‘å??¸å®¹ï¼ˆä??¯æ´?è¨­?¯å‡ºï¼?
```typescript
// ä»ç„¶?¯æ´?è¨­?¯å‡ºï¼Œä?ä¸æ¨??import VueSvgIconPlugin from "@evanz1215/vue-svg-icon";
app.use(VueSvgIconPlugin);
```

## API èªªæ?

### ä¸»è??¯å‡º

- `VueSvgIconPlugin` - Vue ?’ä»¶
- `SvgIcon` - SVG ?–æ?çµ„ä»¶
- `setSvgIconConfig` - è¨­ç½®?ç½®
- `getSvgIconConfig` - ?²å??ç½®
- `addIconPath` - æ·»å??–æ?è·¯å?
- `removeIconPath` - ç§»é™¤?–æ?è·¯å?
- `resetIconPaths` - ?ç½®?–æ?è·¯å?
- `viteSvgIcon` - Vite ?’ä»¶

### é¡å?å®šç¾©

- `SvgIconProps` - çµ„ä»¶å±¬æ€§é???- `InstallOptions` - å®‰è??¸é?é¡å?
