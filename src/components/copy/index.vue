<template>
    <div class="ni">
        <input type="text" v-model="copyContent"  id="copy_text" class="inp">
        <button class="tag-read" ref="copy"  data-clipboard-action="copy" data-clipboard-target="#copy_text" @click="copy">复制</button>

    </div>
</template>
<script>
import Clipboard from 'clipboard';
//import add from './index.js'

export default {
    data(){
        return{
            copyContent:'',
        }
    },
    created(){
        

    },
    methods:{
        btn() {
            //console.log(add.add(1,2))
        },
        copy () {
            var clipboard = new Clipboard('.tag-read', {
                text() {
                    return this.copyContent;
                }
            });
            clipboard.on('success', function () {
                alert('复制成功')
                clipboard.destroy()

            })
            clipboard.on('error', function () {
                alert('复制失败，请手动复制')
                clipboard.destroy()

            })
        }

    }
}
</script>
<style scoped>
.inp{
    border:1px solid #f40;
    outline: none;
}
</style>


