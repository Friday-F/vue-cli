<template>
    <div>
        <!-- 点击发送 -->
        <span class="green" @click="sendBtn" v-if="isLoading === false && begin === false">{{send}}</span>
        <!-- 正在发送 -->
        <span class="green" v-if="isLoading === true">{{sending}}</span>
        <!-- 倒计时 -->
        <span class="green" v-if="isLoading === false && begin === true">{{countSeconds}}</span>
    </div>
</template>
<script>
const COUNT_LIMIT = 5;
import axios from 'axios'
export default {
    data(){
        return{
            send:'点击发送验证码',
            sending:'发送中',
            isLoading:false,
            isSend:false,
            begin:false,
            num:COUNT_LIMIT,
            countSeconds:'',
            timer:null
        }
    },
    methods:{
        sendBtn(){
            this.isLoading = true;
            // 发送短信验证码的借口
            axios.get('http://www.liulongbin.top:3005/api/getlunbo')
                .then(res=>{
                    this.isLoading = false;
                    this.begin = true;
                    this.countSeconds = this.num+'秒'
                    clearInterval(this.timer)
                    this.timer = setInterval(()=>{
                        if(this.num > 1){
                            this.num--
                            this.countSeconds = this.num+'秒'
                        }else{
                            clearInterval(this.timer)
                            this.begin = false;
                            this.send = '重新获取'
                            this.num = COUNT_LIMIT
                        }
                    },1000)
                })
        }
    }
}
</script>
<style scoped>
.green{
    color:#00b07c;
    font-size: 12px;
}
</style>


