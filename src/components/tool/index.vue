<template>
    <div>
        {{util.isMobile()?'移动端':'pc端'}}
        <div>
            <p v-if="util.isEmail(Email)">{{util.email(Email)}}</p>
            <p v-if="util.isPhone(tel)">{{util.phone(tel)}}</p>
        </div>
    </div>
</template>
<script>
import util from '../../libs/util.js'
import api from '../../api/service.js'
import add from '../copy/index.js'
export default {
    data(){
        return{
            util,
            Email:'123456789@163.com',
            tel:13745678901,
            timer:null,
            index:4
        }
    },
    created(){
       this.getList()
       this.getTag()
    },
    methods:{
        btn(){
            console.log(add.add(1,2))
        },
         getList(){
            api.getBannerList({}).then(res=>{
                console.log(res)
            }).catch(res=>{
                console.log(res)
            })
        },
        getTag(){
            this.setTime()
        },
        setTime(){
            if(this.timer){
                clearInterval(this.timer)
            }
            this.timer = window.setInterval(()=>{
                this.index -- 
                if(this.index === 0 ){
                     clearInterval(this.timer)
                }
                console.log(this.index)
            },2000)
        }

    }
}
</script>

