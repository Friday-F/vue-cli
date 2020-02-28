<template>
    <div>
        <ul>
            <li>{{info.a.total}}</li>
            <li>{{info.b.total}}</li>
            <!-- <li>{{aAccount}}</li>
            <li>{{bAccount}}</li> -->
        </ul>
    </div>
</template>
<script>
import dataInfo from './info.js'
export default {
    data(){
        return{
            list:[{
                type:"a",
                account:'100'
            },{
                type:"b",
                account:'200'
            }],
            info:{},
            price:'',
            aAccount:'',
            bAccount:''

        }

    },
    watch:{
        '$store.state.dataInfo'(newVal,oldVal){
            for(let k in this.info){
                this.info[k].total = this.info[k].account * newVal;
            }
        },
        'price'(newVal,oldVal){
            for(let k in this.info){
                // console.log(k)
                this.info[k].total = this.info[k].account * newVal;
                // this.$set(this.info[k], 'total', this.info[k]['total'] * newVal)
                // if(k === 'a'){
                //     this.aAccount = this.info[k].account * newVal
                // }else if(k === 'b'){
                //     this.bAccount = this.info[k].account * newVal
                // }
            }
            console.log(this.info)
        },
    },
    created(){
        this.getInit()
        // 模拟从store中web socket文件
        this.getData()
        
    },
    methods:{
        getInit(){
            this.list.map(item=>{
                this.info[item.type] = item;
                if(this.price){
                    // this.info[item.type].total = item.account * this.price;
                    this.$set(this.info[item.type], 'total', item.account * this.price)
                }else{
                    this.$set(this.info[item.type], 'total', '--')
                }
            })
        },
        getData(){
            dataInfo.fn().then(res=>{
                this.$store.commit('setInfo',res)
            })
        }

        
    }
}
</script>

