<template>
    <div>
        <input type="text" v-model="message">
        <button @click="updata">更新</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            message:"这是一条消息"
        }
    },
    methods:{
        updata(){
            console.log(this.$bus)
             this.$bus.$emit("updateMessage", this.message);
        }
    }
}
</script>

