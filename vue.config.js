module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'api': '@/api',
                'views': '@/views',
            }
        }
    },
    publicPath: "/",
    lintOnSave: false // 关闭 eslint 检查
}