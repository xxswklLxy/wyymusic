<template>
  <div id="singer-page">
    <div class="singer-figure">
      <div class="figure">
        <div class="figure-img">
          <img
            :src="figure.picUrl"
            alt=""
            width="100%"
            height="100%"
          >
        </div>
        <div></div>
      </div>
      <div class="introduce">
        <div class="introduce-name">
          <span><i class="el-icon-user-solid"></i>{{figure.name}}</span>
        </div>
      </div>
    </div>
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
      class="singer-el-tabs"
    >
      <el-tab-pane
        label="专辑"
        name="first"
      >
        <SingerAlbum :singerAlbum="singerAlbum" />
      </el-tab-pane>
      <el-tab-pane
        label="MV"
        name="second"
      >
      
      </el-tab-pane>
      <el-tab-pane
        label="歌手详情"
        name="third"
      >
        <SingerParticulars :introduction="introduction" />
      </el-tab-pane>
      <el-tab-pane
        label="相似歌手"
        name="fourth"
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { SingerPageData, SingerAlbumData } from "@/api/SingerPage/SingerPage";
import SingerParticulars from "./SingerParticulars";
import SingerAlbum from "./SingerAlbum";
export default {
  components: {
    SingerParticulars,
    SingerAlbum,
  },
  data() {
    return {
      figureID: null,
      figure: { name: "", picUrl: "" },
   activeName: 'first',
      introduction: [],
      limit: 30,
      singerAlbum: [],
    };
  },
  created() {
    // 歌手id
    this.figureID = this.$route.query.id;
    // 歌手图片
    this.figure.picUrl = this.$route.query.picUrl;
    // 拿到歌手专辑数据
    this.SingerPageData();
    // 拿到歌手专辑数据
    this.SingerAlbumData();
  },
  methods: {
    // 获取歌手详情数据
    SingerPageData() {
      SingerPageData(this.figureID).then((res) => {
        this.figure.name = res.briefDesc;
        this.introduction = res.introduction;
      });
    },
    // 获取歌手专辑数据
    SingerAlbumData() {
      SingerAlbumData(this.figureID, this.limit).then((res) => {
        this.singerAlbum = res;
      });
    },
    handleClick(tab, event) {
      // console.log(tab, event);
    },
  },
};
</script>

<style scoped>
.singer-figure {
  width: 100%;
  height: 290px;
  background-color: rgb(250, 250, 250);
  display: flex;
  overflow: hidden;
}
.figure {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 100%;
  background-color: rgb(250, 250, 250);
}
.figure-img {
  width: 400px;
  height: 100%;
  background-color: rgb(250, 250, 250);
}

.introduce {
  width: 100%;
  height: 100%;
  background-color: rgb(250, 250, 250);
}
.introduce-name {
  width: 1000px;
  height: 300px;
}
.introduce-name span {
  display: block;
  margin: 60px 100px;
}
.introduce-name i {
  padding: 0 10px;
}
.singer-el-tabs {
  margin: 20px 10px;
}
</style>