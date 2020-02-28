<template>
  <div id="app">
    <my-header></my-header>
    <router-view/>
   <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from './components/header/index'
import myFooter from './components/footer/index'
export default {
  name: 'App',
  methods:{
    
  },
  components:{
    myHeader,
    myFooter
  }
}
</script>

<style scoped>
#app{
  padding:50px 0;
}
</style>
