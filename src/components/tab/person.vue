<template>
  <div>
    <ul>
      <li v-for='(item,key) in list'>{{key}}:{{item}}</li>
    </ul>
    <div :class="['box',{'cur':flag}]"></div>
    <p :style="{width:setwidth+'px',height:setwidth+'px',background:setbg}"></p>
    <input type="button" value="toggle" @click='setclass'>
    <input type="button" @click='jump' value="跳转">
  </div>
</template>

<script>
export default {
  data(){
    return{
     list:{name:"小明",age:18,sex:'男'},
     flag:false,
     setwidth:200,
     setheight:200,
     setbg:'lightblue'
    }
  },
  created(){

  },
  methods:{
    setclass(){
      this.flag = !this.flag
    },
    jump(){
      this.$router.push({path:'/axios'})
    }
  }
}
</script>

<style scoped>
.box{
  width: 100px;
  height: 100px;
  background: red;
  transition: all 2s;
}
.cur{
  box-shadow: 10px 10px #f40;
}
</style>
