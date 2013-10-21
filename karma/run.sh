#!/bin/bash

if [ -d node_modules ] 
then
    npm run-script test
else 
    echo -e "\033[0;31mERROR:\033[0m file \"\033[0;31mnode_modules\033[0m\" does not exist, please run the command: \033[0;32mnpm install\033[0m"
fi
