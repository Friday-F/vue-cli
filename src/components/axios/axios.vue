<template>
  <div>
    <input type="button" value="get方式" @click='methodget'>
    <input type="button" value="post方式" @click='methodpost'>
  </div>
</template>
<script>
import axios from 'axios'
  export default{
    methods:{
      methodget(){
        axios.get('./1.php',
          {params:{id:1}},
          {
             headers:{token:'tom'}
          })
        .then(res=>{
          console.log(res)
        })
      },
      methodpost(){
        axios.post('./2.php',
          {pid:2},
          {headers:{token:'juck'}
        }).then(res=>{
          console.log(res)
        })
      }
    }
  }
</script>
