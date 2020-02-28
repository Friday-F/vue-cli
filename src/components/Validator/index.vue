<template>
    <div>
        <!-- <form class="form" name="form" action="javascript:;">
            <ul class="form-rows">
                <li class="col-row">
                    <div class="col-label">
                        <label for="name" class="label">
                            <span class="text">姓名</span>
                        </label>
                    </div>
                    <div class="col-input col-input--block">
                        <input type="text"
                                class="input"
                                id="name"
                                name="name"
                                autocomplete="off"
                                maxlength="30"
                                placeholder="请填入姓名"
                                v-model="form.name">
                        <div class="ui-tip"></div>
                    </div>
                </li>
            </ul>
        </form> -->
         <ul>
            <li v-for="(item,index) in list" :key='index'>
            <span @click="toggle(item)">{{item.user_name}}</span>
            <p v-show="item.isToggle">{{item.content}}</p>
        </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    components:{
        
    },
    data(){
        return{
            form:{
                name:'',
                age:''
            },
            list:[],
            page:1,
            id:13
        }
    },
    created(){
        this.getinit()
    },
    methods:{
       getinit(){
        axios.get(`http://www.liulongbin.top:3005/api/getcomments/${this.id}?pageindex=${this.page}`).then(res=>{
          console.log(res)
          if(res.status==200){
              let params = res.data.message
              params.map(item=>{
                  item.isToggle = false
              })
              this.list = params
          }
        })
      },
      toggle(item){
          this.list.map(tag=>{
              if(tag !== item){
                  tag = false
              }
          })
          item.isToggle = !item.isToggle
      }
    }
    
}
</script>
<style scoped lang='less'>
    li{
        margin:20px 0;
    }
</style>


