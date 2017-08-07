<template>
     <!--底部列表行-->
  <footer class="footer-bar">
  	  <nav>
  	      <router-link to="/homePage" active-class="active" class="specialSale"><i class="icon"></i>今日特卖</router-link>
  	      <router-link to="/groupPage" class="groupbook" active-class="active"><i class="icon"></i>拼团</router-link>
  	      <router-link to="/goodsPage" class="newgoods" active-class="active"><i class="icon"></i>逛新品</router-link>
          <router-link to="/shopPage" class="shopcar" active-class="active"><i class="icon"></i>购物车</router-link>
  	      <router-link to="/zoomPage" class="zoom" active-class="active"><i class="icon"></i>我的</router-link>
  	  </nav>
  </footer>
</template>

<script>
export default {
  name: 'footerBar',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .footer-bar{
   	  position:fixed;
   	  bottom:0;
   	  width:100%;
   	  background: #fff;
   	  nav{
   	  	width:100%;
   	  	display:flex;
   	  	a{
   	  		flex:1;
   	  		width:0;
   	  		text-align: center;
   	  		font-size:.12rem;
   	  		margin-bottom:.05rem;
   	  	
	   	  	i{
	   	  		width:0.3rem;
	   	  		height:0.3rem;
            display:block;
            background: url(../../static/img/footer.png);
	   	  		background-size:2.5rem 1rem;
	   	  		margin: 0 auto;
	   	  		margin-bottom:.02rem;
           }
           &.active{
	   	  		color: #ff712b;
	   	  	}
	   	  	&.specialSale{
				    i{ background-position: 0 0;}
				    &.active{
				       i{ background-position: 0 -50px;}
				    }
				}
				&.groupbook{
					i{background-position: -50px 0;}
				    &.active{
				        i{ background-position: -50px -50px;}
				    }
        }
        &.newgoods{
         	i{background-position: -100px 0;}
				    &.active{
				        i{ background-position: -100px -50px;}
				    }
        }
				&.shopcar{
				    i{background-position: -150px 0;}
					
				    &.active{
				        i{ background-position: -150px -50px; }
				    }
				 }	
				&.zoom{
				    i{ background-position: -200px 0; }
				    &.active{
				        i{ background-position: -200px -50px; }
				    }
				}
        
        
       }
   }
  }
</style>
