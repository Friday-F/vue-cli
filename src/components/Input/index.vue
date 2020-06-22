<template>
    <div>
        <ul class='list'>
            <li class='item' v-for="(item,index) in list" :key='index' @click='toggle(item)'>
                <p>{{item.name}}</p>
                <ul v-show="item.isFlag">
                    <template v-if='item.inputList && item.inputList.length > 0'>
                    <li  v-for="(tag,index) in item.inputList" :key='index'>
                        <itemInput :formData.sync="tag"></itemInput>
                    </li>
                    </template>
                </ul>
                <button @click='saveBtn(item)'>保存</button>
            </li>
        </ul>
        
    </div>
</template>
<script>
import itemInput from './dataItm'
export default {
    components:{
        itemInput
    },
    methods:{
        toggle(item){
            this.list.map(item=>{
                item.isFlag = false
            })
        item.isFlag = true
        },
        saveBtn(item){
            console.log(item)
        }
    },
    data(){
        return{
            active:"初赛",
            list:[
                {
                    name:'初赛',
                    isFlag:false,
                    inputList:[{
                        text:"11111",
                        tip:'提示111'
                    },{
                        text:"2222",
                        tip:'提示222'
                    },{
                        text:"333",
                        tip:'提示333'
                    }]
                },
                {
                    name:'预赛',
                    isFlag:false,
                    inputList:[{
                        text:"4444",
                        tip:'提示4444'
                    },{
                        text:"5555",
                        tip:'提示5555'
                    },{
                        text:"666",
                        tip:'提示666'
                    }]
                }
            ]
        }
    }
}
</script>
<style scoped>
.list{
    display:flex;
}
.item{
    padding:20px;
}
</style>

