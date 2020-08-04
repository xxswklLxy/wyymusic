<template>
  <div id="public-codule">
<el-row>
   <el-col  :span="4" v-for="(item,index) in singerList" :key="index" >
    <el-card  :body-style="{ padding: '0px' }" shadow="never">
       <el-image fit="contain" :src="item.picUrl" lazy :title="item.nam" @click="ImgClick(item.id,item.picUrl)">
               <div slot="placeholder" class="image-slot">
        加载中<img src="~/assets/img/immmg.jpg" width="100%" height="100%" alt="">
      </div>
       </el-image>
      <div>
        <span>{{item.name}}</span>
      </div>
    </el-card>
  </el-col>
</el-row>
  </div>
</template>

<script>
export default {
  props: ['singerList'],
  methods: {
    ImgClick(id,picUrl){
      this.$router.push({path:'/singerpage',query:{id:id,picUrl:picUrl}})
     
    }
  }
};
</script>

<style lang="scss" scoped>
#public-codule{
  margin-top: 15px;
}
.el-row {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.el-card {
      border: 1px solid #fafafa;
    background-color: #fafafa;
    color: #000000;
    transition: .3s;
    text-align: center;
}
.el-card:hover{
    cursor:pointer;

}
.el-col-4 {
    flex: 0 0 17%;
    margin: .333333rem
}
.el-card__body {
    height: 2.2rem;
    padding: .266667rem;
}
.el-image__inner {
    vertical-align: top;
    width: 100%;
    height: 140px;
}

  .bottom {
    margin-top: .173333rem;
    line-height: .16rem;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
  
  }
  
  .clearfix:after {
      clear: both
  }

  .el-progress-bar__inner::after, .el-row::after, .el-row::before, .el-slider::after, .el-slider::before, .el-slider__button-wrapper::after, .el-upload-cover::after {
    content: none;
}

.el-card.is-always-shadow, .el-card.is-hover-shadow:focus, .el-card.is-hover-shadow:hover {
    box-shadow: 0 .026667rem .16rem 0 rgba(0,0,0,.1);
    height: 100%;
}
</style>