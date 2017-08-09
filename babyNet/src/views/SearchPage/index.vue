
<template>
      <div class="search-page">
          <search-Input></search-Input>
              <div class="search_content">
                <div class="content_list" v-for="item in searchList">
                  <h4>{{item.category_name}}</h4>
                  <ul class="list_content">
                    <li v-for="key in item.subdivision_categorys">
                      <router-link to="/hotDeatilPage">
                        <p>
                          <img :src="key.img"/>
                        </p>
                        <p>{{key.title}}</p>
                      </router-link>
                    </li> 
                  </ul>
                </div>
              </div>
      </div> 
</template>

<script>
import zepto from "../../static/js/zepto.min.js";
import searchInput from "./component/toInput";
export default {
  name: 'searchPage',
  data () {
    return {
      searchList:[],
       homeList: {
          canrouselData: [],
          adShortcuts: [],
          allDatas: [],

      }
     
    }
  },
   components:{
     searchInput
  },
  created(){
    var that=this;
    this.$axios.get("/searchList").then(function(res){
      that.searchList=res.data.main_categorys;
     //console.log(that.searchList )
    });
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .search-page{
      width:100%;
      overflow: hidden;
      }
    .search_content{
      margin-top:.3rem;
      width:100%;
      .content_list{
        width:100%;
        h4{
          padding-left:2%;
          font-size:.14rem;
          color:#000;
        }
      }
    }
    
    .list_content{
      width:100%;
      background:#fff;
      display:flex;
      flex-wrap:wrap;
      margin-top:.1rem;
      
      li{
        width:25%;
        display:flex;
        flex-direction: column;
        margin-top:.15rem;
        p:nth-child(1){
          flex:2;
          display:flex;
          align-items: center;
          justify-content: center;
          
          img{
            width:65%;
            
          }
        }
        p:nth-child(2){
          flex:1;
          display:flex;
          align-items: center;
          justify-content: center;
          margin-top:.07rem;
          font-size:.13rem;
          margin-bottom:.1rem;
        }
      }
    }

</style>
