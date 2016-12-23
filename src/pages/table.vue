<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column type="index" label="编号" sortable width="180"></el-table-column>
    <el-table-column prop="date" label="日期" sortable width="180"></el-table-column>
    <el-table-column prop="user" label="姓名" width="180"></el-table-column>
    <el-table-column prop="address" label="地址" :formatter="formatter"></el-table-column>
    <el-table-column prop="tag" label="标签" width="100" :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]" :filter-method="filterTag" inline-template>
      <el-tag :type="row.tag === '家' ? 'primary' : 'success'" close-transition>{{row.tag}}</el-tag>
    </el-table-column>
    <el-table-column
      inline-template
      :context="_self"
      label="操作"
      width="200">
      <span>
        <el-button @click="handleClick" size="small">查看</el-button>
        <el-button  type="danger" size="small">删除</el-button>
      </span>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          user: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '家'
        }, {
          date: '2016-05-04',
          user: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          tag: '公司'
        }, {
          date: '2016-05-01',
          user: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        }, {
          date: '2016-05-03',
          user: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        }]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      handleClick(){
        console.log(1);
      }
    }
  }
</script>