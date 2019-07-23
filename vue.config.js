const path = require('path')

//绝对路径
function resolve(dir){
    return path.join(__dirname,dir)
}

module.exports = {
    publicPath:'/',//基本路径
    //如果想把开发服务器架设在根路径下
    //publicPath:process.env.NODE_ENV === 'production'?'/production-sub-path':'/',
    outputDir:'dist',//输出文件的目录
    assetsDir:'static',//静态文件路径
    lintOnSave:true,//eslint-loader 是否在保存的时候检查
    devServer:{//浏览器同时显示警告和错误
        overlay:{
            warning:true,
            errors:true
        }
    },
    //webpack配置
    chainWebpack:(config)=>{
        config.plugins.delete('preload')
    },
    configureWebpack:(config)=>{
        if(process.env.NODE_ENV === 'production'){
            //为生产环境修改配置
            config.mode = 'production'
        } else {
            //为开发环境修改配置
            config.mode = 'development'
        }
        Object.assign(config,{
            //开发生产共同配置
            resolve:{
                //定义别名
                alias:{
                    '@':resolve('./src'),
                    '@c':resolve('./src/components'),
                    '@p':resolve('./src/pages'),
                    '@v':resolve('./src/views')
                }
            }
        })
    }
}