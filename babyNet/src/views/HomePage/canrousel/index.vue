<template>

    <div class="swiper-box">
       <swiper class="swiper-content" :options="swiperOption"  ref="mySwiper">  
            <!-- 这部分放你要渲染的那些内容 -->  
            <swiper-slide v-for="item in homeList.canrouselData">
            	<img :src="item.img" alt="">
            </swiper-slide> 
                        
        </swiper>  
    </div>  
      
</template>

<script>
    import {
        swiper,
        swiperSlide
    } from 'vue-awesome-swiper'

    export default {
        components: {
            swiper,
            swiperSlide
        },
        props: {
            'homeList': {
                default: []
            }
        },
        data() {
            return {
                "items": [],
                swiperOption: {
                    //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
                    notNextTick: true,
                    autoplay: 100,
                    pagination: '.swiper-pagination',
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    paginationClickable: true,
                    // spaceBetween: 30,
                    onSlideChangeEnd: swiper => {
                        //这个位置放swiper的回调方法  
                        this.page = swiper.realIndex + 1;
                        this.index = swiper.realIndex;
                    }
                }
            }
        },
        //定义这个sweiper对象  
        computed: {

            swiper() {
                return this.$refs.mySwiper.swiper;
            }
        },
        mounted() {

            //这边就可以使用swiper这个对象去使用swiper官网中的那些方法  
            this.swiper.slideTo(0, 0, false);
        }

    }
</script>

<style scoped lang="less">
    .swiper-box {
        width: 100%;
        .swiper-content {
            width: 100%;
            height: 100%;
            .swiper-slide {
                width: 100%;
                img {
                    width: 100%;
                    height: 10rem;
                }
            }
        }
    }
</style>