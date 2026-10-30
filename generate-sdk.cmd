@echo off
chcp 65001 >nul
REM Генерація TypeScript SDK з openapi.yaml за допомогою OpenAPI Generator.
REM Потрібні Node.js 18+ та Java 11+ (генератор написаний на Java).

call npx --yes @openapitools/openapi-generator-cli generate ^
  -i openapi.yaml ^
  -g typescript-axios ^
  -o sdk ^
  --additional-properties=npmName=gaming-platform-sdk,npmVersion=1.0.0,supportsES6=true,withSeparateModelsAndApi=true,apiPackage=api,modelPackage=models

if errorlevel 1 (
  echo Generation failed.
  exit /b 1
)

cd sdk
call npm install
call npm run build
cd ..
echo SDK generated in .\sdk
