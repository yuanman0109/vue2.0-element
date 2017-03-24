<template>
<div class="mainContent">
  <form class="form-inline">
    <div class="form-group">
      <el-select v-model="searchForm.roleCode" placeholder="按角色" class="small-select">
        <el-option
          v-for="item in roleList"
          :label="item.name"
          :value="item.code">
        </el-option>
      </el-select>
    </div>
    <div class="form-group">
      <el-select v-model="searchForm.deptId" placeholder="按部门" class="small-select">
        <el-option
          v-for="item in departList"
          :label="item.name"
          :value="item.id">
        </el-option>
      </el-select>
    </div>
    <div class="form-group">
      <el-select v-model="searchForm.status" placeholder="按状态" class="small-select">
        <el-option
          v-for="item in stateList"
          :label="item.dataName"
          :value="item.dataCode">
        </el-option>
      </el-select>
    </div>
    <div class="form-group">
      <el-input v-model="searchForm.searchWord" placeholder="按姓名／账号／工号搜索..."></el-input>
    </div>
    <div class="form-group">
      <button type="button" class="btn btn-white" @click="searchBt()">搜索</button>
    </div>
  </form>
  <div class="separate"></div>
  <el-table
    v-loading="loading"
    element-loading-text="拼命加载中"
    :data="tableData"
    style="width: 100%"
    class="text-overflow"
    >
    <el-table-column
      label=""
      width="80"
      className="headImg"
      >
      <template scope="scope">
        <img src="../../assets/images/userdef.png" alt="head"/>
      </template>
    </el-table-column>
    <el-table-column
      prop="realName"
      label="姓名"
      width="100">
    </el-table-column>
    <el-table-column
      prop="userNo"
      label="工号"
      width="100">
    </el-table-column>
    <el-table-column
      prop="roleName"
      label="角色">
    </el-table-column>
    <el-table-column
      prop="deptName"
      label="部门"
      width="80">
    </el-table-column>
    <el-table-column
      prop="userName"
      label="账号">
    </el-table-column>
    <el-table-column
      label="状态"
      width="80">
      <template scope="scope">
        {{stateText[scope.row.status]}}
      </template>
    </el-table-column>
    <el-table-column label="操作" width="200">
      <template scope="scope">
        <button type="button" class="btn btn-link btn-link-success"
          @click="handleEdit(scope.$index, scope.row)">详情</button>
        <button type="button" class="btn btn-link"
          @click="handleEdit(scope.$index, scope.row)">修改</button>
        <button  type="button" class="btn btn-link" :class="{'btn-link-danger':scope.row.status=='ENABLED','btn-link-orange':scope.row.status=='DISABLED'}"
          @click="operateStatus(scope.$index, scope.row)">{{btText[scope.row.status]}}</button>
      </template>
    </el-table-column>
  </el-table>
  <div class="separate"></div>
  <div class="block clearfix">
    <button type="button" class="btn btn-primary">添加账号</button>
    <el-pagination
      class="pull-right"
      layout="prev, pager, next"
      @current-change="pagination"
      :page-size="5"
      :current-page="searchForm.pageNo"
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
        loading:false,
        stateText:{
          'DISABLED':'禁用',
          'ENABLED':'正常'
        },
        btText:{
          'DISABLED':'启用',
          'ENABLED':'禁用'
        },
        roleList:null,
        searchForm:{
          roleCode:null,
          searchWord:'',
          deptId:'',
          status:'',
          pageNo:1
        }
      }
    },
    mounted:function(){
      var that=this;
      that.handleCurrentChange(that.searchForm);
      that.getRolelist();
      that.getDepart();
      that.getState();
    },
    methods: {
      //获取角色列表
      getRolelist(){
        var that=this;
        that.$http.get(that.bsConfig.api+'/role/all').then(response => {
            // success callback
            that.roleList = response.data.data;
        }, response => {
            // error callback
        })
      },
      //获取部门列表
      getDepart(){
        var that=this;
        that.$http.get(that.bsConfig.api+'/dept/list').then(response => {
            // success callback
            that.departList = response.data.data;
        }, response => {
            // error callback
        })
      },
      //获取状态数据
      getState(){
        var that=this;
        that.$http.get(that.bsConfig.api+'/cfg/dictionaries/user_status').then(response => {
            // success callback
            that.stateList = response.data.data;
        }, response => {
            // error callback
        })
      },
      //操作状态
      operateStatus(index,row){
        var that = this;
        function setStatus(isAble){
          that.$http.post(that.bsConfig.api+'/user/'+isAble+'/'+row.id).then(response => {
              // success callback
              if(response.data.status==0){
                row.status=row.status=='DISABLED'?'ENABLED':'DISABLED'
              } 
          }, response => {
              // error callback
          })
        };
        if(row.status=='DISABLED'){
          setStatus('enable');
        }else{
          setStatus('disable');
        }
      },
      //获取账号列表
      handleCurrentChange(param){
        var that=this;
        param.pageSize=5;
        that.loading=true;
        that.$http.get(that.bsConfig.api+'/user/list',{params:param}).then(response => {
            // success callback
            var datas = response.data.data;
            that.tableData=datas.data;
            that.totalSize = datas.totalRecords;
            that.loading=false;
        }, response => {
            // error callback
        })
      },
      //分页
      pagination(val){
        var that=this;
        that.currentPage = val;
        that.searchForm.pageNo = val;
        that.handleCurrentChange(that.searchForm);
      },
      //搜索
      searchBt(){
        var that=this;
        that.searchForm.pageNo=1;
        that.handleCurrentChange(that.searchForm);
      }
    }
  }
</script>
<style lang="scss">
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
  .small-select{
    width: 100px;
  }
  .text-overflow tr td div.cell{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .headImg{
    text-align: center;
    img{
      width: 36px;
      height: 36px;
    }
  }
</style>