<template>
    <div class="sidebar">
        <el-row>
            <el-col :span="24">
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router>
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>账户管理</template>
                        <el-menu-item index="/accountList">账户列表</el-menu-item>
                        <el-menu-item index="/roleLists">角色管理</el-menu-item>
                        <el-menu-item index="/r_form">Form</el-menu-item>
                        <el-menu-item index="/r_table">Table</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                        <el-menu-item index="/r_layout">Go to Foo</el-menu-item>
                        <el-menu-item index="/r_form">Go to bar</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
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
<style scoped>
    .sidebar{
        width:200px;
        position: fixed;
        left: 0;
        bottom: 0;
        top: 60px;
        background-color: #eff2f7;
     }
</style>