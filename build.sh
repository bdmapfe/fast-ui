#!/bin/sh
# *****just exec offline, not work on agile*****

echo "build start"

if [ -d "product" ]
then
    rm -rf product
fi
mkdir -p product

echo '============ npm start ============='

#npm install --registry=http://registry.npm.baidu.com/
#npm install --registry=https://registry.npm.taobao.org
#npm install --registry=http://pnpm.baidu.com

#choose env argument, the default is [build], maybe [qa]
#choose build modules, the default is '', maybe [demos]
moduleName=''
buildMethod='build'
if [ x$1 != x ]
then
    moduleName=$1
fi
if [ $2 = 'qa' ]
then
    buildMethod='build-qa'
fi

npm run $buildMethod $moduleName

# put the compiled code into [[product]] directory and compress the files as [[moduleName.tar.gz]]
for dirName in $(ls ./projects); do
    if [[ $dirName != 'common' && ($moduleName == 'all' || ($moduleName != '' && $dirName == $moduleName)) ]]
    then
        APP_NAME=$dirName

        cd projects/$dirName
        #echo $(pwd)
        mkdir -p $APP_NAME
        #check the output containes es6 state
        echo '********可能包含es6的产出文件-start*********'
        grep -lE "let\s|const\s|await\s|async\s|class\s" dist/static/js/*.js
        echo '********可能包含es6的产出文件-end*********'

        mv dist/* $APP_NAME/

        tar czf $APP_NAME.tar.gz $APP_NAME/*

        mv $APP_NAME.tar.gz ../../product/

        rm -rf $APP_NAME/
        cd ../../
    fi
done
