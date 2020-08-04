<template>
  <div id="singer-touch-me" v-if="singerAContent.album">
    <div class="singer">
  <div class="singer-img">
  <div class="iimg">
    <img :src="singerAContent.album.picUrl" alt="" >
  </div>
  </div>
  <div class="singer-js">
    <div class="singer-li">
      <ul>
        <li><h2>{{singerAContent.album.name}}</h2></li>
        <li>歌手：{{singerAContent.album.artist.name}}</li>
        <li>时间：{{singerAContent.album.publishTime |  formatDate}}</li>
      </ul>
    </div>
  </div>

  
  </div>
  <div class="singer-song">
      <el-tabs
      class="singer-el-tabs"
      v-model="activeName"
    >
    
      <el-tab-pane
        label="歌曲列表"
        name="first"
      >
      <SungerTouchMeC :singerAContent="singerAContent"/>
      </el-tab-pane>
      <el-tab-pane
        label="评论"
        name="second"
      >配置管理</el-tab-pane>
      <el-tab-pane
        label="专辑详情"
        name="third"
      >
      4
      </el-tab-pane>
       
    </el-tabs>
  </div>
  </div>
</template>

<script>
import { formatDate} from "@/components/date";
import SungerTouchMeC from "@/views/SingerPage/SingerTochMeC"
export default {
  components: {
    SungerTouchMeC
  },
  props: {
    singerAContent:{
      type:Object,
      default:null
    }
    },
  data () {
    return {
       activeName: 'first'
    }
  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd ");
    },
  },

}
</script>

<style scoped>
.singer{
  display: flex;
  background-color: rgb(250, 250, 250);

}
.singer-img{
  width: 600px;
  height: 300px;
}
img{
  width: 100%;
}
.iimg{
width: 300px;
height: 300px;
margin: 0 0 0 40px;
}
.singer-js{
  width: 100%;
  height: 300px;
}
.singer-li{
  margin: 20px 20px;
}
li{
  padding: 10px 0;
  list-style: none;

}
.singer-song{
  margin: 20px;
}

</style>