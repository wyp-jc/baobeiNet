<template>
     <div class="home-page">
       <header-bar class="header-bar">
          <div slot="header-list-group" class="header-list-group">
             <swiper :options="swiperOption" ref="mySwiper" class="swiperSlides">
                <!-- slides -->
                <swiper-slide v-for="(item,index) in specialData.topList" class="left-list">
                  <ul>
                     <li  v-bind:class="{header_line:index==queryname}" @click="classObject(index)">{{item}}</li>
                  </ul>
                </swiper-slide>
			      </swiper>
            <div class="right-icon">
                <div class="search"><i class="icon"></i></div> 
            </div>

         </div>
          
  	    </header-bar>
        <div class="special-content">
          今日特卖special sale
        </div>
       <footer-bar></footer-bar> 
     </div>   
</template>

<script>
import footerBar from '@/components/FooterBar';
import headerBar from '@/components/HeaderBar';
 import {swiper,swiperSlide} from 'vue-awesome-swiper';
export default {
  name: 'homePage',
  data () {
    return {
      specialData:{
        topList:[]
      },
      queryname:0,
      swiperOption: {
        slidesPerView:5.5,
        spaceBetween:5,
      }
     
    }
  },
  components:{
  	footerBar,
  	headerBar
  
  },
  created(){
    var that=this;
    this.$axios.get("/topList").then((res)=>{
      var listData=res.data.list;
      that.specialData.topList=listData;
    })
  },
  mounted(){
   
  },
  methods:{
       classObject: function (index) {
           
           this.queryname=index
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .home-page{
    width:100%;
     
  }
  .swiperSlides{
    width:90%;
   
    float:left;
  }
 
  .header-bar{
     width:100%;
     height:.44rem;
  }
  .header-list-group{
    width:100%;
    height:.44rem;
    position:fixed;
    overflow: hidden;
    .left-list{
      ul{
         width:.7rem;
         height:.43rem;
         margin-left:.2rem;
      }
      li{
         width:.6rem;
        height:.43rem;
        line-height: .43rem;
        float: left;
        font-size:.13rem;
        
      }
      .header_line{
        color:red;
        border-bottom:1px solid red;
      }
    }
    .right-icon{
      z-index:10;
      background:#fff;
      position:absolute;
      top:0.05rem;;
      right:0;
      i{
        width:0.3rem;
        height:0.3rem;
        display:block;
        background: url(../../static/img/footer.png);
        background-size:2.5rem 1rem;
      }
      .search{
        width:0.35rem;
        height:0.35rem;
        line-height: .35rem;
        text-align: center;
        i{background-position: -50px 0;}
       }
    }
  }
</style>
