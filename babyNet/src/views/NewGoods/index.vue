<template>
     <div class="goods-page">
       逛新品special sale
       
       
       <footer-bar></footer-bar> 
     </div>   
</template>

<script>
import footerBar from '@/components/FooterBar';
export default {
  name:'goodsPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
     footerBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
