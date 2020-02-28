<template>
    <div>
        {{id}} <br>
        <input type="button" @click="goBack" class="btn" value="返回">
        <div :class="[{'blue':flag===1},{'red':flag===2},{'yellow':flag===3}]">三元表达式</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            id:0,
            flag:3
        }
    },
    created(){
        this.id = this.$route.params.id
        //this.id = this.$route.query.id
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
.btn{
    width: 100px;
    height: 30px;
    background: #ccc;
}
</style>


