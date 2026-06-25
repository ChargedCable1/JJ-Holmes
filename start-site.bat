@echo off
cd /d "%~dp0"

where pnpm >nul 2>nul
if errorlevel 1 (
  echo Installing pnpm...
  npm install -g pnpm@10
)

echo Installing site files...
pnpm install

echo Starting website...
pnpm dev

pause
