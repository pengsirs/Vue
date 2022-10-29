<template>
  <div class="header">
    <div style="display: flex; justify-content: space-between; width: 100%">
      <div style="margin-left: 200px;">
        <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>用户管理</el-breadcrumb-item>
  <el-breadcrumb-item>用户列表</el-breadcrumb-item>
  <el-breadcrumb-item>新增用户</el-breadcrumb-item>
</el-breadcrumb>
      </div>
      <div style="display: flex">
        <div class="h-title">
          <img src="../assets/peng.png" alt="" srcset="" />
        </div>
        <el-dropdown @click.native="toCancelForm()">
          <span class="el-dropdown-link">
            大彭Sir<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="quit()">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeadView",
  components: {},
  data() {
    return {
      weizhi:"首页"
    };
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {
    quit: function () {
      this.$router.push("/login");
    },
    toCancelForm() {
      this.$emit("cancelForm"); //调用父组件方法，需要在父组件监听 @cancelForm="cancelForm"
    },
  },
};
</script>
<style  scoped>
.header {
  display: flex;
  align-content: center;
  height: 60px;
  justify-content: end;
}
.h-title {
  padding-right: 20px;
  padding: 5px;
}
.h-title img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px #eee solid;
}
.icoo {
  display: flex;
  justify-content: start;
}
.el-breadcrumb{
  line-height: 60px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #000;
  margin-left: 10px;
  font-weight: 600;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>