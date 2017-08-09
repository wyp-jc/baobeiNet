<template>
     <div class="search_input">
         <input type="text" placeholder="发现你喜欢的商品" @focus="showFocus" class="searchInt"/>
         <a href="###" class="search_span"><span>搜索</span></a>
     </div>
</template>

<script>
export default {
  name: 'searchInput',
  data () {
    return {
      searchList:[],
       homeList: {
          canrouselData: [],
          adShortcuts: [],
          allDatas: [],

      },
     
    }
  },
  methods:{
     showFocus(){
          $(".searchInt").width(80+"%")
          $(".search_span").show();
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    
    
      .search_input{
        width:100%;
        height:.4rem;
        padding-left:5%;
        .searchInt{ 
           outline: none;
           width:90%;
           height:.3rem;
           border:1px solid #ccc;
           border-radius:4px;
           text-indent:10px;
           margin-top:.1rem;
        }
      .search_span{
          width:10%;
          height:.4rem;
          display:inline-block;
          display:none;
          span{
            color:red;
          }
      }
    }
    

</style>