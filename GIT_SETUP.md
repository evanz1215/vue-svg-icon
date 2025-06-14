# Git 儲存庫設置指南

## 已完成的設置

- ✅ 初始化 Git 儲存庫 (`git init`)
- ✅ 配置完整的 `.gitignore` 文件
- ✅ 進行初始提交

## 建議的 Git 配置

### 1. 設置用戶信息（如果還沒設置）

```bash
# 設置全局用戶名和郵箱
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 或只為此專案設置
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

### 2. 設置預設分支名稱

```bash
# 設置預設分支為 main（推薦）
git config --global init.defaultBranch main

# 將當前分支從 master 重命名為 main
git branch -M main
```

### 3. 設置行尾字符處理

```bash
# Windows 環境建議設置
git config core.autocrlf false
git config core.eol lf
```

## 連接到遠端儲存庫

### GitHub

1. 在 GitHub 創建新儲存庫
2. 添加遠端儲存庫：

```bash
git remote add origin https://github.com/your-username/vue-svg-icon.git
git branch -M main
git push -u origin main
```

### GitLab

```bash
git remote add origin https://gitlab.com/your-username/vue-svg-icon.git
git branch -M main
git push -u origin main
```

## 有用的 Git 命令

```bash
# 檢查狀態
git status

# 檢查提交歷史
git log --oneline --graph

# 檢查遠端儲存庫
git remote -v

# 推送到遠端
git push

# 拉取最新更改
git pull
```

## Git 工作流程建議

### 功能分支工作流程

```bash
# 創建新功能分支
git checkout -b feature/new-feature

# 開發完成後
git add .
git commit -m "feat: add new feature"

# 切換回主分支
git checkout main

# 合併功能分支
git merge feature/new-feature

# 刪除功能分支
git branch -d feature/new-feature
```

### 提交訊息規範

建議使用 [Conventional Commits](https://www.conventionalcommits.org/) 格式：

```
feat: 新功能
fix: 修復問題
docs: 文檔更新
style: 格式調整
refactor: 代碼重構
test: 測試相關
chore: 建置工具或輔助工具變動
```

## package.json 中的 Git 設置

確保更新 `package.json` 中的以下欄位：

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/your-username/vue-svg-icon.git"
  },
  "homepage": "https://github.com/your-username/vue-svg-icon#readme",
  "bugs": {
    "url": "https://github.com/your-username/vue-svg-icon/issues"
  }
}
```
