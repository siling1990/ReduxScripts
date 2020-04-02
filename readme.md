###说明
针对React-redux的，界面及redux文件创建脚本<br>
所需依赖(版本酌情更改)：<br>
```
    "dependencies": {
        "react": "16.8.3",
        "react-native": "0.59.9",
        "react-redux": "^5.0.5",
        "redux": "^3.6.0",
        "redux-logger": "~2.7.4",
        "redux-thunk": "^2.2.0"
    }
```

###安装
npm install  @stonescott/reduxscripts
###配置 
```
"scripts": {
    "auto-redux": "./node_modules/@stonescott/reduxscripts/scripts/index.js"
  }
```
###使用
>npm run auto-redux h  帮助<br>

>npm run auto-redux i  初始化，建议先运行<br>

创建reudx所需的目录['Action', 'Reducers', 'Page', 'Services', 'Constants', 'Store']，创建redux store 工具文件index.js<br>

配合Provider使用方法：
```
import { Provider } from 'react-redux'
import configureStore from './Store'
const store = configureStore()
...
    <Provider store={store}>
    </Provider>
...
```

 
>npm run auto-redux p [创建文件名]

示例：npm run auto-redux p DemoPage，会默认创建DemoPage.js及redux相关的文件
###配置文件(reduxconfig.js)
```
{
   isJDRN:false,//是否JDRN目录结构
   fileFolder:"src",//redux代码根目录，isJDRN = false时生效
   //目录名，会在redux代码根目录下创建，文件会生成在对应目录下
   pageFolderName:"Pages",//页面目录名
   actionFolderName:"Actions",//action目录名
   actionTypesFolderName:"Constants",//actionTypes目录名
   reducerFolderName:"Reducers",//reducer目录名
   serviceFolderName:"Services",//service目录名
   otherFolders:[]//其他目录名
}
```