@echo off
REM 比较文本文件
fc 1.txt 2.txt >nul
if %errorlevel% equ 0 (
  echo 相同
) else (
  echo 不同
)