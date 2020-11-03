export default {
    // vite使用koa-proxies进行代理
    proxy: {
        '/api/juhe': {
            target: 'http://v.juhe.cn/',
            changeOrigin: true,
            rewrite: path => path.replace(/^\/api\/juhe/, '')
        },
        '/api/tophub': {
            target: 'https://www.tophub.fun:8888/',
            changeOrigin: true,
            rewrite: path => path.replace(/^\/api\/tophub/, '')
        }
    },
    optimizeDeps: {
        include: [
            'ant-design-vue/es/locale/zh_CN'
        ]
    }
}