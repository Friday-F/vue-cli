<template>
     <div @mouseenter="stopPlay">
        <swiper :options="swiperOption" ref="awesomeSwiper" @mouseleave.native='play' v-if="bannerlist.length">
            <swiper-slide v-for='(item,index) in bannerlist' :key='index'>
                <a :href="item.url">
                    <div class="img-box" :style="{backgroundImage: 'url(' + item.img + ')' }">
                        <!-- <img :src="item.img"> -->
                    </div>
                </a>
                <!-- <div class="banner-title">
                    <h3 class="vote-title js-animate-title" v-html="item.voteTitle"></h3>
                    <p class="vote-timer" v-html="item.voteTimer"></p>
                    <br>
                    <div class="part-in" v-if="item.isShowPartInfo">
                        <a class="link" :href="item.partIn" target="_blank">
                            <span class="text">{{item.partInfo}}</span>
                            <span class="arrow">→</span>
                        </a>
                    </div>
                </div> -->
            </swiper-slide>
            
        </swiper>
        <div class="swiper-pagination" slot="pagination"></div>
    </div>
</template>
<style scoped>
    .swiper-container{
        width: 100%;
        height: 230px;
    }
    .img-box{
        height: 100%;
        background-repeat:no-repeat;
        background-position: center;
        background-size:cover; 
    }
    .swiper-container-autoheight .swiper-wrapper{
        width: 100% !important;
    }

    .swiper-slide{
        width: 100% !important;
    }   
    .swiper-pagination{
        position: absolute;
        left:50%;
        transform: translate(-50%,0);
    }
    .swiper-pagination .swiper-pagination-bullets .swiper-pagination-bullet{
        margin:0 4px;
    }
</style>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
    components:{
        swiper,
        swiperSlide
    },
    props:{
        bannerlist:{
            type: Array,
            default: []
        }
    },
    computed: {
        mySwiper() {
            return this.$refs.awesomeSwiper.swiper
        }
    },
    watch:{
        bannerlist(newVal,oldVal){
            this.isAutoplay()
        }
    },
    created() {
        this.isAutoplay();
    },
    data() {
        return {
            swiperOption: {
                direction: 'vertical',
                slidesPerView: 2,
                spaceBetween: 30,
                notNextTick: true,
                paginationClickable: true,
                loop: true,
                autoHeight: true,
                centeredSlides: false,
                // autoplay:{
                //             delay: 2000,
                //             stopOnLastSlide: true,
                //             disableOnInteraction: false
                // },
                observer: true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents: false,//修改swiper的父元素时，自动初始化swiper
                // pagination: {
                //     el: '.swiper-pagination',
                //     clickable: true,
                // },
                onInit: function () {
                    // anime.remove({
                    //     targets:''
                    // })
                },
                onSlideChangeEnd: function (swiper) {
                    swiper.update();
                    // anime.remove({
                    //     targets:''
                    // })

                },
            }
        }
    },
    methods: {
        isAutoplay() {
            if (this.bannerlist.length > 1) {
                this.swiperOption.autoplay = {
                    delay: 4000,
                    stopOnLastSlide: true,
                    disableOnInteraction: false
                }
                this.swiperOption.pagination = {
                    el: '.swiper-pagination',
                    clickable: true
                }
            } else {
                this.swiperOption.autoplay = false
                this.swiperOption.pagination = {}
            }
        },
        stopPlay() {
            if (this.bannerlist.length > 1) {
                this.mySwiper.autoplay.stop();
            }
        },
        play() {
            if (this.bannerlist.length > 1) {
                this.mySwiper.autoplay.start();
            }
        }
    }
}
</script>

