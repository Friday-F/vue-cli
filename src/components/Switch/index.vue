<template>
    <div>
        <div>
            <v-switch @change='change' v-model="state"></v-switch>
        </div>
        <div>
            <label for="" @click.stop="toggle" class="read">
                <div  v-if="!state">
                    <input type="checkbox"><i class="icon-check"></i>
                </div>
                <div v-if="state">
                    <input type="checkbox" checked><i class="icon-check">✓</i>
                </div>
                <p :class="{'cur':state}">已阅读条款</p>
            </label>
        </div>
        <div>
            <ul>
                <li v-for="(item,index) in search" :key="index">{{item.name}} {{item.age}}</li>
            </ul>
        </div>
        
        
    </div>
</template>
<script>
import Vswitch from './Switch'
export default {
    data(){
        return{
            id:'1',
            state:true,
            state:false,
            arr:[
                {name:"小明",age:18,},
                {name:"小红",age:20,},
                {name:"小黄",age:30,},
                {name:"小录",age:40,}
            ],
            search:[]
        }
    },
    created(){
        this.search = [...this.arr]
    },
    components:{
        'v-switch':Vswitch
    },
    methods:{
        change(val){
            //console.log(val)
        },
        toggle(){
            this.state = !this.state
            this.search = [];
            if(this.state){
                this.arr.map(item=>{
                    if(item.age >= 30){
                        this.search.push(item)
                    }
                })
            }else{
                this.search = [...this.arr];
            }
        }
    }
}
</script>
<style scoped>
.read{
    display: flex;
}
.cur{
    color:#f40;
}
 i.icon-check {
            font-size: 12px;
            font-style: normal;
            display: inline-block;
            width: 12px;
            height: 12px;
            text-align: center;
            line-height: 12px;
            color: #fff;
            vertical-align: middle;
            margin-right: 2px;
            border: #16af7d 1px solid;
}

        input[type="checkbox"],
        input[type="radio"] {
            display: none;
            vertical-align: middle;
        }

        input[type="radio"]+ i {
            border-radius: 7px;
        }

        input[type="checkbox"]:checked+ i,
        input[type="radio"]:checked+ i {
            background: #16af7d;
        }

        input[type="checkbox"]:disabled+ i,
        input[type="radio"]:disabled+ i {
            border-color: #ccc;
        }

        input[type="checkbox"]:checked:disabled+ i,
        input[type="radio"]:checked:disabled+ i {
            background: #ccc;
        }
</style>


