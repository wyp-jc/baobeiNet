<template>
      <div class="home-page">
        <header-bar class="header-bar">
          <div slot="header-list-group" class="header-list-group" >
            <div class="big_box">
               <ul class="left-list">
                  <li  v-for="(item,index) in specialData.topList"  v-bind:class="{header_line:index==queryname}" @click="classObject(index)">{{item}}</li>
               </ul> 
            </div>
            
            <div class="right-icon">
                <div class="search"><a href="/searchPage"><i class="icon"></i></a></div> 
            </div>

         </div>
          
  	    </header-bar> 
         <!--轮播组件  --> 
         <Swiper :homeList="homeList"></Swiper>    
     
        <main class="main">
            <section class="ad-shortcuts">
                <a href="###" v-for= "item in homeList.adShortcuts"><img :src="item.img" alt=""><span>{{item.title}}</span></a>
            </section>

            
            <section class="ad-metro-2nd"> 

                <ul class="left">
                    <li>
                        <a href="">
                             <img :src="homeList.allDatas.promotion_pro_shortcuts[0].img" alt="">  
                        </a>
                        <p class="countdown">
                            <span class="hour">{{countDown.hours}}</span>
                            <span class="sub">:</span>
                            <span class="mins">{{countDown.minutes}}</span>
                            <span class="sub">:</span>
                            <span class="sec">{{countDown.seconds}}</span>
                        </p>
                    </li>
                </ul>
                
                <ul class="right" >
                        <li><a href=""><img :src="homeList.allDatas.promotion_pro_shortcuts[1].img" alt=""></a></li>  
                        <li><a href=""><img :src="homeList.allDatas.promotion_pro_shortcuts[2].img" alt=""></a></li>
                        <li><a href=""><img :src="homeList.allDatas.promotion_pro_shortcuts[3].img" alt=""></a></li>
                        <li><a href=""><img :src="homeList.allDatas.promotion_pro_shortcuts[4].img" alt=""></a></li> 
                </ul>  
                 
            </section>

            <section class="item-list">
                <header class="list-header">
                     <span class="title">{{homeList.allDatas.martshows_title.title}}</span> 
                </header>
                
                <div class="list-content">
                        <a href="" class="item-show" v-for="key in homeList.allDatas.martshows">
                            <div class="brand-info-wrapper">
                                <img src="" alt="">
                                <span class="brand-name">{{key.item_show.brand_name}}</span>
                                 <span class="promotion-info">{{key.item_show.title}}</span> 
                                <span class="iconfont">&#xe603;</span>    
                            </div>
                            <div class="items-wrapper" >
  
                                 <ul class="item-left" >
                                     <li class="product-img"><img :src="key.item_show.items[0].img" alt=""></li> 
                                    <li class="product-info">
                                        <div class="price-info">    
                                            <p class="cur-price">
                                                 <span class="currency">¥</span> 
                                                 <span class="price-num">{{key.item_show.items[0].price}}</span> 
                                            </p>
                                             <p class="old-price">{{key.item_show.items[0].price}}</p> 
                                        </div>
                                        <div class="title">
                                              <p>{{key.item_show.items[0].title}}</p>  
                                        </div>
                                    </li>
                                </ul> 
                            
                                   <ul class="item-left">
                                    <li class="product-img"><img :src="key.item_show.items[1].img" alt=""></li>
                                    <li class="product-info">
                                        <div class="price-info">
                                            <p class="cur-price">
                                                <span class="currency">¥</span>
                                                <span class="price-num">{{key.item_show.items[1].price}}</span>
                                            </p>
                                            <p class="old-price">{{key.item_show.items[1].price_ori}}</p>
                                        </div>
                                        <div class="title"> 
                                            <p>
                                              {{key.item_show.items[1].title}} 
                                           </p>
                                        </div>
                                    </li>
                                </ul>    
                            </div>
                        </a>
                       
                </div>
               
            </section> 

        </main>
            
            
       <footer-bar></footer-bar> 
     </div>   
</template>

<script>
import footerBar from '@/components/FooterBar';
import headerBar from '@/components/HeaderBar';

import Swiper from './canrousel'
export default {
  name: 'homePage',
  data () {
    return {
      specialData:{
        topList:[]
      },
      queryname:0,
      
      homeList: {
          canrouselData: [],
          adShortcuts: [],
          allDatas: [],

      },
      countDown: {
          hours: [],
          minutes: [],
          seconds: []
      }
     
    }
  },
  components:{
  	footerBar,
    headerBar,
    Swiper
  
  },
  created(){
    var that=this;
    this.$axios.get("/topList").then(function(res){
     // console.log(res)
      var listData=res.data.list;
      that.specialData.topList=listData;
    });
    this.$axios.get('/api').then(function(res) {
        that.homeList.canrouselData = res.data.ads;
        that.homeList.adShortcuts = res.data.h5_icon_shortcuts;
        that.homeList.allDatas = res.data;
        //console.log( that.homeList.canrouselData)
    })
    
  },
  mounted(){
    var that=this;
   this.dTime(2017, 9, 18)
    setInterval(function() {
        that.dTime(2017, 9, 18)
    }, 1000);
  },
  methods:{
       classObject: function (index) {
           
           this.queryname=index
      },
       addZero(i) {
          if (i < 10) {
              return "0" + i;
          } else {
              return i;
          }
      },
      dTime(y, m, d) {
          var nowTime = +new Date(), //变时间戳,
              stopTime = +new Date(y, m, d),
              timer = stopTime - nowTime;
          //一天等于24小时，每个小时60分，每分钟60秒，每秒是1000毫秒
          var day = parseInt(timer / 1000 / 60 / 60 / 24),
              hours = parseInt(timer / 1000 / 60 / 60 % 24), //%24取的是余数
              minutes = parseInt(timer / 1000 / 60 % 60),
              seconds = parseInt(timer / 1000 % 60);
          this.countDown.hours = this.addZero(hours)
          this.countDown.minutes = this.addZero(minutes)
          this.countDown.seconds = this.addZero(seconds)
      }
  


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .home-page{
    width:100%;
     
  }
  
  .header-bar{
     width:100%;
     height:.44rem;
  }
  .header-list-group{
    width:100%;
    height:.44rem;
    background: #fff;
    position:fixed;
    overflow: hidden;
    .big_box{
        width:100%;
       display:flex;
       overflow-x: scroll;  
    } 
    .left-list{
    
    display:flex;
    width:150%;
    height:.43rem;
    margin-left:.2rem;
    white-space: nowrap;
    
     li{
        flex:1;
        width:.7rem;
        height:.43rem;
        line-height: .43rem;
        font-size:.13rem;
        
      } 
      li:last-child{
        margin-right:.4rem;
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
      top:0.05rem;
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
  a {
        text-decoration: none;
        color: rgba(0, 0, 0, .6);
        font-size: .18rem;
    }
    
    
    .main {
        width: 100%;
        .ad-shortcuts {
            width: 100%;
            background: white;
            display: flex;
            a {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding-top: 2%;
                padding-bottom: 2%;
                img {
                    width: 80%;
                    height: 70%
                }
                span{
                    font-size:.12rem;
                    margin-top:.1rem;
                }
            }
        }
        .ad-metro-2nd {
            width: 100%;
            background: white;
            margin-top: 1.5%;
            display: flex;
            .left {
                position: relative;
                flex: 4;
                /* background: red; */
                img {
                    width: 100%;
                    height: 100%;
                }
                .countdown {
                    position: absolute;
                    top: 30%;
                    left: 10%;
                    span {
                        &:nth-child(1) {
                            background: black;
                            color: white;
                        }
                        &:nth-child(3) {
                            background: black;
                            color: white;
                        }
                        &:nth-child(5) {
                            background: black;
                            color: white;
                        }
                    }
                }
            }
            .right {
                flex: 6;
                background: blue;
                display: flex;
                flex-wrap: wrap;
                li {
                    width: 50%;
                }
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    
    .item-list {
        width: 100%;
        margin-top: 1.5%;
        .list-header {
            height: .36rem;
            width: 100%;
            text-align: center;
            line-height: .36rem;
            color: #3d3d3d;
            font-size: 16px;
            background: #fff;
            border-bottom: 1px solid rgba(0, 0, 0, .08);
        }
        .list-content {
            width: 100%;
            .item-show {
                overflow: hidden;
                display: block;
                .brand-info-wrapper {
                    margin-top: 0.05rem;
                    display: block;
                    padding: .032rem .0512rem;
                    background-color: #fff;
                    overflow: hidden;
                    height: .15rem;
                    img {
                        width: .136533333rem;
                        height: .136533333rem;
                        float: left;
                    }
                    .brand-name {
                        float: left;
                        font-size: 16px;
                        color: #3d3d3d;
                        margin-left: .34133333rem;
                        height: .136533333rem;
                        line-height: .136533333rem;
                        max-width: .448rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                        word-break: break-all;
                    }
                    .promotion-info {
                        float: left;
                        font-size: 13px;
                        color: #8f8f8f;
                        margin-left: .034133333rem;
                        height: .136533333rem;
                        line-height: .136533333rem;
                        max-width: .554666667rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                    }
                }
                .items-wrapper {
                    background: white;
                    padding-bottom: 2%;
                    padding-top: 2%;
                    width: 100%;
                    overflow: hidden;
                    .item-left {
                        width: 50%;
                        box-sizing: border-box;
                        display: inline-block;
                        float: left;
                        img {
                            width: 85%;
                            height: 80%;
                        }
                        .cur-price {
                            height: .1rem;
                            line-height: .1rem;
                            display: inline-block;
                            color: red;
                            font-weight: bold;
                        }
                        .old-price {
                            height: .1rem;
                            line-height: .1rem;
                            display: inline-block;
                            text-decoration: line-through;
                        }
                        .title {
                            margin-bottom: .0256rem;
                            color: #3d3d3d;
                            text-align: left;
                            line-height: .24rem;
                            height: .24rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 1;
                            -webkit-box-orient: vertical;
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
</style>
