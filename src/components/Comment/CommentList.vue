<template>
    <div class="user">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="评论人：">
      <el-input v-model="formInline.user" placeholder="请输入评论人名称"></el-input>
    </el-form-item>
    <el-form-item label="评论歌曲：">
      <el-input v-model="formInline.user" placeholder="请输入评论歌曲"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column fixed prop="date" label="歌曲ID" width="150">
        </el-table-column>
        <el-table-column prop="name" label="歌曲名" width="120"> </el-table-column>
        <el-table-column prop="province" label="评论者" width="120">
        </el-table-column>
        <el-table-column prop="address" label="评论内容" width="300">
        </el-table-column>
        <el-table-column prop="zip" label="来源" width="120"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="150">
          <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
        </el-table-column>
      </el-table>
      <el-pagination background="#fff" layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
  </template>
  
  <script>
  export default {
    components: {},
    data() {
      return {
        formInline: {
            user: '',
            region: ''
          },
          form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          },
          formLabelWidth: '120px',
          dialogTableVisible: false,
          dialogFormVisible: false,
        tableData: [{
            date: '00001',
            name: '人间浮游',
            province: '小明',
            address: '这是评论内容',
            zip: '196.168.0.1'
          },{
            date: '00001',
            name: '人间浮游',
            province: '小明',
            address: '这是评论内容',
            zip: '196.168.0.1'
          },{
            date: '00001',
            name: '人间浮游',
            province: '小明',
            address: '这是评论内容',
            zip: '196.168.0.1'
          },{
            date: '00001',
            name: '人间浮游',
            province: '小明',
            address: '这是评论内容',
            zip: '196.168.0.1'
          },{
            date: '00001',
            name: '人间浮游',
            province: '小明',
            address: '这是评论内容',
            zip: '196.168.0.1'
          },{
            date: '00001',
            name: '人间浮游',
            province: '小明',
            address: '这是评论内容',
            zip: '196.168.0.1'
          },{
            date: '00001',
            name: '人间浮游',
            province: '小明',
            address: '这是评论内容',
            zip: '196.168.0.1'
          },{
            date: '00001',
            name: '人间浮游',
            province: '小明',
            address: '这是评论内容',
            zip: '196.168.0.1'
          },{
            date: '00001',
            name: '人间浮游',
            province: '小明',
            address: '这是评论内容',
            zip: '196.168.0.1'
          },{
            date: '00001',
            name: '人间浮游',
            province: '小明',
            address: '这是评论内容',
            zip: '196.168.0.1'
          },]
      };
    },
    created() {},
    mounted() {},
    watch: {},
    computed: {},
    methods: {
      deleteRow(index, rows) {
          rows.splice(index, 1);
        },
    },
  };
  </script>
  <style  scoped>
  .user{
    font-size: 16px;
  }
  .demo-form-inline{
    text-align: end;
    background: #fff;
    padding: 5px;
  }
  .el-pagination{
    background: #fff;
  }
  .el-select,.el-date-editor.el-input{
    width: 100%;
  }
  </style>