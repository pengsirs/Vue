<template>
    <div class="user">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="专辑名：">
      <el-input v-model="formInline.user" placeholder="请输入专辑名"></el-input>
    </el-form-item>
    <el-form-item label="专辑ID：">
      <el-input v-model="formInline.user" placeholder="请输入专辑ID"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
    </el-form-item>
  </el-form>
  <el-dialog title="新增专辑" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="专辑名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" placeholder="请输入专辑名称" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="封面图" :label-width="formLabelWidth">
        <el-input v-model="form.name" placeholder="请输入专辑封面" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="专辑介绍" :label-width="formLabelWidth">
        <el-input v-model="form.name" placeholder="专辑介绍" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column fixed prop="date" label="编号" width="150">
        </el-table-column>
        <el-table-column prop="name" label="专辑名称" width="120"> </el-table-column>
        <el-table-column prop="province" label="专辑作者" width="120">
        </el-table-column>
        <el-table-column prop="address" label="专辑封面" width="300">
        </el-table-column>
        <el-table-column prop="zip" label="专辑介绍" width="120"> </el-table-column>
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
            name: '专辑名称',
            province: '专辑作者',
            address: '专辑封面',
            zip: '这是专辑介绍'
          },{
            date: '00001',
            name: '专辑名称',
            province: '专辑作者',
            address: '专辑封面',
            zip: '这是专辑介绍'
          },{
            date: '00001',
            name: '专辑名称',
            province: '专辑作者',
            address: '专辑封面',
            zip: '这是专辑介绍'
          },{
            date: '00001',
            name: '专辑名称',
            province: '专辑作者',
            address: '专辑封面',
            zip: '这是专辑介绍'
          },{
            date: '00001',
            name: '专辑名称',
            province: '专辑作者',
            address: '专辑封面',
            zip: '这是专辑介绍'
          },{
            date: '00001',
            name: '专辑名称',
            province: '专辑作者',
            address: '专辑封面',
            zip: '这是专辑介绍'
          },{
            date: '00001',
            name: '专辑名称',
            province: '专辑作者',
            address: '专辑封面',
            zip: '这是专辑介绍'
          },{
            date: '00001',
            name: '专辑名称',
            province: '专辑作者',
            address: '专辑封面',
            zip: '这是专辑介绍'
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