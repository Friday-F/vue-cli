<template>
    <div class="calilation">
        <form action="javascript:;" name="form">
            <div>
                <label for="number">单价:</label>
                <input type="text" name="number" v-model="number" @input="setTotal" id="number" class="inp">
            </div>
            <div>
                <label for="total">总价:</label>
                <input type="text" name="total" id="total" v-model="total" @input="setNumber" class="inp">
            </div>
            <input type="button" @click='setAll' value="全部购买">
            
        </form>

    </div>
</template>
<script>
import util from '../../libs/util.js'
export default {
    name:"calilation",
    components:{
    },
    data(){
        return{
            price:10,
            number:'',
            total:'',
            max:1000,
            min:10,
            meHave:200
        }
    },
    computed:{
        
    },
    methods:{
        setTotal(){
            if(this.number && parseFloat(this.number)){
                this.total = util.numMulti(this.number,this.price)
            }else{
                this.total = 0
            }
        },
        setNumber(){
             if(this.total && parseFloat(this.total)){
                this.number = util.numDiv(this.total,this.price)
            }else{
                this.number = 0
            }
        },
        setAll(){
            if(this.meHave > this.max){
                this.total = this.max;
            }else{
                this.total = this.meHave
            }
            this.setNumber()
        }
    }
}
</script>
<style scoped>
.calilation{
    padding:40px;
}
    .inp{
        border-bottom:1px solid #f40;
        outline: none;
        margin-top:20px;
    }
</style>


