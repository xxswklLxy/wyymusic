
<template>
  <div class="discovr-music">
   <main-nav />
    <keep-alive><router-view /></keep-alive>
  </div>
</template>

<script>
import MainNav from '@/views/Main/DiscovrMusic/MainNav'
export default {
  components: {
    MainNav,
  }
}
</script>

<style scoped>


</style>