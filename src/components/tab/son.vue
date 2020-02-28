<template>
  <div>
    <ul>
      <li v-for='(item,index) in list' @click='set(item)'>{{item.name}}</li>
    </ul>
    子组件{{num}}
    <slot></slot>
  </div>
</template>
<script>
  export default{
    props:['num'],
    data(){
      return{
        list:[{'name':'小明','age':18},{'name':'小红','age':20},{'name':'小兰','age':100}]
      }
    },
    methods:{
      set(item){
        //console.log(item)
        this.$emit('act',item)
      }
    }

  }
</script>
<style scoped></style>
