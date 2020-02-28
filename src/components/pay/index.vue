<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>支付方式</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in list" :key='index'>
                    <td>{{item.name}}</td>
                    <td>{{item.age}}</td>
                    <td>
                        <ul class="pay-list">
                            <li v-for="(tag,index) in item.payment_methods" :key='index'>
                                {{setType(tag)}}
                            </li>
                        </ul>
                    </td>
                    <td><a class="sell" href="javascript:;" @click="sellBtn(item)">卖出</a></td>
                </tr>

            </tbody>

        </table>
    </div>
</template>
<script>
import list from './data.js'
import mePay from './pay.js'

export default {
    name:"pay",
    data(){
        return{
            list,
            payList:[]
        }
    },
    created(){
        this.setMePay()
    },
    methods:{
        setMePay(){
            mePay.filter(item=>{
                if(item.state === 'enabled'){
                    this.payList.push(item.payment_method) 
                }
            })
        },
        sellBtn(item){
            let currentPayList = item.payment_methods;
            let isSell = currentPayList.some(item=>{
                return this.payList.indexOf(item) !== -1
            })
            let textPay = currentPayList.map(item=>{
                return this.setType(item)
            })
            if(isSell){
                this.$alert({
                    title:'提示',
                    content:'可以进行卖出',
                    btnText:"确认"
                })
            }else{
                this.$alert({
                    title:'提示',
                    content:`卖家只支持 ${textPay.join('')} 向您付款`,
                    btnText:"确认"
                })
            }

        },
        setType(type){
            switch(type){
                case 'alipay':
                    return '支付宝';
                case 'bank_card_pay':
                    return '银行卡';
                case 'wechat_pay':
                    return '微信';
                default:
                    return ''
             }
        }
    }
}
</script>
<style scoped>
.table{
    width: 60%;
    padding:20px 0;
}
.table tr{
    text-align: center;
    
}
table tr td{
    padding: 20px 0;
}
    .list .item{
        padding: 20px 0;
        display: flex;
    }
    .list .item span{
        display: inline-block;
         padding: 0px 20px;
    }
    .pay-list{
        display: flex;
        justify-content: center;
    }
    .pay-item{
        padding: 0px 4px;
    }
    .sell{
        display: inline-block;
        padding:0 16px;
        height: 32px;
        line-height: 32px;
        background: #ff5353;
        color:#fff;
        font-size: 14px;
    }
</style>


