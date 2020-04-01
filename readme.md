###说明
针对React-redux的，界面及redux文件创建脚本,
需要react 与react-native等依赖
###安装
npm install  @stonescott/reduxscripts
###配置 
"scripts": {
    "auto-redux": "./node_modules/@stonescott/reduxscripts/scripts/index.js"
  },
###使用
npm run auto-redux h  帮助
npm run auto-redux i  初始化
npm run auto-redux p [创建文件名]，示例：npm run auto-redux p DemoPage，会默认创建DemoPage.js,reudx所需的目录['Action', 'Reducers', 'Page', 'Services', 'Constants']管理对应文件，不存在会创建新的文件