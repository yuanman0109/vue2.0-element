<template>
  <div id="app">
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <div class="main">
      <transition name="bounce">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Navbar from './components/header'
import Sidebar from './components/sidebar'

export default {
  components: {
    Navbar,Sidebar
  }
}
</script>

<style>
body{
  margin: 0
}
#app {
  color: #2c3e50;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}
.main{
  padding:20px 20px 20px 220px;
}

</style>
