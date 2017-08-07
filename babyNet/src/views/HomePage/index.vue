<template>

  <div class="HomePage">
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
                            <span class="hour">03</span>
                            <span class="sub">:</span>
                            <span class="mins">40</span>
                            <span class="sub">:</span>
                            <span class="sec">29.6</span>
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
            
            
    

    </div>

    </template>
<script>
    import Swiper from './canrousel'
    export default {
        name: 'HomePage',
        data() {
            return {
                homeList: {
                    canrouselData: [],
                    adShortcuts: [],
                    allDatas: []
                }
            }
        },
        components: {
            //注册组件
            Swiper
        },
        created() {

            let that = this;
            this.$axios.get('/api').then(function(res) {
                that.homeList.canrouselData = res.data.ads;
                that.homeList.adShortcuts = res.data.h5_icon_shortcuts;

                that.homeList.allDatas = res.data;

                console.log(that.homeList.allDatas)


            })
        }
    }
</script>

<style scoped lang="less">
    a {
        text-decoration: none;
        color: rgba(0, 0, 0, .6);
        font-size: .18rem;
    }
    
    .HomePage {
        width: 100%;
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
            height: 3.6rem;
            width: 100%;
            text-align: center;
            line-height: 3.6rem;
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
                    margin-top: 0.5rem;
                    display: block;
                    padding: .32rem .512rem;
                    background-color: #fff;
                    overflow: hidden;
                    height: 1.5rem;
                    img {
                        width: 1.36533333rem;
                        height: 1.36533333rem;
                        float: left;
                    }
                    .brand-name {
                        float: left;
                        font-size: 16px;
                        color: #3d3d3d;
                        margin-left: .34133333rem;
                        height: 1.36533333rem;
                        line-height: 1.36533333rem;
                        max-width: 4.48rem;
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
                        margin-left: .34133333rem;
                        height: 1.36533333rem;
                        line-height: 1.36533333rem;
                        max-width: 5.54666667rem;
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
                            height: 1rem;
                            line-height: 1rem;
                            display: inline-block;
                            color: red;
                            font-weight: bold;
                        }
                        .old-price {
                            height: 1rem;
                            line-height: 1rem;
                            display: inline-block;
                            text-decoration: line-through;
                        }
                        .title {
                            margin-bottom: .256rem;
                            color: #3d3d3d;
                            text-align: left;
                            line-height: 2.4rem;
                            height: 2.4rem;
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