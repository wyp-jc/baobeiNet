<template>
     <div class="group-page">
      <header-bar class="header-bar">
          <div slot="header-list-group" class="header-list-group">
             <input type="text" placeholder="搜索热销商品"/>                
          </div>
          
  	    </header-bar>
     </div>   
</template>

<script>
import headerBar from '@/components/HeaderBar';
export default {
  name: 'groupPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
     headerBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .header-list-group{
    width:100%;
    height:.44rem;
    margin:0 auto;
    line-height: .44rem;

    input{
      width:90%;
      height:.3rem;
      border:1px solid #ccc;
      border-radius: 2px;
      text-indent:10px;
    }
  }
</style>
