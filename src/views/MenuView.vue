<template>
  <div>
    <div class="logo-h1"><i class="el-icon-sunny"></i>后台管理系统</div>
    <div style="height:60px"></div>
    <el-row class="tac">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="rgb(35,38,55)"
      text-color="#fff"
      active-text-color="rgb(50,76,205)">
        <el-menu-item index="1">
          <i class="el-icon-s-home"></i>
          <router-link to="/home/Index" tag="span">首页</router-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-user-solid"></i>
            <span>用户管理</span>
          </template>
          <el-menu-item index="1-1">
          <router-link to="/home/UserList" tag="span">用户列表</router-link>
            </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-message-solid"></i>
            <span>歌曲管理</span>
          </template>
          <el-menu-item index="3-1">
          <router-link to="/home/SingeList" tag="span">歌曲列表</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>专辑管理</span>
          </template>
          <el-menu-item index="4-1">
          <router-link to="/home/AlbumList" tag="span">专辑列表</router-link></el-menu-item>
        </el-submenu>

        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-s-comment"></i>
            <span>评论管理</span>
          </template>
          <el-menu-item index="5-1">
          <router-link to="/home/CommentList" tag="span">评论列表</router-link></el-menu-item>
        </el-submenu>

        <el-menu-item index="4">
          <i class="el-icon-s-tools"></i>
          <router-link to="/home/Setting" tag="span">系统设置</router-link>
        </el-menu-item>
      </el-menu>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "MenuView",
  data() {
    return {
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style>
.el-menu-item,
.el-menu-item-group,
.el-submenu__title,
.el-menu i,
.el-submenu {
  text-align: left;
  font-weight: 800;
}
.logo-h1{
  height: 60px;
  background: rgb(35,38,55);
  font-size: 20px;
  font-weight: 900;
  line-height: 60px;
  position: fixed;
  z-index: 100;
  width: 200px;
  text-align: center;
}
</style>