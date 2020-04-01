#!/bin/bash
#########################################################################
# Author: stone
show_help ( ) {
  echo "Help:"
  echo "-h : Show Help"
  echo "-i : init"
  echo "-p [page name]: create js page with redux files，e.g. -p Test ，will create Test.js"
  exit 0
}
while getopts ":h:i:p:" opt
do
    case $opt in
        h)
        show_help
        ;;
        i)
        echo "参数b的值$OPTARG"
        ;;
        p)
        echo "参数c的值$OPTARG"
        ;;
        ?)
        echo "-h 帮助信息  -i 初始化  -p [页面名称]"
        exit 1;;
    esac
done
