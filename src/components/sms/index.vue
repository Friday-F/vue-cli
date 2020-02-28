<template>
    <div class="box">
        <div class="sms">
            <input type="text" class="inp">
            <span class="send">
                <sms></sms>
            </span>
        </div>
        
    </div>
</template>
<script>
import sms from './Phone'
export default {
    components:{
        sms
    },
    data(){
        return{

        }
    }
}
</script>
<style scoped>
    .box{
        padding:40px 0 0 10px;
    }
    .sms{
        width: 200px;
        position: relative;
    }
    .send{
        position: absolute;
        right:0;
        top:0;
    }
    .inp{
        width: 100%;
        outline: none;
        border-bottom:1px solid #f40;
    }

</style>


