<template>
  <div class="user">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="编号：">
    <el-input v-model="formInline.user" placeholder="请输入编号"></el-input>
  </el-form-item>
  <el-form-item label="用户名：">
    <el-input v-model="formInline.user" placeholder="请输入用户名"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
  </el-form-item>
</el-form>
<el-dialog title="新增用户" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="用户名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" placeholder="请输入用户名" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="性别" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择性别">
        <el-option label="男" value="shanghai"></el-option>
        <el-option label="女" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="地址" :label-width="formLabelWidth">
      <el-input v-model="form.name" placeholder="请输入地址" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="生日" :label-width="formLabelWidth">
      <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    </el-form-item>
    <el-form-item label="邮箱" :label-width="formLabelWidth">
      <el-input v-model="form.name" placeholder="请输入邮箱" autocomplete="off"></el-input>
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
      <el-table-column prop="name" label="用户名" width="120"> </el-table-column>
      <el-table-column prop="province" label="性别" width="120">
      </el-table-column>
      <el-table-column prop="city" label="生日" width="120"> </el-table-column>
      <el-table-column prop="address" label="地址" width="300">
      </el-table-column>
      <el-table-column prop="zip" label="邮箱" width="120"> </el-table-column>
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
          name: '王小虎',
          province: '男',
          city: '1946-2-14',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: "hk@hkiii.cn"
        },
        {
          date: '00002',
          name: '王小虎',
          province: '女',
          city: '1946-2-14',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: "hk@hkiii.cn"
        },{
          date: '00003',
          name: '王小虎',
          province: '男',
          city: '1946-2-14',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: "hk@hkiii.cn"
        },{
          date: '00004',
          name: '王小虎',
          province: '男',
          city: '1946-2-14',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: "hk@hkiii.cn"
        },{
          date: '00005',
          name: '王小虎',
          province: '女',
          city: '1946-2-14',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: "hk@hkiii.cn"
        },{
          date: '00006',
          name: '王小虎',
          province: '女',
          city: '1946-2-14',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: "hk@hkiii.cn"
        },{
          date: '00007',
          name: '王小虎',
          province: '男',
          city: '1946-2-14',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: "hk@hkiii.cn"
        }],
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
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