# 代碼格式化指南

本專案使用 [Prettier](https://prettier.io/) 來保持代碼格式的一致性。

## 已安裝的工具

- **Prettier** - 代碼格式化工具
- **配置文件** - `.prettierrc` 和 `.prettierignore`
- **VS Code 設置** - 自動格式化配置

## 可用的腳本

```bash
# 格式化所有文件
npm run format

# 檢查格式是否正確（不修改文件）
npm run format:check

# 只格式化 src 目錄下的文件
npm run format:src
```

## Prettier 配置

當前配置位於 `.prettierrc`：

```json
{
  "semi": true, // 使用分號
  "trailingComma": "es5", // ES5 尾隨逗號
  "singleQuote": true, // 使用單引號
  "printWidth": 80, // 每行最大字符數
  "tabWidth": 2, // 縮進大小
  "useTabs": false, // 使用空格而非 Tab
  "arrowParens": "avoid", // 箭頭函數參數括號
  "endOfLine": "lf" // 行尾字符
}
```

## VS Code 設置

如果你使用 VS Code，已經配置了以下設置：

- **保存時自動格式化** - 文件保存時自動運行 Prettier
- **預設格式化器** - 所有支援的文件類型都使用 Prettier
- **建議擴展** - 會提示安裝 Prettier 擴展

## 建議的 VS Code 擴展

專案會自動建議安裝以下擴展：

- `esbenp.prettier-vscode` - Prettier 格式化器
- `Vue.volar` - Vue 3 支援
- `ms-vscode.vscode-typescript-next` - TypeScript 支援

## 忽略文件

以下文件和目錄會被 Prettier 忽略（配置在 `.prettierignore`）：

- `dist/` - 建置輸出
- `node_modules/` - 依賴包
- `*.log` - 日誌文件
- `package-lock.json` - 鎖定文件

## 自動化

- **建議做法**：啟用 VS Code 的保存時自動格式化
- **CI/CD**：可以在 CI 流程中加入 `npm run format:check`
- **Git Hooks**：可以使用 `husky` + `lint-staged` 在提交前自動格式化

## 手動格式化

如果需要手動格式化特定文件：

```bash
# 格式化單個文件
npx prettier --write src/index.ts

# 格式化特定目錄
npx prettier --write src/**/*.vue

# 檢查特定文件
npx prettier --check src/index.ts
```
