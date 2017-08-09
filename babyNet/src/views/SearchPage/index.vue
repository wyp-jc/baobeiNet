<template>
     <div class="search-page">
       <div class="search_input">
         <input type="text" placeholder="发现你喜欢的商品" @focus="showFocus" /><a href="###"><span>搜索</span></a>
       </div>
       
     </div>   
</template>

<script>
export default {
  name: 'searchPage',
  data () {
    return {
      msg: ''
    }
  },
  methods:{
     showFocus(){
         console.log("aaa")
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .search-page{
      width:100%;
      .search_input{
        width:100%;
        height:.4rem;
       // margin:0 auto;
        
        input{
           width:80%;
           height:.35rem;
           border:1px solid #ccc;
           border-radius:4px;
           text-indent:10px;
           margin-top:.1rem;
        }
        a{
          width:10%;
          height:.4rem;
          line-height: .4rem;
          display:inline-block;
          
          span{
            color:red;
          }
      }
    }
    }
</style>
