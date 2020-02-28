<template>
    <div>
        <date-picker 
        v-model="timer" 
        type = 'datetime'
        lang="zh"
        format="YYYY-MM-DD HH:mm:ss"
        value-type='timestamp'
        placeholder='请输入日期' 
        @input="change" ></date-picker>
    </div>
</template>
<script>
import DatePicker from 'vue2-datepicker'
export default {
    components:{
        DatePicker
    },
    data(){
        return{
            timer:''
        }
    },
    methods:{
        change(){
            this.timer = this.timer === null ? '' : this.timer
            console.log(this.timer)
        }
    }
    
}
</script>
<style>

</style>


