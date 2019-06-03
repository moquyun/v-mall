module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: false,
      theme: false
    }
  },
  devServer: {
    host: 'localhost',
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'https://x.dscmall.cn',   //代理接口
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''    //代理的路径
        }
      }
    }
  }
}
