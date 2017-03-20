//从组件入口文件导入各个组件；
import view from '../../src/pages/index.js'
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
export default [
  { path: '/roleLists', component: view.roleLists },
  { path: '/accountList', component: view.accountList },
  { path: '/r_form', component: view.c_form },
  { path: '/r_table', component: view.c_table }
]
