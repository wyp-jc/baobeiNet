<template>
     <div class="shopping-page">
       购物车shoppingCar

       <footer-bar></footer-bar> 
     </div>   
</template>

<script>
import footerBar from '@/components/FooterBar';
export default {
  name: 'shopPage',
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
