<template>
    <div class="box">
        <!-- <input type="text" v-model="num" @input="calculation">
        <ul>
            <li class="gray" :class="{'active':percentage > 0}"></li>
            <li class="gray" :class="{'active':percentage > 20}"></li>
            <li class="gray" :class="{'active':percentage > 40}"></li>
            <li class="gray" :class="{'active':percentage > 60}"></li>
            <li class="gray" :class="{'active':percentage > 80}"></li>
        </ul>
         -->
        <ul>
            <li v-for="(item,index) in tabArr" :key='index'>{{item}}</li>
        </ul>
        <ul>
            <li v-for="(item,index) in downArr" @click="setArr(item)" :key='index'>{{item}}</li>
        </ul>
    </div>
</template>
<style scoped>
.box{
    margin-top:100px;
}
ul{
    margin-top:20px;
    display: flex;
}
li{
   padding:10px;
}
.active{
    border-bottom: 1px solid #f40;
}
</style>
<script>
export default {
    data(){
        return{
            active:'你好',
            arr:['你好','我好','大家好'],
            newArr:['吃饭','睡觉','打豆豆'],
            tabArr:[],
            downArr:[]
        }
    },
    created(){
        this.tabArr = [...this.arr];
        this.downArr = [...this.newArr]
    },
    methods:{
        setArr(item){
           let last = this.tabArr.pop()
           this.tabArr.push(item);
           let index = this.downArr.indexOf(item);
           this.downArr.splice(index,1);
           this.downArr.push(last)
        }
    }
}
</script>


