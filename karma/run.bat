@ECHO OFF

IF EXIST ".\node_modules" (
 npm run-script test
) ELSE (
 ECHO "file "node_modules" does not exist, please run the command: npm install"
)