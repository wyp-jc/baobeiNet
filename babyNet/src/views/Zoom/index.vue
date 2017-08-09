<template>
     <div class="zoom-page">
      <div class="zoom-header">
        <div class="head-photo">
            <img src="//h0.hucdn.com/open/201724/21d777a959c51877_225x225.png!100x100.jpg" alt="">
        </div>
        <div class="user-id">
            <p>156****5729</p>
            <p>宝宝年龄: <span>0</span>岁</p>
        </div>
      </div>
      <div class="zoom-nav">
          <span><i class="iconfont">&#xe60b;</i>收藏</span>
          <span><i class="iconfont">&#xe60d;</i>我的拼团</span>
          <span><i class="iconfont">&#xe506;</i>足迹</span>
      </div>
      <div class="my-order">
          <ul class="my-list">
              <li class="order-form div-line">
                  <a href="/orders/orders.html#0">我的订单<span class="next-page">查看全部订单></span></a>
              </li>
          </ul>
          <ul class="sum-box">
              <li><i class="iconfont">&#xe614;</i><span>待付款</span></li>
              <li><i class="iconfont">&#xe62b;</i><span>待收货</span></li>
              <li><i class="iconfont">&#xe62a;</i><span>评价返现</span></li>
              <li><i class="iconfont">&#xe646;</i><span>我的售后</span></li>
          </ul>
          <ul class="my-list">
              <li>
                  <a href="###">我的钱包</a>
              </li>
          </ul>
          <ul class="sum-box">
              <li>
                  <p>4张</p>
                  <p>现金券</p>
              </li>
              <li>
                  <p>0个</p>
                  <p>贝壳</p>
              </li>
              <li>
                  <p>￥0.00</p>
                  <p>余额</p>
              </li>
          </ul>
          <ul class="other-list">
              <li class="address">
                  <i class="iconfont icon1">&#xe505;</i>
                  <a href="###">收货地址<span class="next-page"><i class="iconfont">&#xe6fd;</i></span></a>
              </li>
              <li class="service">
                  <i class="iconfont icon2">&#xe678;</i>
                  <a href="###">客服中心<span class="next-page"><i class="iconfont">&#xe6fd;</i></span></a>
              </li>
              <li class="member-card">
                  <i class="iconfont icon3">&#xe656;</i>
                  <a href="###">会员卡<span class="next-page"><b class="desc">铂金卡享9折【首单再减20】</b><i class="iconfont">&#xe6fd;</i></span></a>
              </li>
          </ul>
      </div>
      <footer-bar></footer-bar> 
     </div>   
</template>

<script>
import footerBar from '@/components/FooterBar';

export default {
  name: 'zoomPage',
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
<style scoped lang="less">
.zoom-page{
    width: 100%;
    height: 100%;
    background: #eee;
    .zoom-header{
        width: 100%;
        height: .9rem;
        background: url('http://b0.hucdn.com/party/2016/9/upload_7042439aa70b86219aa3d50854eccc39_750x204.png');
        background-size: 100% 100%;
        .head-photo{
            width: 28%;
            height: 100%;
            float: left;
            img{
                width: 63%;
                height: auto;
                margin: .16rem;
            }
        }
        .user-id{
            width: 72%;
            float: left;
            margin-top: .24rem;
            p{
                font-size: .1rem;
            }
            p:nth-child(2){
                margin-top: .15rem;
            }
        }
    }
    .zoom-nav{
        width: 100%;
        height: .4rem;
        background: #fff;
        display: flex;
        span{
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: .12rem;
            i{
                font-size: .14rem;
            }
        }
    }
    .my-order{
        .my-list,.other-list{
            margin-top: .07rem;
            background: #fff;
            height: .4rem;
            border-bottom: .01rem solid #eee;
            li{
                width: 94%;
                height: 100%;
                margin-left: 3%;
                a{
                    line-height: .4rem;
                    span{
                        float: right;
                        color: #999;
                        font-size: .12rem;
                    }
                }
            }
        }
        .sum-box{
            background: #fff;
            display: flex;
            li{
                flex: 1;
                display: flex;
                flex-direction: column;
                margin: .12rem 0;
                justify-content: center;
                align-items: center;
                i{
                    font-size: .18rem;
                }
                span{
                    font-size: .1rem;
                    margin-top: .05rem;
                }
            }
        }
        .sum-box{
            li{
                p:nth-child(1){
                    font-size: .1rem;
                    color: red;
                }
                p:nth-child(2){
                    font-size: .12rem;
                    margin-top: .1rem;
                }
            }
        }
        .other-list{
            background: #fff;
            height: 1.2rem;
            li{
                height: .4rem;
                .icon1{
                    color: plum;
                }
                .icon2{
                    color: paleturquoise;
                }
                .icon3{
                    color: peachpuff;
                }
            }
        }
    }
}
</style>
