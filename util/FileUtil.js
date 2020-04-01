const fs = require("fs");
const path = require("path");
module.exports = {
    mkdirs: function (pathname) {
        // 需要判断是否是绝对路径(避免不必要的bug)
        pathname = path.isAbsolute(pathname) ? pathname : path.join(__dirname, pathname);
        // 获取相对路径
        pathname = path.relative(__dirname, pathname);
        let floders = pathname.split(path.sep); // path.sep 避免平台差异带来的bug
        let pre = "";
        floders.forEach(floder => {
            try {
                // 没有异常，文件已经创建，提示用户改文件已经创建
                let _stat = fs.statSync(path.join(__dirname, pre, floder));
                let hasMkdir = _stat && _stat.isDirectory();
                if (hasMkdir) {
                    //console.log(`文件${floder}已经存在，不能重复创建，请重新创建`);
                }
            } catch (error) {
                // 抛出异常，文件不存在则创建文件
                try {
                    // 避免父文件还没有创建的时候先创建子文件所出现的意外bug,这里选择同步创建文件
                    console.log(`创建目录${pathname}`)
                    fs.mkdirSync(path.join(__dirname, pre, floder));
                    console.log(`目录：${pathname}创建成功`);
                } catch (error) {
                    console.log(error)
                }
            }
            pre = path.join(pre, floder); // 路径拼合
        });
    },

    writeFile: function (fileName, content, encode, callback) {
        const file = path.join(__dirname, fileName);
        fs.writeFile(file, content, encode, (error) => {
            if (error && callback && typeof callback == 'function') {
                console.log(error);
            } else {
                console.log(`文件：${fileName}创建成功`);
            }
        })
    },
    readFile: function (fileName, callback) {
        const file = path.join(__dirname, fileName);
        fs.readFile(file, (error, data) => {
            if (callback && typeof callback == 'function') {
                callback(error, data)
            }
        })
    },
    appendFile: function (fileName, content, encode, callback) {
        const file = path.join(__dirname, fileName);
        fs.appendFile(file, content, encode, (error) => {
            if (error && callback && typeof callback == 'function') {
                console.log(error);
            }
        })
    },
    fileExist: function (fileName, callback) {
        const file = path.join(__dirname, fileName);
        fs.exists(file, (exists) => {
            if (callback && typeof callback == "function") {
                callback(exists)
            }
        });
    }

}