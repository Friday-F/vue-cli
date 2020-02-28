<template>
  <footer>
      <p>{{copyright}}{{tit}}</p >
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props:{
    tit:{
        type:String
    }
  },
  data () {
    return {
        copyright:"copyright 2019 Vue Demo"
    }
  }
}
</script>

<style scoped>
footer{
    background: #222;
    padding:6px;
}
p{
    color: lightgreen;
    text-align: center;
}
</style>