<template>
    <header>
      <a href="#" class='city'>北京</a>
      <form>
        <i class="icon-search"></i>
        <input type="text" @click="search">
      </form>
      <div class="user">
        <span class="icon-user"></span>
        <p>我的</p>
      </div>
    </header>
</template>
<script>
export default {
    methods:{
      search(){
        this.$router.push({
          name:'search'
        })
      }
    }

}
</script>
<style scoped>
  header{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 50px;
    z-index: 99;
    background: #06c1ae;
  }
  .city{
    position: absolute;
    width: 50px;
    height: 50px;
    line-height: 50px;
    top:0;
    left: 0;
    text-align: center;
    color:#fff;
  }
  .user{
    position: absolute;
    width: 50px;
    height: 50px;
    top:0;
    right: 0;
    text-align: center;
    color:#fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .icon-user{
    font-size: 20px;
    margin-bottom: 4px;
  }
  .user p{
    font-size: 12px;
  }
  form{
    width: 100%;
    height: 30px;
    position: relative;
    top:50%;
    margin-top:-15px;
    padding:0 50px;
    box-sizing: border-box;
  }
  form input{
    width: 100%;
    height: 30px;
    line-height:30px;
    border-radius: 40px;
    outline: none;
    padding-left:36px;
    box-sizing: border-box;
  }
  .icon-search{
    position: absolute;
    top:6px;
    left:60px;
    color:#06c1ae;
    font-size: 18px;
  }
</style>


