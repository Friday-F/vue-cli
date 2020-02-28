<template>
    <div class="search">
        <div class="search-con">
            <div class="left">
                <div class="select">
                    <p @click="toggle">{{cur}}</p>
                    <ul class="list" v-show="flag">
                        <li @click="current('商家')">商家</li>
                        <li @click="current('推荐美食')">推荐美食</li>
                    </ul>
                </div>
                <input type="text" class="inp" v-model="text" @input="search">
           </div>
           <span class="btn">取消</span>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            flag:false,
            cur:'商家',
            text:'',
            store:['肯德基','麦当劳','望京小腰','木屋烧烤','麦子'],
            foot:['强暴鸡米花','汉堡包','羊肉串','鱼豆腐','花生','串串香'],
            searchList:[]
        }
    },
    methods:{
        toggle(){
            this.flag = !this.flag
        },
        current(current){
            this.cur = current
            this.flag = false
        },
        search(){
            if(!this.text){
                this.searchList = []
                return
            }
            this.searchList = []
            if(this.cur=='商家'){
                this.store.map(item=>{
                    if(item.indexOf(this.text.trim())!==-1){
                        this.searchList.push(item)
                    }
                })
            }else{
                this.foot.map(item=>{
                    if(item.indexOf(this.text.trim())!==-1){
                        this.searchList.push(item)
                    }
                }) 
            }
            console.log(this.searchList)
        }
    }
}
</script>
<style scoped>

.search{
    position:fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index:99;
    font-size: 12px;
}
.search-con{
    width: 100%;
    display: flex;
    padding:10px 40px 0 10px;
    box-sizing: border-box;
    border-radius: 20px;
    display: flex;
}
.left{
    width: 100%;
    height: 30px;
    padding-left:10px;
    box-sizing: border-box;
    border-radius: 20px;
    display: flex;
    background: #efefef;
    position: relative;
}
.select{
    
}
.list{
    position: absolute;
    top:100%;
    left:0;
}
.list li{
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    border-bottom:1px solid #ccc;
}
.select p{
    flex: 1;
    line-height: 30px;
}
.btn{
   position: absolute;
   top:0;
   right:6px;
   height: 50px;
   line-height: 50px;
}
.inp{
    background: none;
    outline: none;
    padding-left:20px;
}
</style>


