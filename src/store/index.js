import Vue from 'vue'
import Vuex from 'vuex'
//确保调用
Vue.use(Vuex)
//获取一个特定上下文，主要用来实现自动化导入模块
/**require.context方法接收三个参数
 * 1、directory:String 读取文件的路径
 * 2、useSubdirectories:Boolean 是否遍历文件的子目录
 * 3、regExp {RegExp} 匹配文件正则
 * 例：require.context('./test',false,/\.test\.js$/)
 * 
 */
const suffix = '\\.js'
const regExp = new RegExp(suffix+'$')
/**
 * require.context返回一个函数
 * 接收参数：
 * 1、request与resolve接收的参数一样，返回模块
 * 三个属性
 * 1、resolve:function接受一个参数request（文件夹下匹配文件的相对路径），返回这个匹配文件相对于整个工程的相对路径
 * 2、keys:function返回匹配成功模块的名字组成的数组
 * 3、id:String 执行环境的id,主要用在module.hot.accept
 * 
 */
const moduleFiles = require.context('./modules',false,regExp)

console.group('moduleFiles')
console.log('keys',moduleFiles.keys())
console.log('id',moduleFiles.id)
console.log('resolve',moduleFiles.resolve(moduleFiles.keys()[0]))

const modules = moduleFiles.keys().reduce((mode,key) => {
    const regExpModule = new RegExp(`^.*\\/(\\w+)${suffix}`)
    const moduleName = key.repalce(regExpModule,'$1')//获取文件名称
    mode[moduleName] = moduleFiles(key).default
    return mode
},{});

//创建store 
const store = new Vuex.store({
    modules
})

export default store