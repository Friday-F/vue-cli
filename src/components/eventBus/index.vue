<template>
    <div>
        <!-- 加法 -->
       <div class="item">
           <total></total>
       </div>
       <!-- 减法 -->
       <div class="item">
           <v-sub></v-sub>
       </div>
       <p>{{degValue}}</p>
       <p>{{fontCount}}</p>
       <h1>{{message}}</h1>
    </div>
</template>
<script>
import sub from './sub'
import total from './total'
import {EventBus} from '../../_common/event-bus.js'
export default {
    components:{
        "v-sub":sub,
        total
    },
    data(){
        return{
            degValue:0,
            fontCount:0,
            message:''
        }

    },
    watch:{
      
    },
    created(){
        // var self = this
        // this.$bus.$on('updateMessage', function(value) {
        //     self.updateMessage(value);
        // })
        
    },
    methods: {
        
    },
    mounted(){
        EventBus.$on('incremented',({num,deg})=>{
            this.fontCount += num
            this.degValue = deg;
        })
        EventBus.$on('decreased',({num,deg})=>{
            this.fontCount -= num
            this.degValue = deg
        })
        this.$bus.$on('updateMessage', function(value) {
            console.log(value)
             this.message = value;
        })
        // EventBus.$on('updateMessage',(inp)=>{
        //     console.log('value----',inp)
        //     this.message = inp;
        // })
    }
}
</script>
<style scoped>
    .item{
        margin-top:30px;
    }
</style>


