<template>
  <div id="MainNav">
    <el-menu  class="el-menu-demo" mode="horizontal" >
  <el-menu-item index="1">   <router-link to="/discovrMusic/recommend"><span>推荐</span></router-link></el-menu-item>
  <el-menu-item index="2" ><span>排行榜</span></el-menu-item>
  <el-menu-item index="3"><span>歌单</span></el-menu-item>
  <el-menu-item index="4"><span>主播电台</span></el-menu-item>
  <el-menu-item index="5"> <router-link to="/discovrMusic/singer"><span class="hao">歌手</span></router-link></el-menu-item>
  <el-menu-item index="6"><span>目前只完成了歌手专辑里面的歌曲</span></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 2px solid #f56c6c ;
    color: #000000;
}
span{
  display: block;
  width: 100%;
  height: 100%;
}
.hao{
  color: pink;
}
</style>