<template>
    <div>
        <selection :selections="buyTypes" @on-change='getCur'></selection>
    </div>
</template>
<script>
import selection from './selection'
export default {
    data(){
        return{
            buyTypes: [
                {
                label: '入门版',
                value: 'rumen'
                },
                {
                label: '中级版',
                value: 'zhongji'
                },
                {
                label: '高级版',
                value: 'gaoji'
                }
            ],
            curActive:0
        }
    },
    components:{
        selection
    },
    methods:{
        getCur(data){
            console.log(data)
        },
        
    }
}
</script>
<style>
   
</style>


