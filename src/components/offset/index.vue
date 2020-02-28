<template>
    <div class="box">
        <ul class="list" ref="ulList">
            <li v-for="(item,index) in 5" :key="index">{{index+1}}</li>
        </ul>
        <span @click="left">左</span>
        <span @click="right">右</span>
        <count-down :current-time="current" :start-time="1481450116" :end-time="1481450126" v-on:start_callback="countDownS_cb(1)" v-on:end_callback="countDownE_cb(1)"></count-down>
    </div>
</template>
<script>
import timer from './timer'
export default {
    components:{
        'count-down':timer
    },
    data(){
        return{
            index:0,
            current: new Date().getTime(),
            end:1559554666590
        }
    },
    methods:{
        countDownS_cb(){

        },
        left(){
            if(this.index === 0){
                return;
            }
            this.index--
            this.$refs.ulList.style.left = -this.index*99+'%'
        },
        right(){
            let length = Math.floor((this.$refs.ulList.children.length / 2));
            if(this.index === length){
                return;
            }
            this.index++
            this.$refs.ulList.style.left = -this.index*99+'%'
        }
    }
}
</script>
<style scoped>
    .box{
        overflow: hidden;
        width:1200px;
        margin:0 auto;

    }
    .list{
        display: flex;
        position: relative;
        left:0;
        transition: all 0.6s;
    }
    .list li{
        min-width:48%;
        margin:0 10px;
        height: 100px;
        background: lightblue;
    }
    span{
        width:100px;
        height: 30px;
        background: pink;
        display: inline-block;
        margin:10px;
        text-align: center;
        line-height: 30px;
    }
</style>


