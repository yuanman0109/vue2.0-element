// 1. 定义（路由）组件。
// 可以从其他文件 import 进来,这里加载所有组件并导出
import roleLists from './roleLists.vue'
import accountList from './account/accountList.vue'
import c_form from './form.vue'
import c_table from './table.vue'
export default { roleLists,accountList,c_form,c_table }