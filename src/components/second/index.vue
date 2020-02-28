<template>
    <div class="second-content">
        <nav class="nav">
            <ul>
                <li>
                    <router-link class="second-nav" to='/level/first-level'>第一个导航</router-link>
                </li>
                <li>
                    <router-link class="second-nav" to='/level/second-level'>第二个导航</router-link>
                </li>
            </ul>
        </nav>
        <div class="main">
            <div class="main-content">
                <router-view></router-view>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .second-content{
        display: flex;
    }
    .nav{
        width: 260px;
        
    }
    .second-nav{
        height: 48px;
        line-height: 48px;
        color:#2f3d45;
        border-bottom:1px solid #ccc;
        padding-left:20px;
        box-sizing: border-box;
        display: block;
    }
    .second-nav.router-link-active{
        color:#00b07c;
    }
    .main{
        flex:1;
    }
    .main-content{
        width: 960px;
        margin:0 auto;
    }
</style>


