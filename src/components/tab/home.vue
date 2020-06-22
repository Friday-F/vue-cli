<template>
  <div>
    <ul>
      <li>
          <router-link to='/newlist'>新闻列表</router-link> 
      </li>
       <li>
          <router-link to='/slot'>slot插槽</router-link> 
      </li>
      <li>
          <router-link to='/vuex'>vuex</router-link> 
      </li>
      <li>
        <router-link to='/show'>展开</router-link>
      </li>
      <li>
        <router-link to='/fixed'>scroll</router-link>
      </li>
      <li>
        <router-link to='/select'>下拉列表</router-link>
      </li>
      <li>
        <router-link to="/copy">复制</router-link>
      </li>
      <li>
        <router-link to="/interactive">弹窗</router-link>
      </li>
      <li>
        <router-link to="/routerPath">router传值</router-link>
      </li>
      <li>
        <router-link to="/timer">时间控件</router-link>
      </li>
      <li>
        <router-link to="/radio">单选多选</router-link>
      </li>
      <li>
         <router-link to="/tool">工具使用</router-link>
      </li>
      <li>
         <router-link to="/switch">switch/单选/多选</router-link>
      </li>
      <li>
         <router-link to="/validator">表单校验</router-link>
      </li>
      <li>
        <router-link to="/processing">数据处理</router-link>
      </li>
      <li>
        <router-link to="/swiper">轮播图</router-link>
      </li>
      <li>
        <router-link to="/sms">发送短信-倒计时</router-link>
      </li>
      <li>
        <router-link to="/refers">刷新</router-link>
      </li>
      <li>
          <router-link to='/encryption'>数据处理</router-link>
      </li>
      <li>
          <router-link to='/offset'>位移</router-link>
      </li>
       <li>
          <router-link to='/calculation'>计算</router-link>
          
      </li>
      <li>
        <router-link to='/speed'>进度条</router-link>
      </li>
       <li>
          <router-link to='/watch'>watch监听</router-link>
      </li>
      <li>
          <router-link to='/level'>二级路由</router-link>
      </li>
      <li>
          <router-link to='/input'>Input</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      
    }
  },
  created(){
    
  }
}
</script>

<style scoped>
ul{
  overflow: hidden;
}
  li{
    width:25%;
    height: 40px;
    float: left;
    line-height: 40px;
    text-align: center;
  }
</style>
