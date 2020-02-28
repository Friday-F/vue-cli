<template>
    <div class="el">
        <div class="maxheight">
            <div class="top">头部</div>
            <div class="content">
                    <div class="food">
                        <nav ref='nav' :class="'isFixed'==true?'fixed':''">
                            <scroll 
                                ref="wrapper"
                                class="wrapper"
                                :pullup="pullup"
                                :listenScroll='listenScroll'
                                @scrollToEnd="scrollToEnd"
                                :pulldown="pulldown"
                                @pulldown="loadData"
                            >
                            <ul>
                                <li 
                                v-for="(item,index) in navlist" 
                                :key='index' 
                                :class='{act:active === index}'
                                @click='getcur(index)'
                                >{{item}}</li>
                            </ul>
                            </scroll>
                        </nav>
                        <div class="content-list">
                            <scroll 
                                ref='listview'
                                class="wrapper"
                                :pullup="pullup"
                                :listenScroll='listenScroll'
                                @scrollToEnd="scrollToEnd"
                                :pulldown="pulldown"
                                @scroll='scrollTo'
                                @pulldown="loadData"
                            >
                            <ul>
                                <li v-for='(item,index) in contentList' :key='index' ref="listGroup">
                                    <h2>{{item.title}}</h2>
                                    <ul>
                                        <li class="food_list" v-for='(tag,index) in item.list' :key='index'>
                                            {{tag}}
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            </scroll>
                        </div>
                    </div>
                
            </div>
        </div>  
    </div>
</template>
<script>
import scroll from '../common/scroll/scroll'
    export default{
        data(){
            return{
                navlist:['新闻','体育','军事','娱乐','天气','新闻','体育','军事','娱乐','天气','新闻','体育','军事','娱乐','天气','新闻','体育','军事','娱乐','天气','新闻','体育','军事','娱乐','天气', '新闻','体育','军事','娱乐','天气'],
                active:0,
                isFixed:'',
                pullup:true,
                pulldown:true,
                contentList:[
                    {title:'盖浇饭系列',list:['西红柿','苹果','香蕉']},
                    {title:'川县特色',list:['辣椒','土豆丝','花生啤酒']},
                    {title:'精品套餐',list:['米饭','酱菜','红枣银耳']},
                    {title:'滋补套餐',list:['山药','海带','黄豆腐竹']}
                ],
                listenScroll:true,
                rightLiTops:[],//存放右侧li的高度
                scrollY:0
            }
        },
        created(){
           
        },
        methods:{
            getcur(index){
                this.active = index
                this.$refs.listview.scrollToElement(this.$refs.listGroup[index])
            },
            handleScroll(){
                //滚动的距离
                let scrollTop = window.pageXOffset || document
                        .documentElement.scrollTop||document.body.scrollTop||0;
                //获取元素距离
                let navTop = this.$refs.nav.offsetTop;
                console.log(scrollTop,navTop)
                if(navTop<scrollTop){
                    
                    this.isFixed = true
                }else{
                    this.isFixed = false
                }
                console.log(this.isFixed)

            },
            _initRightHeight(){
                let rightList = this.$refs.listGroup;
                let top = 0;
                let itemArray=[];
                itemArray.push(top)
                Array.prototype.slice.call(rightList).forEach(li => {
                    top += li.clientHeight; //获取所有li的每一个高度
                    itemArray.push(top)
                });
                this.rightLiTops = itemArray;
                
                
            },
            scrollTo(data){
                this.scrollY = -data.y;
                let index = this.rightLiTops.findIndex((tops,index)=>{
                    return this.scrollY >= tops && this.scrollY < this.rightLiTops[index+1]
                })
                if(index <= 0){
                    index = 0;
                }
                this.active = index
            },
            scrollToEnd(){
                
            },
            loadData(){

            }
        },
        components:{
            scroll
        },
        mounted(){
            window.addEventListener('scroll',this.handleScroll)
            this._initRightHeight()
        },
        destroyed(){
            window.removeEventListener('scroll',this.handleScroll)
        }
    }
</script>
<style scoped lang='less'>
.el{
    /* position: fixed;
    width: 100%;
    top:50px;
    bottom: 50px;
     */
}
.wrapper{
    width: 100%;
    height:100%;
    overflow: hidden;
}
    .top{
        width: 100%;
        height: 50px;
        background:pink;
        text-align: center;
        line-height: 30px;
        color:#fff;
    }
    .content{
        width: 100%;
        position: fixed;
        top:100px;
        bottom: 50px;
    }
    .food{
        display: flex;
    }
    .content-list{
        width: 100%;
        position: fixed;
        left:100px;
        top:100px;
        bottom: 50px;

        h2{
            height: 30px;
            line-height: 30px;
            background: #fff;
        }
        .food_list{
            width: 100%;
            height: 100px;
            border:1px solid #f40;
            margin-bottom:10px;
            box-sizing: border-box;
        }
    }
    nav{
        width:100px;
        position: fixed;
        left:0;
        top:100px;
        bottom: 50px;
        background: #efefef;
    }
    .fixed{
        position: fixed;
        top:50px;
        left:0;
    }
    nav ul{
        align-items:  center;
    }
    nav li{
        width: 100%;
        padding:10px;
        line-height: 40px;
        text-align: center;
        color:#000;
        box-sizing: border-box;
    }
    nav li.act{
        background: #fff;
    }

</style>

