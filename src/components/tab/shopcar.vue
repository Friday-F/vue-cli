<template>
  <div>
      <input type="button" value="qieuhaun" @click='toggle'>
      <div :is='actView'> </div>
  </div>
</template>

<script>
import son from './son.vue'
import sontwo from './sontwo.vue'
export default {
  components:{
    son,
    sontwo
  },
  data(){
    return{
      num:10,
      obj:{},
      actView:'son'
    }
  },
  methods:{
    cur(item){
      console.log(item)
      this.obj = item
    },
    toggle(){
      if(this.actView=='son'){
          this.actView = 'sontwo'
      }else{
        this.actView = 'son'
      }
    }
  }
}
</script>

<style>

</style>
