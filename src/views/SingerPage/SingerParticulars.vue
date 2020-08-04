<template>
  <div id="SingerParticulars">
    <div v-for="(item,index) in introduction" :key="index">
   <h3>{{item.ti}}</h3>
   <p> {{item.txt}}</p>
   </div>
  </div>
</template>

<script>
export default {
  props: ['introduction']

}
</script>

<style scoped>

p
  {
    text-indent: 1cm;
    color: rgb(109, 108, 108);
  }

</style>