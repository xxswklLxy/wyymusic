<template>
  <div id="Aside">

<el-menu :default-openeds='["1"]'  menu-trigger="click"  class="el-menu-vertical-demo"  @close="handleClose" >
   <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-service"></i>
       <span slot="title">发现音乐</span>
    </template>
    <el-menu-item-group>
          <router-link to="/discovrMusic"><el-menu-item index="1-1">推荐</el-menu-item> </router-link>
      <el-menu-item index="1-2">私人FM</el-menu-item>
      <el-menu-item index="1-3">LOOK直播</el-menu-item>
      <el-menu-item index="1-4">视频</el-menu-item>
      <el-menu-item index="1-5">朋友</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
<!-- 
    <el-submenu index="2">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">我的音乐</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="2-1">本地音乐</el-menu-item>
      <el-menu-item index="2-2">下载管理</el-menu-item>
      <el-menu-item index="2-3">LOOK直播</el-menu-item>
      <el-menu-item index="2-4">视频</el-menu-item>
      <el-menu-item index="2-5">朋友</el-menu-item>
    </el-menu-item-group>
  </el-submenu>

    <el-submenu index="3">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">导航一</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-menu-item-group>
  </el-submenu>

    <el-submenu index="4">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">我的音乐</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="1-1">本地音乐</el-menu-item>
      <el-menu-item index="1-2">下载管理</el-menu-item>
    </el-menu-item-group> -->
  <!-- </el-submenu> -->
  
 
 
</el-menu>
  </div>
</template>

<script>
  export default {
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
      }
    }
  }
</script>

<style scoped>
.el-aside {
    overflow: auto;
    box-sizing: border-box;
    flex-shrink: 0;
}
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 99%;
    height: 100%;
  }
</style>