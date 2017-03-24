<template>
  <div id="app">
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <div class="main">
      <Breadcrumb></Breadcrumb>
      <transition name="bounce">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Navbar from './components/header'
import Sidebar from './components/sidebar'
import Breadcrumb from './components/Breadcrumb'

export default {
  components: {
    Navbar,Sidebar,Breadcrumb
  }
}
</script>

<style>
  body{
    font-family: "Hiragino Sans GB","华文细黑",STHeiti,"微软雅黑","Microsoft YaHei",SimHei,"Helvetica Neue",Helvetica,Arial,sans-serif!important;
    background: #f4f4f4;
    color: #666;
  }
  .main{
    padding:80px 20px 20px 220px;
  }
</style>
