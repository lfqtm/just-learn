const proxy = require('http-proxy-middleware')

module.exports = function(app){
  app.use(
    proxy('/api1',{ //遇见请求中配置了api1,就会触发代理配置
      target:'http://localhost:5000', //请求转发给谁
      changeOrigin:true, //请求host内容
      pathRewrite:{'^/api1':''} //重写url
    }),
    proxy('/api2',{
      target:'http://localhost:5001',
      changeOrigin:true,
      pathRewrite:{'^/api2':''}
    }),
    proxy('/api3',{
      target:'https://randomuser.me',
      changeOrigin:true,
      pathRewrite:{'^/api3':''}
    }),
    
  )
}