<template>
  <div id="flash">
   <div class="flash-top">
    <div class="flash-img"></div>
    <div class="flash-lyric">
      <div class="flash-lyric-name"></div>
      <div class="lyric">
        <div></div>
        <!-- 歌词 -->
        <div class="lyric-2">
        <ul>
          <li v-for="(l,index) in currentLyric.lines" :key="index">
           {{l.time | formatDate}}- {{l.txt}}
          </li>
        </ul>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { formatDate} from "@/components/date";
import {FlashLyricData} from "@/api/Flash/Flash"
import {mapState} from 'vuex'
import Lyric from 'lyric-parser'
export default {
  name:'Flash',
  data () {
    return {
     
      lyric:[], //歌词
      currentLyric:[], //处理后的歌词
    }
  },
  created () {
    // 拿到歌词
     this.FlashLyricData()
  },
  methods: {
    // 获取歌词
    FlashLyricData(){
      FlashLyricData(this.flashID).then(res=>{
        // 赋值给lyric
      this.lyric = res
      // 处理歌词
     this.currentLyric = new Lyric(this.lyric.lrc.lyric)
    //  存入vuex
     this.$store.commit('flashLLyric',this.currentLyric)
      })
    }
  },
    filters: {
      // 转换时间戳
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "mm:ss");
    },
  },

}
</script>

<style scoped>
.flash-top{
  width: 100%;
  height: 550px;
  background-color: pink;
  display: flex;
}
.flash-img{
  width: 1000px;
  height: 100%;
  background-color: plum;
}
.flash-lyric{
    width: 100%;
  height: 100%;
  position: relative;
  background-color: rgb(172, 221, 160);
}
.lyric-2{
  width: 800px;
  height: 400px;
  position: absolute;
  left: 100px;
  top: 50px;
  overflow: scroll;
  background-color: royalblue;
}
ul{
  list-style: none;
}
li{
  margin: 10px 0;
}

</style>