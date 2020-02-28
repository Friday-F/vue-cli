<template>
  <header @click="deld">
      <h1 >{{title}}{{tit}}</h1>
  </header>
</template>

<script>
export default {
  name: 'heade',
  props:{
    tit:{
        type:String,
        default:''
    }
  },
  data () {
    return {
        title:"Vue.js Demo"
    }
  },
  methods:{
    deld:function(){
        this.tit = "changed"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
    background: lightgreen;
    padding:10px;
}
h1{
    color: #222;
    text-align: center;
}
</style>