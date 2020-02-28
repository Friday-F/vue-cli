<template>
    <div>
        <ul class="nav">
            <li 
            v-for="(item,index) in data" 
            :key="index" 
            @click="toggle(item)"
            :class="{'active':currency === item.currency}" 
            ><a href="javascript:;">{{item.currency}}</a></li>
        </ul>
        <div class="content">
            <div class="available">可用：{{balances.available_amount}} {{balances.currency}}</div>
            <div class="frozen">剩余：{{balances.frozen_amount}} {{balances.currency}}</div>
        </div>
    </div>
</template>
<style scoped>
    .nav{
        display: flex;

    }
    .nav li{
        flex:1;
        text-align: center;
        line-height: 30px;
    }
    .nav li.active a{
        border-bottom:2px solid #f40;
    }
    .content{
        width: 90%;
        margin:20px auto;
        display: flex;
        align-items:center;
        background:rgba(233,236,237,.5);
        height: 50px;
        padding:0 10px;
        box-sizing: border-box;
    }
    .content div{
        flex:1;
    }
</style>
    
<script>
import vm from './main.js'
export default vm
</script>

