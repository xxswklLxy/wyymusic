<template>
  <div id="public-codule">
    <slot name="left"><div style="color:#000;"></div></slot>
  <slot name="right"><div style=" float: right; font-size: 14px; color:#000; ">更多</div></slot>
    <!-- 分割线 -->
    <el-divider></el-divider>
<el-row>
<slot name="content"> 
   <el-col  :span="4" v-for="(item, index) in Publicdata" :key="index" >
    <el-card  :body-style="{ padding: '0px' }" shadow="never">
       <el-image fit="contain" :src="item.picUrl" lazy :title="item.copywriter">
               <div slot="placeholder" class="image-slot">
        加载中<img src="../../assets/img/immmg.jpg" width="100%" height="100%" alt="">
      </div>
       </el-image>
      <div>
        <span>{{item.name}}</span>
      </div>
    </el-card>
  </el-col>
</slot>
</el-row>
  </div>
</template>

<script>
export default {
  props: ['Publicdata'],
  // methods: {
  //   TJclick(){
  //     this.$router.push({ path: '/flash'}).catch(err => err)
  //   }
  // }
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
    color: #303133;
    transition: .3s;
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
.el-card[data-v-4a34db3a] {
    color: #303133;
    transition: .3s;
    font-size: 12px;
}
  .el-card[data-v-4a34db3a] {
    background-color: #fafafa;
    color: #303133;
    transition: .3s;
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