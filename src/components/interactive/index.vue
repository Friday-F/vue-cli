<template>
<div>
      <ul>
        <li @click="showAlert">alert弹窗</li>
        <li @click="showConfirm">confirm</li>
        <li @click="showModal">模态框</li>
        <li @click="successTip">成功提示</li>
    </ul>
    <div class="modal" v-show="isModal">
        <modal :title='modalTitle' :on-hide='hideModal'>
            <div class="content" slot="content">
                内容区域
            </div>
            <div class="footer" slot="footer">
                <button type="submit"
                            class="ui-btn ui-btn--default"
                            @click="hideModal">取消</button>
                    <button type="submit"
                            class="ui-btn"
                            @click="submit">确定</button>
            </div>
        </modal>
    </div>
    <br>
    <h4>说明：</h4>
    <p>1.需要下载npm i html-loader</p>
    <p>2.在main.js中引入</p>
    <p>3.在build文件--webpack.base.conf.js中添加<br>
        {
            test: /\.html$/,
            loader: 'html-loader'
        }
      </p>
</div>
  
</template>
<script>
import modal from '../common/Modal'
import Snackbar from '../common/Snackbar/Snackbar.js'
export default {
    data(){
        return{
            isModal:false,
            modalTitle:'模态框头部'
        }
    },
    components:{
        modal
    },
    methods:{
        showAlert(){
            this.$alert({
                title:"头部",
                content:'内部',
                btnText:'确定',
                callback:()=>{
                    console.log('alert成功')
                }
            })
        },
        showConfirm(){
            this.$confirm({
                title:"头部",
                content:"内容",
                confirmText:"确定",
                cancelText:'取消',
                onConfirm:()=>{
                    console.log('确认的回调')
                },
                onCancel:()=>{
                    console.log('取消的回调')
                }
            })
        },
        showModal(){
            this.isModal = true
        },
        hideModal(){
            this.isModal = false
        },
        submit(){
            console.log('确认')
            this.isModal = false
        },
        successTip(){
            // window.success({
            //     content:"成功提示",
            //     callback(){
            //         console.log('成功的回调')
            //     }
            // })
            // Snackbar({
            //     type:"success",
            //     content:"成功提示",
            //     callback(){
            //         console.log('成功的回调')
            //     }
            // })
            Snackbar('你好吗')

        }
    }
}
</script>
<style scoped>
    ul{
        display: flex;
    }
    li{
        flex:1;
        margin:0 8px;
        text-align: center;
        line-height: 40px;
        background: #00b07c;
        color:#fff;
    }
    p{
        margin-top: 10px;
        line-height: 30px;
    }
</style>



