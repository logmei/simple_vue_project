// 导出所有js
const modulesFiles = require.context('./', true, /.*\/modules\/\w+\.js$/)
// console.log('modulesFiles', modulesFiles.keys())

// 导出table列
const tableColumnsModuleFiles = require.context('./', true, /.*\/tableColumns\/modules\/\w+\.js$/)
// console.log('modulesFiles', modulesFiles.keys())


/**
 * 文件夹下的模块
 * @param {*} ModuleFiles ：读取的上下文
 * 返回值是对象
 * 例：{
 * detail:{
 * contract:模块
 * },
 * tableColumns:{
 * contract:模块
 * }
 * }
 */
function getModules(ModuleFiles) {
  const modules = ModuleFiles.keys().reduce((modules, modulePath) => {
    //   console.log('modulePath', modulePath)
    const suffix = '\\.js$'
    const regExp = new RegExp(`^.*\\/(\\w+)\\/modules\\/(\\w+)${suffix}`)
    const result = regExp.exec(modulePath)// 匹配结果
    if (result.length >= 3) {
      const type = result[1]
      const moduleName = result[2]
      modules[type] ? Object.assign(modules[type], { [moduleName]: ModuleFiles(modulePath).default }) : modules[type] = { [moduleName]: ModuleFiles(modulePath).default }
    }
    return modules
  }, {})
  return modules
}

export const TableColumnsModules = getModules(tableColumnsModuleFiles)
export default getModules(modulesFiles)
