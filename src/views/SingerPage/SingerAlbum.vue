<template>
  <div id="singer-album">
    <div class="singer-list">
      <ul>
        <li
          class="singer-li"
          v-for="(item,index) in singerAlbum.hotAlbums"
          :key="index"
          @click="albumClick(item.id)"
          type="primary"

        ><img
            :src="item.picUrl"
            alt=""
            width="80px"
            height="80px"
          ><span class="singer-span3">{{item.name}}</span><span class="singer-span1">{{item.size}}首</span> <span class="singer-span2">
            发行时间:{{item.publishTime |  formatDate}}</span></li>
      </ul>
    </div>

    <el-drawer
      size="90%"
      :visible.sync="drawer"
      :with-header="false"
      :destroy-on-close="true"
      :show-close="true"
      :close-on-press-escape="true"
    >
        <SingerTouchMe  :singerAContent="singerAContent" />
    </el-drawer>
    </div>
</template>
<script>
import { formatDate} from "@/components/date";
import {SingerAContentData} from "@/api/SingerPage/SingerPage"
import SingerTouchMe from "./SingerTouchMe";
export default {
  components: {
    SingerTouchMe,
  },
  props: ["singerAlbum"],
  data() {
    return {
      drawer: false,
      singerAContent:{},
    };
  },


  methods: {
    SingerAContentData(id){
      SingerAContentData(id).then(res=>{
        this.singerAContent = res
        
      })
    },
    albumClick(id){
      this.drawer = true
       this.SingerAContentData(id)
    },
  },
  
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd ");
    },
  },
};
</script>

<style scoped>

#singer-album {
  display: flex;
  flex-wrap: wrap;
}

.singer-li {
  list-style: none;
  margin: 10px 0;
  position: relative;
  width: 1400px;
  font-size: 14px;
  cursor: pointer;
}
.singer-li:nth-of-type(even) {
  background: rgba(245, 245, 247);
}
.singer-li:hover {
  background: rgba(235, 236, 237);
}
.singer-span3,
.singer-span2,
.singer-span1 {
  position: absolute;
  line-height: 80px;
}
.singer-span3 {
  left: 100px;
}
.singer-span2 {
  right: 10%;
}
.singer-span1 {
  right: 50%;
}
.singer-li h4 {
  display: inline;
}
div >>>.el-drawer__body {
    flex: 1;
    overflow: scroll;
}
</style>