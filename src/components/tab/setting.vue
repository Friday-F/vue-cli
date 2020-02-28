<template>
  <div>
       <ul>
        <li :class="{'act':flag=='reg'}" @click="flag='reg'">登陆</li>
         <li :class="{'act':flag=='login'}" @click="flag='login'">注册</li>
       </ul>
       <div class="login" v-show="flag=='reg'">登陆</div>
       <div class="reg"  v-show="flag=='login'">注册</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      flag:'reg'
    }
  },
  methods:{
    toggle(){
      this.flag = !this.flag
    }
  }
}
</script>

<style scoped>
  ul li{
    float: left;
    width: 50%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: lightblue;
    color:#fff;
  }
  .act{
    background: #f40;
  }
  .login,.reg{
    width: 100%;
    height: 200px;
    box-sizing: border-box;
    border:1px solid pink;
  }
</style>
