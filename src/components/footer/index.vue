<template>
     <footer>
      <ul>
        <li class="home">
          <router-link to='/home'>
            <!-- <i class="icon-home"></i> -->
            <p>首页</p>
          </router-link>
        </li>
        <li class="shopcar">
          <router-link to='/shopcar'>
           <!--  <i class="icon-cart"></i> -->
            <p>购物车</p>
          </router-link>
        </li>
        <li class="person">
          <router-link to='/person'>
            <!-- <i class="icon-users"></i> -->
            <p>用户</p>
          </router-link>
        </li>
        <li class="setting">
          <router-link to='/setting'>
            <!-- <i class="icon-paragraph-center"></i> -->
            <p>设置</p>
          </router-link>
        </li>
      </ul>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style scoped>
 footer{
    position: fixed;
    bottom:0;
    left:0;
    width: 100%;
    height:50px;
    background: #f6f6f6;
  }
  footer ul{
    overflow: hidden;
    height:50px;
    display: flex;
    align-items: center;
  }
  footer ul li{
    width: 25%;
    height: 50px;
    line-height: 50px;
    color:#fff;
    text-align: center;

  }
  footer ul li a{
    display: block;
    width: 100%;
    height: 100%;
    color:#c2cfcc;
  }
  footer ul li i{
    font-size: 18px;

  }
  footer ul .home a{
    background: url(../../assets/img/home.png) no-repeat center 4px;
    background-size:20px 20px;
  }
  footer ul .home .router-link-active{
    background-image:url(../../assets/img/homeact.png);
  }
  footer ul .shopcar a{
    background: url(../../assets/img/shopcar.png) no-repeat center 4px;
    background-size:20px 20px;
  }
  footer ul .shopcar .router-link-active{
    background-image:url(../../assets/img/shopcaract.png);
  }
  footer ul .person a{
    background: url(../../assets/img/person.png) no-repeat center 4px;
    background-size:20px 20px;
  }
  footer ul .person .router-link-active{
    background-image:url(../../assets/img/pesonact.png);
  }
  footer ul .setting a{
    background: url(../../assets/img/setting.png) no-repeat center 4px;
    background-size:20px 20px;
  }
  footer ul .setting .router-link-active{
    background-image:url(../../assets/img/settingact.png);
  }
  footer ul li p{
    font-size: 14px;
    margin-top: 6px;
  }
  .router-link-active{
    color:#06c1ae;
  }

</style>


