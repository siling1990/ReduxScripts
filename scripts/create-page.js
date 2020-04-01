#!/usr/bin/env node
/**
 * Created by Stone on 2020/3/5.
 */
const path = require("path");
const Config = require("../util/Config")
const FileUtil = require("../util/FileUtil")
const packageJson = require(Config.getRoot() + '/package.json')
const moduleName = packageJson.name.split('-').pop()
let PROJECTPATH = `${Config.getRoot()}/jsbundles/${moduleName}/`
const ModuleConfig = Config.getConfig()
if (!ModuleConfig.isJDRN) {
    PROJECTPATH = Config.getRoot() + path.sep + ModuleConfig.fileFolder + path.sep
}
const actionFolderName = !!ModuleConfig.actionFolderName ? ModuleConfig.actionFolderName : 'Action'
const reducerFolderName = !!ModuleConfig.reducerFolderName ? ModuleConfig.reducerFolderName : 'Reducers'
const pageFolderName = !!ModuleConfig.pageFolderName ? ModuleConfig.pageFolderName : 'Page'
const serviceFolderName = !!ModuleConfig.serviceFolderName ? ModuleConfig.serviceFolderName : 'Services'
const actionTypesFolderName = !!ModuleConfig.actionTypesFolderName ? ModuleConfig.actionTypesFolderName : 'Constants'
let FOLDERARRY = [
    actionFolderName,
    reducerFolderName,
    pageFolderName,
    serviceFolderName,
    actionTypesFolderName
]
if (ModuleConfig.otherFloders && ModuleConfig.otherFloders.length > 0) {
    FOLDERARRY = FOLDERARRY.concat(ModuleConfig.otherFloders)
}
const FILEREDUCER = 'index.js'
const FILENAV = 'Navigation.js'
const DEFAULTPAGE = "import PropTypes from 'prop-types';\n" +
    "import React, {PureComponent} from 'react'\n" +
    "import {\n" +
    "    StyleSheet,\n" +
    "} from 'react-native';\n" +
    "import {\n" +
    "    demoAction\n" +
    "} from '../Action/TEMPNAMEAction'\n" +
    "import {connect} from 'react-redux';\n" +
    "\n" +
    "class TEMPNAME extends PureComponent {\n" +
    "    static contextTypes = {\n" +
    "        router: PropTypes.object,\n" +
    "    };\n" +
    "\n" +
    "    constructor(props) {\n" +
    "        super(props);\n" +
    "    }\n" +
    "\n" +
    "    componentDidMount() {\n" +
    "    }\n" +
    "\n" +
    "    render() {\n" +
    "        return (\n" +
    "            <View style={styles.container}\n" +
    "            >\n" +
    "            </View>\n" +
    "        )\n" +
    "    }\n" +
    "\n" +
    "\n" +
    "\n" +
    "}\n" +
    "\n" +
    "export default connect((state) => {\n" +
    "        let TEMPNAMEReducer = state.TEMPNAMEReducer\n" +
    "        return ({\n" +
    "            loading: TEMPNAMEReducer.loading,\n" +
    "            error: TEMPNAMEReducer.error,\n" +
    "            errorCode: TEMPNAMEReducer.errorCode,\n" +
    "            errorMsg: TEMPNAMEReducer.errorMsg,\n" +
    "        });\n" +
    "    },\n" +
    "    {\n" +
    "        //TODO 引入Action 方法\n" +
    "        demoAction: demoAction,\n" +
    "    },\n" +
    "    null,\n" +
    "    {withRef: true}\n" +
    ")(TEMPNAME);\n" +
    "\n" +
    "const styles = StyleSheet.create({\n" +
    "    titleStyle: {\n" +
    "        fontSize: JDDevice.getRpx(32),\n" +
    "        color: '#fff',\n" +
    "    },\n" +
    "    container: {\n" +
    "        flex: 1,\n" +
    "        backgroundColor: '#F2F2F2'\n" +
    "    },\n" +
    "\n" +
    "})"
const ACTIONTYPETEMP = "\n\n/**\n" +
    " * TEMPNAMEUPER\n" +
    " * **/\n" +
    "export const TEMPNAMEUPER_LOADING = 'TEMPNAMEUPER_LOADING';\n" +
    "export const TEMPNAMEUPER_SUCCESS = 'TEMPNAMEUPER_SUCCESS'\n" +
    "export const TEMPNAMEUPER_FAILURE = 'TEMPNAMEUPER_FAILURE'"
const ACTIONTEMP = "import * as types from '../Constants/ActionConstants';\n" +
    "import TEMPNAMEService from '../Services/TEMPNAMEService'\n" +
    "/**\n" +
    " * demo\n" +
    " * */\n" +
    "export const demoAction = (params)=> (dispatch, getState)=>{\n" +
    "    dispatch({type:types.TEMPNAMEUPER_LOADING,data:null})\n" +
    "    TEMPNAMEService.demoService().then((response) => {\n" +
    "        if (response.error) {//状态异常\n" +
    "            dispatch({type:types.TEMPNAMEUPER_FAILURE,data:response.error})\n" +
    "        } else {\n" +
    "            dispatch({type:types.TEMPNAMEUPER_SUCCESS,data:response.data});\n" +
    "        }\n" +
    "    }, (error) => {\n" +
    "        dispatch({type:types.TEMPNAMEUPER_FAILURE,data:null})\n" +
    "    })\n" +
    "}"
const SERVICESTEMP = 'import NetWork from "../Utils/Network";\n' +
    '\n' +
    'export default {\n' +
    '    /**\n' +
    '     * \n' +
    '     * */\n' +
    '    demoService: (param) => {\n' +
    '        return NetWork.request(\'demoService\',{})\n' +
    '    },\n' +
    '}'
const REDUCERTEMP = "import * as types from '../Constants/ActionConstants';\n" +
    "\n" +
    "const initState = {\n" +
    "    loading: false,\n" +
    "    error: false,\n" +
    "    errorMsg: null,\n" +
    "    errorCode:0,\n" +
    "}\n" +
    "\n" +
    "\n" +
    "const TEMPNAMEReducer = (state = initState, action) => {\n" +
    "    switch (action.type) {\n" +
    "        case types.TEMPNAMEUPER_LOADING:\n" +
    "\n" +
    "            return {\n" +
    "                ...state,\n" +
    "                loading: true,\n" +
    "                errorCode:0,\n" +
    "            }\n" +
    "        case types.TEMPNAMEUPER_FAILURE:\n" +
    "\n" +
    "            return {\n" +
    "                ...state,\n" +
    "                error: error,\n" +
    "                loading: false,\n" +
    "                errorMsg: action.data,\n" +
    "            }\n" +
    "        case types.TEMPNAMEUPER_SUCCESS:\n" +
    "\n" +
    "            return {\n" +
    "                ...state,\n" +
    "                error: false,\n" +
    "                loading: false,\n" +
    "                errorMsg: null,\n" +
    "            }\n" +
    "\n" +
    "        default:\n" +
    "            return {\n" +
    "                ...state,\n" +
    "            };\n" +
    "    }\n" +
    "}\n" +
    "\n" +
    "export default TEMPNAMEReducer;"
const NAVTEMP = '\t{/**  TEMPNAME  **/}\n' +
    '                <Route key="TEMPNAMEL" component={TEMPNAME} sceneConfig={Router.SceneConfigs.None}/>\n' +
    '            </Router>'
let fileName = process.argv[2]
console.log(fileName)
if (!!fileName) {
    for (let i = 0; i < FOLDERARRY.length; i++) {
        FileUtil.mkdirs(PROJECTPATH + FOLDERARRY[i], (error) => {

        })
    }
    //ActionConstants.js
    console.log(`创建文件${fileName}.js`)
    let page = DEFAULTPAGE.replace(/TEMPNAME/g, fileName)
    FileUtil.writeFile(`${PROJECTPATH + pageFolderName}/${fileName}.js`, page)

    if (ModuleConfig.isJDRN) {
        FileUtil.fileExist(`${PROJECTPATH + pageFolderName}/${FILENAV}`, (exists) => {
            if (exists) {
                FileUtil.readFile(`${PROJECTPATH + pageFolderName}/${FILENAV}`, (error, data) => {
                    if (error) {
                        console.log(error)
                        console.log(`${PROJECTPATH + pageFolderName}/${FILENAV}\t读取失败`)
                    } else {
                        if (data && !!data.toString()) {
                            let steNav = data.toString()
                            let navNew = `import ${fileName} from './${fileName}' \nclass`
                            steNav = steNav.replace(/class/, navNew)
                            navNew = NAVTEMP.replace(/TEMPNAMEL/g, fileName.replace(fileName[0], fileName[0].toLowerCase()))
                            navNew = navNew.replace(/TEMPNAME/g, fileName)
                            steNav = steNav.replace(/\<\/Router\>/, navNew)

                            writeFile(`${PROJECTPATH + pageFolderName}/${FILENAV}`, steNav, 'utf8')
                        } else {
                            console.log(`${PROJECTPATH + pageFolderName}/${FILENAV}\t读取失败`)
                        }
                    }
                })

            } else {
                console.log(`${PROJECTPATH + pageFolderName}/${FILENAV}\t不存在请先创建`);
            }
        })
    }

    console.log('创建ActionType')
    FileUtil.fileExist(PROJECTPATH + actionTypesFolderName + '/ActionConstants.js',(exists)=>{
        let actionType = ACTIONTYPETEMP.replace(/TEMPNAMEUPER/g, fileName.toUpperCase())
        if(exists){
            FileUtil.appendFile(PROJECTPATH + actionTypesFolderName + '/ActionConstants.js', actionType,'utf8')
        }else{
            FileUtil.writeFile(PROJECTPATH + actionTypesFolderName + '/ActionConstants.js', actionType,'utf8')
        }
    })


    console.log(`创建文件${fileName}Action.js`)
    let actionContent = ACTIONTEMP.replace(/TEMPNAMEUPER/g, fileName.toUpperCase())
    actionContent = actionContent.replace(/TEMPNAME/g, fileName)
    FileUtil.writeFile(`${PROJECTPATH + actionFolderName}/${fileName}Action.js`, actionContent, 'utf8')

    console.log(`创建文件${fileName}Service.js`)
    FileUtil.writeFile(`${PROJECTPATH + serviceFolderName}/${fileName}Service.js`, SERVICESTEMP, 'utf8')


    console.log(`创建文件${fileName}Reducer.js`)
    let reducerContent = REDUCERTEMP.replace(/TEMPNAMEUPER/g, fileName.toUpperCase())
    reducerContent = reducerContent.replace(/TEMPNAME/g, fileName)
    FileUtil.writeFile(`${PROJECTPATH + reducerFolderName}/${fileName}Reducer.js`, reducerContent, 'utf8')

    FileUtil.fileExist(`${PROJECTPATH + reducerFolderName}/${FILEREDUCER}`, (exists) => {
        if (exists) {
            FileUtil.readFile(`${PROJECTPATH + reducerFolderName}/${FILEREDUCER}`, (error, data) => {
                if (error) {
                    console.log(error)
                    console.log(`${PROJECTPATH + reducerFolderName}/${FILEREDUCER}\t读取失败`)
                } else {
                    if (data && !!data.toString()) {
                        let steRed = data.toString()
                        let redNew = `import ${fileName}Reducer from './${fileName}Reducer';\nconst`
                        steRed = steRed.replace(/const/, redNew)

                        redNew = `combineReducers({\n\t${fileName}Reducer,`
                        steRed = steRed.replace(/combineReducers\(\{/, redNew)

                        FileUtil.writeFile(`${PROJECTPATH + reducerFolderName}/${FILEREDUCER}`, steRed, 'utf8')
                    } else {
                        console.log(`${PROJECTPATH + reducerFolderName}/${FILEREDUCER}\t读取失败`)
                    }
                }
            })
        } else {
            let steRed = "const rootReducer = combineReducers({\n" +
                "});\n" +
                "\n" +
                "export default rootReducer;"
            let redNew = `import ${fileName}Reducer from './${fileName}Reducer';\nconst`
            steRed = steRed.replace(/const/, redNew)
            redNew = `combineReducers({\n\t${fileName}Reducer,`
            steRed = steRed.replace(/combineReducers\(\{/, redNew)

            FileUtil.writeFile(`${PROJECTPATH + reducerFolderName}/${FILEREDUCER}`, steRed, 'utf8')
        }
    })

    console.log(`创建文件${fileName}Service.js`)
    FileUtil.writeFile(`${PROJECTPATH}Service/${fileName}Service.js`, '', 'utf8')
} else {
    console.log('-h 帮助信息\n -p [fileName] 页面文件名称，会创建redux相关文件')
}
// if (!!code) {
//     switch (code) {
//         case 'h':
//             console.log('h 帮助信息\n p [fileName] 页面文件名称，会创建redux相关文件')
//         case 'p':

//             break
//         default:
//             console.log('h 帮助信息\n p [fileName] 页面文件名称，会创建redux相关文件')
//     }


// } else {
//     console.log('h 帮助信息\n p [fileName] 页面文件名称，会创建redux相关文件')
// }
