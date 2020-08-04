<template>
  <div id="singernav">
    <div class="language">
        <div> 分类:</div><div class="languageList" v-for="(item,index) in language" :key="index" @click="languageClick(index,item.id)" > <span :class="{'green':languageIndex === index}">{{item.name}}</span>  <span>|</span></div>
    </div>

     <!-- <div class="classify">
        <div>其他: </div><div class="classifyList" v-for="(item,index) in classify" :key="index" @click="classifyClick(index,item.id)" > <span :class="{'green':classifyIndex === index}">{{item.name}}</span> <span>|</span> </div>
    </div> -->

     <!-- <div class="sizer">
        <div> 分类:</div><div class="sizerList" v-for="(item,index) in sizer" :key="index" @click="sizerClick(index,item.id)" > <span :class="{'green':sizerIndex === index}">{{item.name}}</span> <span>|</span></div>
    </div> -->

  </div>
</template>

<script>
export default {
data () {
  return {
    language:[{name:'男歌手',id:'1'},{name:'女歌手',id:'2'},{name:'乐队',id:'3'}],
    // classify:[{name:'其他男歌手',id:'4001'},{name:'其他女歌手',id:'4002'},{name:'其他组合/乐队',id:'4003'}],
    // sizer:[{name:'入驻歌手',id:'5001'},{name:'华语男歌手',id:'1001'},{name:'华语女歌手',id:'1002'},{name:'华语组合/乐队',id:'1003'},{name:'欧美男歌手',id:'2001'},{name:'欧美女歌手',id:'2002'},{name:'欧美组合/乐队',id:'2003'},{name:'日本男歌手',id:'6001'},{name:'日本女歌手',id:'6002'},{name:'日本组合/乐队',id:'6003'},{name:'韩国男歌手',id:'7001'},{name:'韩国女歌手',id:'7002'},{name:'韩国组合/乐队',id:'7003'}],
    languageIndex:0,
    classifyIndex:0,
    sizerIndex:0
  }
},
methods: {
  languageClick(index,id){
    this.languageIndex = index
    this.$emit('singnavID',id)
  },
//  classifyClick(index,id){
//     this. classifyIndex = index
//      this.$emit('singnavID',id)
//   },
//   sizerClick(index,id){
//     this.sizerIndex = index
//      this.$emit('singnavID',id)
//   }
},
      
}
</script>

<style >
.language,.classify,.sizer{
  display: flex;
  align-items:flex-end;
 align-content:flex-end;
  flex-wrap: wrap;
  margin: 20px;

}
.green{
  background-color: slategrey;
    color: #fff !important;
}
.languageList:hover,.classifyList:hover,.sizerList:hover{
  cursor:pointer;

}
.language,.classify,.sizer div{
  font-size: 14px;
}
.languageList,.classifyList,.sizerList{
  color: rgba(144, 147, 153);
  font-size: 12px;
  padding-left: 10px;

}
span{
  color: rgba(144, 147, 153);
    padding: 0 7px;
}
.sizer div{
  padding: 7px 0;

}
.sizerList{
 padding: 7px 0;
 margin-left: 10px;

}

</style>