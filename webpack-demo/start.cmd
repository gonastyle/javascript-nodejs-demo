@echo off


rem 版本v1.0
if not exist nul ""

::↓↓↓↓↓↓输出到文件

echo  编译并构建 >>log.txt


call build-project.bat >>log.txt

call start-project.bat >>log.txt

type  log.txt

pause
