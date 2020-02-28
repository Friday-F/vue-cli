<template>
    <div>
       <p @click="subtraction">-</p>
       <input type="text" v-model="inp">
        <button @click="updata">更新</button>
    </div>
</template>
<script>
import { EventBus } from '../../_common/event-bus.js'
export default {
    data(){
        return{
            number:1,
            deg:180,
            inp:'这是一条信息'
        }

    },
    watch:{
      
    },
    created(){
       
        
    },
    methods:{
       subtraction(){
            EventBus.$emit('decreased',{
                num:this.number,
                deg:this.deg
            })
       },
       updata(){
           console.log(this.inp)
           EventBus.$emit("updateMessage",this.inp);
       }
        
    }
}
</script>
<style scoped>
    
</style>


