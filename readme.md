###说明
针对React-redux的，界面及redux文件创建脚本 
###安装
npm install  @stonescott/reduxscripts
###配置 
"scripts": {
    "create-page": "./node_modules/@stonescott/reduxscripts/scripts/create-page.js"
  },
###使用
npm run create-page p [创建文件名]，示例：npm run create-page p demoPage，会默认创建reudx所需的目录['Action', 'Reducers', 'Page', 'Services', 'Constants']管理对应文件，不存在会创建新的文件