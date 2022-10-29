<template>
  <div class="setting">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>系统设置</span>
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          @click="dialogVisible = true"
          >保存</el-button
        >
      </div>
      <el-form :model="form">
        <el-form-item label="系统名称" :label-width="formLabelWidth">
          <el-input
            v-model="form.name"
            placeholder="请输入系统名称"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="站点开关" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="是否打开或关闭站点">
            <el-option label="开" value="shanghai"></el-option>
            <el-option label="关" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="SEO设置" :label-width="formLabelWidth">
          <el-input
            v-model="form.name"
            placeholder="请输入关键词，中间使用,隔开"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="站点描述" :label-width="formLabelWidth">
          <el-input
            v-model="form.name"
            placeholder="请输入站点描述"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
    </el-card>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>保存成功</span>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      dialogVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
    };
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
  },
};
</script>
<style  scoped>
.el-select,
.el-date-editor.el-input {
  width: 100%;
}
</style>