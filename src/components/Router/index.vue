<template>
    <div>
       <div class="item">
            <h3>router-link页面传参</h3>
            <ul>
                <li v-for="(item,index) in list" :key=index>
                    <router-link :to="{name:'info',params:{id:item.id}}">{{item.name}}</router-link>
                </li>
            </ul>
       </div>
       <div class="item">
            <h3>route.push页面传参</h3>
            <ul>
                <li v-for="(item,index) in list" :key=index @click="goInfo(item.id)">
                    <a href="javascript:;">{{item.name}}</a>
                </li>
            </ul>
       </div>
       <div class="item">
            <h3>route.query页面传参</h3>
            <ul>
                <li v-for="(item,index) in list" :key=index @click="goInfoQuery(item.id)">
                    <a href="javascript:;">{{item.name}}</a>
                </li>
            </ul>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[
                {name:"小明",id:1,age:18},
                {name:"小红",id:2,age:18},
                {name:"小黄",id:3,age:18},
                {name:"小绿",id:4,age:18},
                {name:"小紫",id:5,age:18}
                ]
        }
    },
    methods:{
        goInfo(id){
            this.$router.push({name:'info',params:{id:id}})
        },
        goInfoQuery(id){
            this.$router.push({name:'info',query:{id:id}})
        }
    }
}
</script>
<style scoped>
.item{
    margin-bottom:10px;
}
</style>


