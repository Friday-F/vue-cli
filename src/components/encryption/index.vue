<template>
    <div>
        <div v-for="(item, $index) in list" :key='$index' class='card'>
            <P>{{item.index}}期 {{item.list.length}} / 3</P>
            <ul v-if='item.list.length'>
                <li v-for="(innerItem, $innderIndex) in item.list">
                    {{innerItem.name}} + {{innerItem.age}}
                </li>
            </ul>
            <div v-else>暂无数据</div>
        </div>
    </div>
</template>
<script>
import EthCrypto from 'eth-crypto';
import {Arabia_To_SimplifiedChinese } from '../../libs/a.js'
export default {
    data(){
        return{
            num:5,
            obj:{},
            arr:[
                // {name:'小明',index:1,age:10},
                {name:'小红',index:2,age:30},
                {name:'小吃',index:2,age:90},
                {name:'小慌',index:3,age:88},
                {name:'小动',index:3,age:60},
                {name:'小绿',index:4,age:0}
            ],
            historyMap: {},
            list: [],// render
            text:[]
        }
    },
    created(){
        this._initHistoryMap();
        this.setObj();
        this._setRenderList();
        console.log(Arabia_To_SimplifiedChinese('16'))
        this.setFrist()
    },
    methods:{
        setFrist(){
        

            // let listText = ['全都不会','全都不会','html','css']
            // let arr = [];
            // listText.map(item=>{
            //     if(arr.indexOf(item) === -1){
            //         arr.push(item)
            //     }
            // })
            // console.log(arr)
             
            // listText.map((item,index)=>{
            //     if(index === 1){
            //         item = '';
            //         item = '全部都会'
                    
            //         console.log(item)
            //         debugger
            //     }
            // })
           
            // console.log(listText)
            // this.text = [...listText];
        },
        _initHistoryMap() {
            let map = {};
            for (let i = this.num - 1; i >= 1; i--) {
                map[i + ''] = {
                    index: i,
                    isFlag: false,
                    list: []
                };
            }
            this.historyMap = map;
        },
        setObj(){
            // for(let i = 1;i<this.num;i++){
            //     this.arr.map(item=>{
            //         if(item.index === i){
            //             if(this.obj[item.index]){
            //                 this.obj[item.index].list.push(item);
            //             }else{
            //                 this.obj[item.index] = {
            //                     isFlag: false,
            //                     list: []
            //                 };
            //                 this.obj[item.index].list.push(item);
            //             }
            //         }else{

            //         }
            //     })
            // }

            this.arr.map(item=>{
                this.historyMap[item.index + ''].list.push(item);
            });
        },
        _setRenderList() {
            let results = [];
            let item;
            for (let key in this.historyMap) {
                item = this.historyMap[key];
                results.unshift(item);
            }
            this.list = results;
        }
    }
}
</script>

