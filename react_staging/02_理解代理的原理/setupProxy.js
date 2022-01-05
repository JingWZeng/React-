const {createProxyMiddleware}= require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        createProxyMiddleware('/api1',{ //遇见/api1前缀的请求，就会触发该代理配置
            target:'http://localhost:5000', //请求转发给谁
            changeOrigin:true, //控制服务器收到的请求头中Host的值，欺骗服务器这样子，如果是false，因为我是3000端口请求的，服务器可以知道我是3000，如果写了，那我就变成了5000
            pathRewrite:{'^/api1':''} //重写请求路径(必须) 给服务器的请求地址，一开始带上了api1,这个时候服务器那边就显示我想请求的是api1/xxx,但是真正的请求地址是xxx，不带api1的
        }),
        createProxyMiddleware('/api2',{
            target:'http://localhost:5001',
            changeOrigin:true,
            pathRewrite:{'^/api2':''}
        }),

    )
}