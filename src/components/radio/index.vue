<template>
    <div>
        <br>
        <h1>单选</h1>
        <br>
        <ul class="radio">
            <li :class="{'active':current==='one'}" @click="setCurrent('one')">一年级</li>
            <li :class="{'active':current==='two'}" @click="setCurrent('two')">二年级</li>
            <li :class="{'active':current==='three'}" @click="setCurrent('three')">三年级</li>
        </ul>
        <br>
        <br>
        <h1>多选</h1>
        <br>
        <ul class="checkout">
            <li v-for="(item,index) in list" :key='index' @click="setChekout(item)" :class="{'active':setCurrentCheckout(item)}">{{item}}</li>
        </ul>
        <h1>全选，全不选</h1>
        <ul class="ul">
            <li class="item" v-for="(item,index) in listInit" :key='index' @click="setCheck(item)"><i :class="{selected:item.isCheck}"></i>{{item.name}}</li>
        </ul>
        <p class="all" @click="setAll"><i :class="{selected:isAll}"></i>全选</p>
    </div>
</template>
<script>
export default {
    name:'Radio',
    data(){
        return{
            current:'one',
            list:['语文','数学','英文','美术'],
            currentList:[],
            listInit:[{name:"苹果",isCheck:false},{name:"香蕉",isCheck:false},{name:"西瓜",isCheck:false}]
        }
    },
    computed:{
        isAll(){
            return this.listInit.every(item=>{
               return item.isCheck === true
           }) 
        }
    },
    methods:{
        setAll(){
            let a = !this.isAll
            this.listInit.map(item=>{
                item.isCheck = a
            })
        },
        setCheck(item){
            item.isCheck = !item.isCheck
        },
        setCurrent(flag){
            this.current = flag;
        },
        setChekout(item){
            if(this.currentList.indexOf(item)===-1){
                this.currentList.push(item)
            }else{
                this.currentList.map(tag=>{
                    if(tag === item){
                        let index = this.currentList.indexOf(tag);
                        this.currentList.splice(index,1)
                    }
                })
            }
            console.log(this.currentList)
        },
        setCurrentCheckout(item){
            return this.currentList.indexOf(item)!==-1
        }
    }
}
</script>
<style scoped lang='less'>
.all{
    i{
            display: inline-block;
            width:10px;
            height: 10px;
            border:1px solid #f40;
            border-radius:50%;
            &.selected{
                background: #f40;
            }
    }
}
.ul{
    padding-left:20px;
    .item{
        margin:8px 0;
        i{
            display: inline-block;
            width:10px;
            height: 10px;
            border:1px solid #f40;
            border-radius:50%;
            &.selected{
                background: #f40;
            }
        }
    }
}
.radio,.checkout{
    display: flex;
    li{
        width: 100px;
        height: 30px;
        line-height: 30px;
        margin:0 4px;
        text-align: center;
        &.active{
            background: #f40;
            color:#fff;
        }
    }
}
</style>


