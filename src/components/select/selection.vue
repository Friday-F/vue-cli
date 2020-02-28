<template>
    <div class="selection-component">
      <div class="selection-show" @click="toggleDrop">
        <input type="text" v-model="current" class="inp"  @input="searchCur"  placeholder="版本">
        <div :class="['arrow',{'up':isShow}]"></div>
      </div>
      <div class="selection-list" v-if="isShow">
        <ul>
          <li v-for="(item, index) in searchList" :key='index' @click="chooseSelection(item)">{{ item.label }}</li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    selections: {
      type: Array,
      default: [{
        label: 'test',
        value: 0
      }]
    }
  },
  data () {
    return {
      isShow:false,
      current:this.selections[0].label,
      searchList:[]
    }
  },
  mounted () {
    
  },
  methods: {
    toggleDrop (event) {
      event.stopPropagation()
      this.isShow = !this.isShow
      if(!this.current || !this.searchList.length){
        this.searchList = [...this.selections]
      }
    },
    chooseSelection (item) {
      this.isShow = false
      this.current = item.label
      this.$emit('on-change',item.value)
    },
    searchCur(){
      this.searchList = [];
      this.selections.map(item=>{
        if(item.label.indexOf(this.current)!==-1){
          this.searchList.push(item)
        }
      })
    }
  }
}
</script>

<style scoped>
.selection-component {
  position: relative;
  display: inline-block;
 
}
.selection-show {
  width: 140px;
  height: 32px;
  line-height: 32px;
  border-bottom:1px solid #7291a1;
  /* padding: 0 20px 0 10px; */
  display: inline-block;
  cursor: pointer;
  display: inline-block;
  background: #fff;
  font-size: 14px;
  color:#273844;
}
.selection-show .inp{
  outline: none;
  width: 100%;
  height: 100%;
}
.selection-show .arrow {
  display: inline-block;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid #7291a1;
  width: 0;
  height: 0;
  vertical-align: middle;
  position: absolute;
  top:50%;
  right:0;
  transform: translate(0,-50%);
  transition: all 0.5s;
  
}
.selection-show .up{
    transform: rotate(180deg);
    
}
.selection-list {
  display: inline-block;
  position: absolute;
  left: 0;
  top: 33px;
  width: 100%;
  background: #fff;
  border-top: 1px solid #e6e9ea;
  border-left: 1px solid #e6e9ea;
  border-right: 1px solid #e6e9ea;
  z-index: 5;
}
.selection-list li {
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-bottom:1px solid #e6e9ea;
  cursor: pointer;
  background: #fff;
  font-size: 14px;
  color:#273844;
  padding-left:21px;
  box-sizing: border-box;

}
.selection-list li:hover {
  background: #effffa;
  color:#16af7d;
}
</style>
