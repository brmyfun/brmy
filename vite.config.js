export default {
    // vite使用koa-proxies进行代理
    proxy: {
        '/api': {
            target: 'http://v.juhe.cn/',
            changeOrigin: true,
            rewrite: path => path.replace(/^\/api/, '')
        }
    }
}