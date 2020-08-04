<template>
  <div id="home">
    <el-container style="height: 700px;">
      <el-header><i class="el-icon-back" @click="$router.go(-1)"></i>   网易云音乐</el-header>
      <el-container>
        <el-aside width="300px">
          <Aside />
        </el-aside>
        <el-container>
          <el-main>
            <router-view />
          </el-main>

          <el-footer>
            <div class="IIShow" v-if='isShow == true'>
              <aplayer
                :autoplay="autoplay"
                :shuffle="true"
                :float="true"
                :showLrc="true"
                repeat="repeat-one"
                :music="{
                 title: title,
                src: url,
               pic: pic,
               author:author, 
                      }"
              />
            </div>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
    <div
      class="small-player"
      type="primary"
    >

    </div>
    <!-- 抽屉 -->
    <el-drawer
      size="93%"
      :visible.sync="drawer"
      :with-header="false"
      :destroy-on-close="true"
      :close-on-press-escape="true"
      :show-close="true"
      direction="ttb"
    >
      <!-- 播放器路由 -->
      <router-view name="Flash" />
    </el-drawer>
  </div>
</template>

<script>
import Aside from "@/components/common/Aside";
import { FlashSongData } from "@/api/Flash/Flash";

import Aplayer from "vue-aplayer";
export default {
  name: "Home",
  components: {
    Aside,
    Aplayer,
  },
  data() {
    return {
      iid: null,
      url: null,
      name: null,
      author: "",
      pic: "",
      title: "",
      autoplay: true,
      drawer: false, //开关抽屉
      isShow: false,
      direction: "rtl",
      ListID: null,
      aContent: [],
    };
  },
  created() {
    this.aContent = this.$store.state.aContent;
  },
  mounted() {
    // 接受事件总线 点击歌曲后 改为true
    this.$Bus.$on("Drawer", (drawer) => {
      this.drawer = drawer;
    });
    // 接受事件总线 赋值ID给 ListID
    this.$Bus.$on("ListID", (id) => {
      this.ListID = id;
    });
    this.$Bus.$off("HomeFlash");
    this.$Bus.$on("HomeFlash", (HFname, id, index) => {
      this.iid = id;
       this.isShow = true
       
      this.isShow = false,
      this.author = HFname.songs[0].ar[0].name;
      this.pic = HFname.album.picUrl;
      this.title = HFname.songs[index].name;
      // console.log(HFname);
      this.FlashSongData();
    });
  
  },
  methods: {
      aplayerAa(){
      console.log('1');
    },
    // 点击进入播放器路由
    FlashSongData() {
      FlashSongData(this.iid).then((res) => {
        this.url = res.data[0].url;
        console.log(res);
        this.isShow = true;
        if( this.url == null){
           this.$message({
          showClose: true,
          message: '对不起,没有版权,呐呐呐呐',
          type: 'warning'
        });
        
        }
      });
    },
  },
  watch: {
    drawer(v, n) {
      if (v === false) {
        this.$router.go(-1);
      }
    },
  },
};
</script>
<style>
#home {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.el-icon-back{
  position: absolute;
  left: 300px;
  top: 15px;
  font-size: 25px;
}
.el-footer::-webkit-scrollbar{
    display:none;
} 
.el-header {
  height: 55px !important;
}
.aplayer {
  position: absolute;
  bottom: 1px;
}
.IIShow{
  width: 100%;
bottom: 25px;
    position: relative;
}


.el-footer {
  background-color: rgba(245, 245, 247) !important;
}
.el-header,
.el-footer {
  background-color: #000000;
  color: rgb(253, 253, 253);
  text-align: center;
  line-height: 50px;
  padding: 0 !important;
}

.el-aside {
  background-color: rgba(245, 245, 247);
  color: #333;
  height: 93vh;
}
.el-main {
  background-color: rgb(250, 250, 250);
  color: #333;
  padding: 0px !important;
  height: 85vh;
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

.aplayer {
  bottom: 5px;
  margin: 0 !important;
}
</style>
