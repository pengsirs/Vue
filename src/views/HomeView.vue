<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <Menu :collapse="isCollapse"></Menu>
      </el-aside>
      <el-container>
        <el-header
          ><header-view ref="HeaderView" @cancelForm="cancelForm"></header-view
        ></el-header>
        <el-main style="min-height: 100vh">
          <!-- <div @click="cancelForm()">1111</div> -->
          <router-view></router-view>
        </el-main>
        <!-- <el-footer>Footer</el-footer> -->
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from "./MenuView.vue";
import HeaderView from "./HeaderView.vue";
export default {
  data() {
    return {
      dialog: true,
    };
  },
  name: "HomeView",
  components: {
    Menu,
    HeaderView,
  },
  methods: {
    cancelForm() {
      this.$refs.HeaderView.toCancelForm(); //调用子组件方法， ref="HeaderView"
    },
  },
};
</script>
<style>
.el-header,
.el-footer {
  background-color: #fff;
  box-shadow: #ddd 1px 1px 5px;
  color: #333;
  text-align: center;
  line-height: 60px;
  width: 100%;
  position: fixed;
  z-index: 98;
}

.el-aside {
  background-color: rgb(35, 38, 55);
  color: #fff;
  line-height: 200px;
  z-index: 99;
  position: fixed;
  height: 100vh;
}
.el-submenu,
.el-menu-item {
  width: 200px;
}

.el-aside {
  overflow: auto;
}
.el-aside ::-webkit-scrollbar {
  display: none;
}

.el-main {
  background-color: rgb(237, 237, 237);
  color: #333;
  margin-left: 200px;
  margin-top: 55px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>