<template>
<div> 
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="realName"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="userNo"
      label="工号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="roleName"
      label="角色">
    </el-table-column>
    <el-table-column
      prop="deptName"
      label="部门">
    </el-table-column>
    <el-table-column
      prop="userName"
      label="账号">
    </el-table-column>
    <el-table-column
      label="状态">
      <template scope="scope">
        {{stateText[scope.row.status]}}
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template scope="scope">
        <el-button
          size="small"
          @click="handleEdit(scope.$index, scope.row)">详情</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">{{stateText[scope.row.status]}}</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="block">
    <el-pagination
      layout="prev, pager, next"
      @current-change="handleCurrentChange"
      :page-size="5"
      :total="totalSize">
    </el-pagination>
  </div>
</div>
</template>
<script>
  export default {
    data(){
      return {
        tableData:null,
        totalSize:null,
        stateText:{
          'DISABLED':'禁用',
          'ENABLED':'启用'
        }
      }
    },
    mounted:function(){
      var that=this;
      that.handleCurrentChange(1);
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      operateStatus(index, row) {
        function(){}
        if(row.status=='DISABLED'){

        }
      },
      handleCurrentChange(val){
        var that=this;
        that.currentPage = val;
        that.$http.get(that.bsConfig.api+'/user/list',{params:{pageNo:val,pageSize:5}}).then(response => {
            // success callback
            var datas = response.data.data;
            that.tableData=datas.data;
            that.totalSize = datas.totalRecords;
        }, response => {
            // error callback
        })
      },
    }
  }
</script>
<style>
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>