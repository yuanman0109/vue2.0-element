// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './assets/style/comm.scss'
import App from './App'
//引入vue路由
import Router from 'vue-router'
//引入数据请求
import axios from 'axios'
Vue.prototype.$http = axios
Vue.use(Router)
Vue.use(ElementUI)


// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)

//引入路由组件的配置
import routes from '../src/js/router.js'

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new Router({
  routes // （缩写）相当于 routes: routes
})
if(process.env.NODE_ENV!== 'production'){
  Vue.prototype.bsConfig=require('../config/config.dev');
}else{
  Vue.prototype.bsConfig=require('../config/config.prod');
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
