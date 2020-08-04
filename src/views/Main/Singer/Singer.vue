<template>
  <div>
    <div 
    v-infinite-scroll="load"
      infinite-scroll-disabled="disabled">
      <!-- 分类组件 -->
      <SingerNav @singnavID="singnavID" />
      <!-- 分割线 -->
      <el-divider></el-divider>
      <!-- 歌手模块 -->
      <SingerModule :singerList="singerList" />
      <p v-show="loading">加载中...</p>
    <p v-show="noMore">没有更多了</p>
    </div>
  </div>
</template>

<script>
import { SingerListData } from "@/api/Singer/Singer";
import SingerNav from "@/views/Main/Singer/SingerNav";
import SingerModule from "@/views/Main/Singer/SingerModule";
export default {
  components: {
    SingerNav,
    SingerModule,
  },
  data() {
    return {
      singerList: {},
      singerID: 1,
      singerAge: 20,
      loading: false
  
    };
  },
  created() {
    this.SingerListData();
  },
     computed: {
      noMore () {
        return this.singerAge >= 100
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
  methods: {
    SingerListData() {
      SingerListData(this.singerID, this.singerAge).then((res) => {
        this.singerList = res.artists;
      });
    },
    singnavID(id) {
      this.singerID = id;
      this.SingerListData();
    },
       load () {
        this.loading = true
        setTimeout(() => {
          this.singerAge += 20
          this.SingerListData();
          this.loading = false
        }, 2000)
      }
  },

};
</script>

<style scoped>
#singer {
  display: flex;
  justify-content: center;
}
.infinite-listr {
  width: 1000px;
  height: 100%;
}
</style>