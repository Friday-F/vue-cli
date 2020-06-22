<template>
  <div class="newlist">
      <div class="refresh" v-show='flag'>刷新....</div>
      <scroll class="wrapper"
          ref="wrapper"
          :data="data"
          :pullup="pullup"
          @scrollToEnd="scrollToEnd"
          :pulldown="pulldown"
          @pulldown="loadData"
          >
      <ul>

        <li v-for='(item,index) in data' :key='index'>
            {{item.content}}
        </li>

      </ul>
    <loading v-show='!data.length'></loading>
    <div class="down" v-show='num' ref='down'><img src="../common/loading/loading.gif" height="100" width="100" alt=""></div>
  </scroll>
  </div>

</template>
<script>
  import scroll from '../common/scroll/scroll.vue'
  import loading from '../common/loading/loading.vue'
  // import axios from 'axios'
  import api from '../../api/service.js'
  export default {
    data() {
      return {
        data: [],
        pulldown: true,
        pullup:true,
        flag:false,
        params:{
          page:1,
          id:13
        }
      }
    },
    created() {
    //   this.getinit()
      this.loadData()
    },
    methods: {
      getinit(){
        api.getNewList(this.params).then(res=>{
          console.log(res)
          if(res.status==0){
              setTimeout(()=>{
                this.data = this.data.concat(res.message)
                if(res.data.message){

                }
              },1000)


          }
        })
      },
      //下拉刷新
      loadData(){

      },
      // 上拉加载
      scrollToEnd(){
         this.page++
        // setTimeout(()=>{

        this.getinit()
        // },2000)

      }
    },
    watch:{

    },
    computed:{
      num(){
        if(this.data.length<this.page*10){
          return true
        }else{
          return false
        }
      }
    },

    components:{
      scroll,
      loading
    }
  }
</script>
<style scoped>
.newlist{
  position: fixed;
  top:50px;
  bottom:50px;
  width: 100%;
}
ul li{
    height: 100px;
    border-bottom: 1px solid #f40;
    margin-top:10px;
  }
  ul li a{
    width: 100%;
    height: 100%;
    display: block;
  }
  .wrapper{
    height: 100%;
    overflow: hidden;
  }
  .down{
    position: fixed;
    bottom:60px;
    left:0;
    width: 100%;
    text-align: center;
  }
  .down img{
    width: 24px;
    height: 24px;
  }
  .refresh{
    position:fixed;
    top:50px;
    width: 100%;
    text-align: center;
    height: 30px;
    line-height: 30px;
    background: #ccc;
    z-index: 99;
  }
</style>
