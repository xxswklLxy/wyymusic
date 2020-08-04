<template>
  <div id="app">
  <keep-alive>  
 <Home/>
  </keep-alive>
  </div>
</template>
<script>
import Home from '@/views/Home'
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style lang="less">
@import url('./assets/css/normalize.css');



</style>
