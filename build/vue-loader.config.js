module.exports = (isDev) => {
    return {
        preserverWhitepace: true,  //去除换行的空格
        extractCSS: !isDev,        //.vue文件里面css打包
        cssModules: {
            localIdentName: isDev?'[path]-[name]-[hash:base64:5]':'[hash:base64:5]',
            camelCase: true
        },
        //hotReload:false,      //根据环境变量生成


    }
}