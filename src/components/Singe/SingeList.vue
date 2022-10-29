<template>
  <div class="user">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="歌曲名：">
    <el-input v-model="formInline.user" placeholder="请输入歌曲名"></el-input>
  </el-form-item>
  <el-form-item label="歌手名：">
    <el-input v-model="formInline.user" placeholder="请输入歌手名"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
  </el-form-item>
</el-form>
<el-dialog title="新增歌曲" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="歌曲名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" placeholder="请输入歌曲名称" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="歌手名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" placeholder="请输入歌手名称" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="歌曲专辑" :label-width="formLabelWidth">
      <el-input v-model="form.name" placeholder="请输入专辑" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="歌曲来源" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择歌曲来源">
        <el-option label="网易云音乐" value="shanghai"></el-option>
        <el-option label="QQ音乐" value="beijing"></el-option>
      </el-select>
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
      <el-table-column prop="name" label="歌曲名" width="120"> </el-table-column>
      <el-table-column prop="province" label="歌手名" width="120">
      </el-table-column>
      <el-table-column prop="address" label="专辑" width="300">
      </el-table-column>
      <el-table-column prop="zip" label="歌曲来源" width="120"> </el-table-column>
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
          province: '徐深',
          address: '无',
          zip: '网易云音乐'
        },{
          date: '00002',
          name: '唯一',
          province: '告五人',
          address: '运气来的若有似无',
          zip: '网易云音乐'
        },{
          date: '00003',
          name: '若把你',
          province: '刘瑾睿',
          address: 'Kirsty刘瑾睿',
          zip: 'QQ音乐'
        },{
          date: '00004',
          name: '在你的身边',
          province: '盛哲',
          address: '在你的身边',
          zip: '网易云音乐'
        },{
          date: '00005',
          name: '武家坡2021',
          province: '武家坡',
          address: '武家坡2021',
          zip: '网易云音乐'
        },{
          date: '00006',
          name: '忏悔录',
          province: '那奇沃夫',
          address: 'MOVRE IN SILENCE',
          zip: 'QQ音乐'
        },{
          date: '00007',
          name: '哪里都是你',
          province: '队长',
          address: '哪里都是你',
          zip: 'QQ音乐'
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