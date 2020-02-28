<template>
    <div>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <span>{{item.name}}</span>
                <span>{{item.age}}</span>
                <span class="reders" @click="redesBtn(item)" v-if="isLoading === false && item.isStart === false">刷新</span>
                <span v-if="isLoading === true">正在刷新</span>
                <span v-if="isLoading === false && item.isStart === true">刷新成功</span>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            list:[
                {'name':'小明',age:18,next_refresh_at:1550114029870,id:1},
                {'name':'小红',age:18,next_refresh_at:1548755417581,id:2},
                {'name':'小蓝',age:18,next_refresh_at:1548755424179,id:3},
                {'name':'小绿',age:18,next_refresh_at:1548920487450,id:4}
            ],
            isLoading:false
        }
    },
    created(){
        this.setList()
    },
    methods:{
        setList(){
            this.list.map(item=>{
                item.isStart = false;
                let nowTime = new Date().getTime();
                // 300000 5分钟
                if(nowTime - item.next_refresh_at > 100000){
                    item.isStart = true
                }else{
                    item.isStart = false
                }
            })
             
        },
        // 点击刷新
        redesBtn(item){
            this.isLoading = true;
            axios.get('http://www.liulongbin.top:3005/api/getlunbo')
            .then(res=>{
                this.isLoading = false
                item.isStart = true;

            })
        }
    }
}
</script>
<style scoped>
    li span{
        display: inline-block;
        width: 25%;
        line-height: 30px;
    }
    .reders{
        color:#f40;
    }
</style>


