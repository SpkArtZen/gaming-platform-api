@echo off
chcp 65001 >nul
REM Перед запуском створіть ПОРОЖНІЙ публічний репозиторій
REM https://github.com/SpkArtZen/gaming-platform-api (без README).

if exist deploy.yml (
  if not exist .github\workflows mkdir .github\workflows
  move /Y deploy.yml .github\workflows\deploy.yml
)

git init
git add .
git commit -m "Gaming Platform API: OpenAPI spec, TypeScript SDK, Zudoku docs"
git branch -M main
git remote add origin https://github.com/SpkArtZen/gaming-platform-api.git
git push -u origin main

echo.
echo Далі: Settings - Pages - Source: GitHub Actions
