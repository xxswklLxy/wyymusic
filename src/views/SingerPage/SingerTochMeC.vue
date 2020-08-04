<template>
     
  <div id="singer-TMC">
    <div class="singer-list">
      <div class="spa"><span class="spa1">歌曲</span><span class="spa2">歌手</span><span class="spa3">专辑</span></div>
      <ul>
        <li
          v-for="(item,index) in singerAContent.songs"
          :key="index"
          @click="singerList(item.id,index)"
        >
          <span class="span1">{{index}}-{{item.name}}</span><span class="span2">{{item.ar[0].name}}</span><span class="span3">{{item.al.name}}</span>

        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { formatDate } from "@/components/date";
export default {
  components: {},
  props: ["singerAContent"],
  data() {
    return {
    };
  },

  created() {},
  methods: {
    singerList(id,index) {
      //  发送事件总线 点击歌曲后 传true
      //  this.$Bus.$emit('Drawer', true)
      this.$Bus.$emit("ListID", id);
      console.log(this.singerAContent);
      // this.$router.push({ path: '/flash',query:{id:id}})
      this.$Bus.$emit("HomeFlash",this.singerAContent,id,index ,); 
       
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
div >>>.el-avatar, .el-drawer {
    overflow: scroll !important;
}
ul {
  list-style: none;
}
li {
  height: 50px;
  line-height: 50px;
}

li:nth-of-type(even) {
  background: rgba(245, 245, 247);
}
li:hover {
  background: rgba(235, 236, 237);
  cursor: pointer;
}
.span1,
.span2,
.span3 {
  color: rgb(22, 22, 22);
}
.span2 {
  position: absolute;
  left: 50%;
}
.span3 {
  position: absolute;
  right: 0;
}

.spa {
  position: relative;
  margin: 10px 0 10px 40px;
}
.spa1 {
  color: #000;
}
.spa2 {
  position: absolute;
  left: 49%;
  color: #000;
}
.spa3 {
  position: absolute;
  right: 0;
  color: #000;
}

</style>