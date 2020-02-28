<template>
    <div>
        <swiper-banner :bannerlist='bannerList'></swiper-banner>
        <div class="vertical">
            <swiper-vertical :bannerlist='bannerList'></swiper-vertical>
        </div>
    </div>
    
</template>
<script>
// import axios from 'axios'
import swiperBanner from './Swiper'
import SwiperVertical from './SwiperVertical'
import api from '../../api/service.js'
export default {
    components:{
        swiperBanner,
        SwiperVertical
    },
    data(){
        return{
            bannerList:[]
        }
    },
    created(){
        this.getBannerList()
    },
    methods:{
        getBannerList(){
            api.getBannerList()
                .then(res=>{
                    console.log(res)
                    if(res.status === 0){
                        this.bannerList = res.message;
                    }
                })
        }
    }
}
</script>
<style>
    .vertical{
        height: 250px;
        position: relative;
        border:4px solid red;
        margin-top:40px;
    }
</style>


