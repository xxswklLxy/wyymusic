<template id="cpn">
  <div id="recommend">
<!-- 轮播图组件 -->
<banner :banners="banners"/>
<!-- 推荐歌单组件 -->
<public-codule :Publicdata="recommendList" ><div slot="left"  style="color:#000;"> 推荐歌单</div></public-codule>
<public-codule :Publicdata="exclusive" >
  <div slot="left"  style="color:#000;"> 独家放送</div>
  <div slot="right"></div>
  </public-codule>

  <public-codule :Publicdata="recommendMv" >
  <div slot="left"  style="color:#000;"> 推荐MV</div>
  </public-codule>

   <public-codule :Publicdata=" recommendAnchor" >
  <div slot="left"  style="color:#000;"> 推荐电台</div>
  </public-codule>
  </div>
</template>

<script>
import { BannerData,RecommendListData,ExclusiveDate, RecommendMvData,RecommendAnchorData } from "@/api/DiscovrMusic/DiscovrMusic";
import Banner from "@/components/common/Banner"
import PublicCodule from "@/components/common/PublicCodule"
export default {
  components: {
    PublicCodule,
    Banner
  },
  name: "Recommend",
  data() {
    return {
      banners: [],
      recommendList:[],
      exclusive:[],
      recommendMv:[],
      recommendAnchor:[]
    };
  },
  created() {
    // 拿到轮播图数据
    this.BannerData();
    //拿到推荐歌单数据
    this.RecommendListData()
    //拿到独家放送数据
    this.ExclusiveDate()
    //拿到推荐MV数据
    this.RecommendMvData()
    //拿到推荐电台数据
    this.RecommendAnchorData()
  },
  methods: {
    //请求轮播图数据
    BannerData() {
      BannerData().then((res) => {
        this.banners = res.banners;
      });
    },
    //请求推荐歌单数据
    RecommendListData(){
      RecommendListData().then((res=>{
        this.recommendList = res.result.slice(1,11)
      }))
    },
    // 请求独家放送数据
    ExclusiveDate(){
      ExclusiveDate().then((res=>{
        this.exclusive = res.result
      }))
    },
    //推荐MV数据
    RecommendMvData(){
      RecommendMvData().then(res=>{
        this.recommendMv = res.result
      })
    },
    //推荐电台数据
    RecommendAnchorData(){
      RecommendAnchorData().then(res=>{
        this.recommendAnchor = res.result
      })
    }
  },
};
</script>

<style scoped>
#recommend {
  padding: 1.778vw 5.111vw;
  color: aqua;
}

</style>