<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{gf_link}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{f_link}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{m_link}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script>
    export default {
        data(){
            return {
                gf_link:'活动列表',
                f_link:'活动管理',
                m_link:'活动详情'
            }
        }
    }
</script>
<style scoped>
    .el-breadcrumb{
        margin-bottom: 20px;
    }
</style>