@echo off


rem �汾v1.0
if not exist nul ""

::������������������ļ�

echo  ���벢���� >>log.txt


call build-project.bat >>log.txt

call start-project.bat >>log.txt

type  log.txt

pause
