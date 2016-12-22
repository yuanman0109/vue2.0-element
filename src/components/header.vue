<template>
    <div class="header-box">
        <div class="logo">
            <h3>后台管理系统</h3>
        </div>
        <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">订单管理</el-menu-item>
        </el-menu>
    </div>
</template>
<script>
  export default {
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
    .header-box{
        background: #324057;
        overflow: hidden;
    }
    .logo{
        width: 200px;
        color: #fff;
        height: 60px;
        float: left;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .el-menu-demo{
        float: right;
    }
</style>