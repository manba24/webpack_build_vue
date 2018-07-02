module.exports = (isDev) => {
  return {
    preserverWhitepace: true,  //去除换行的空格
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true
    }
  }
}
