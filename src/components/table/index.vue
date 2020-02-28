<template>
    <div>
        <table  cellspacing="0"
        border="1">
            <tr>
                <th>订单号</th>
                <th>创建时间</th>
                <th>订单内容</th>
                <th>数量</th>
                <th>订单金额</th>
                <th>操作</th>
                <th>简介</th>
            </tr>
            <tr v-for="(item,index) in list" :key="index">
                <td :rowspan='item.len' v-if="item.orderId">{{item.orderId}}</td>
                <td :rowspan='item.len' v-if="item.createTime">{{item.createTime}}</td>
                <td>{{item.content}}</td>
                <td>{{item.quantity}}</td>
                <td>{{item.money}}</td>
                <td  v-if="item.orderId" :rowspan='item.len'>修改</td>
                <td  v-if="index === 0" :rowspan='list.length'>合并单元格</td>
            </tr>
        </table>
    </div>
</template>
<script>
import { tableInfo } from './data.js'
export default {
    data(){
        return{
            // 数据格式
            tableInfo,
            list:[]
        }
    },
    created(){
        this.setData()
    },
    methods:{
        setData(){
            let result = [];
            tableInfo.map(item=>{
                if(item.orderItemList){
                    let len = item.orderItemList.length;
                    item.orderItemList.map((innerItem,innerIndex)=>{
                        if(innerIndex === 0){
                            result.push({
                                len:len,
                                orderId:item.orderId,
                                createTime:item.createTime,
                                content:innerItem.content,
                                quantity:innerItem.quantity,
                                money:innerItem.money
                            })
                        }else{
                            result.push({
                                    content:innerItem.content,
                                    quantity:innerItem.quantity,
                                    money:innerItem.money
                            })
                        }
                        
                        
                    })
                }
            })
            this.list = result
            console.log(this.list)
        }
    }
}
</script>
<style scoped>
 table{
        margin-top: 15px;
        width: 100%;
        border:1px solid #e9eaec;
        border-collapse:collapse
    }
    th{
        background-color: #f8f8f9;
    }
    th,td{
        padding: 5px;
        border: 1px solid #e9eaec;
        text-align: center;
        vertical-align: top;
        line-height: 30px;
    }
</style>


