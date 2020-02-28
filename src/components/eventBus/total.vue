<template>
    <div>
       <p @click="addition">+</p>
    </div>
</template>
<script>
import { EventBus } from '../../_common/event-bus.js'
export default {
    data(){
        return{
            number:1,
            deg:180
        }

    },
    watch:{
      
    },
    created(){
       
        
    },
    methods:{
       addition(){
            EventBus.$emit('incremented',{
                num:this.number,
                deg:this.deg
            })
       }
        
    }
}
</script>
<style scoped>
    
</style>


