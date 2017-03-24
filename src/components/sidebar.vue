<template>
    <div class="sidebar">
        <el-row>
            <el-col :span="24">
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router>
                    <el-submenu index="1">
                        <template slot="title"><i class="iconfont icon-nb-h"></i>账户管理</template>
                        <el-menu-item index="/accountList">账户列表</el-menu-item>
                        <el-menu-item index="/roleLists">角色管理</el-menu-item>
                        <el-menu-item index="/r_form">Form</el-menu-item>
                        <el-menu-item index="/r_table">Table</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="iconfont icon-nb-h1"></i>客户管理</template>
                        <el-menu-item index="/r_layout">Go to Foo</el-menu-item>
                        <el-menu-item index="/r_form">Go to bar</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="iconfont icon-nb-h4"></i>资产管理</template>
                        <el-menu-item index="/r_layout">Go to Foo</el-menu-item>
                        <el-menu-item index="/r_form">Go to bar</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title"><i class="iconfont icon-nb-h2"></i>餐厅设置</template>
                        <el-menu-item index="/r_layout">Go to Foo</el-menu-item>
                        <el-menu-item index="/r_form">Go to bar</el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title"><i class="iconfont icon-nb-h3"></i>WiFi管理</template>
                        <el-menu-item index="/r_layout">Go to Foo</el-menu-item>
                        <el-menu-item index="/r_form">Go to bar</el-menu-item>
                    </el-submenu>
                    <el-submenu index="6">
                        <template slot="title"><i class="iconfont icon-guanggao"></i>广告管理</template>
                        <el-menu-item index="/r_layout">Go to Foo</el-menu-item>
                        <el-menu-item index="/r_form">Go to bar</el-menu-item>
                    </el-submenu>
                    <el-submenu index="7">
                        <template slot="title"><i class="iconfont icon-nb-h5"></i>财务管理</template>
                        <el-menu-item index="/r_layout">Go to Foo</el-menu-item>
                        <el-menu-item index="/r_form">Go to bar</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
    .sidebar{
        width:200px;
        position: fixed;
        left: 0;
        bottom: 0;
        top: 60px;
        background-color: #eff2f7;
     }
     .el-submenu__title{
        text-align: center;
     }
     .el-submenu .el-menu-item{
         text-align: center;
     }
</style>