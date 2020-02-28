<template>
	<div>
		<input type="button" value="筛选" name="" @click='shaixuan'>
		<div class="mask" v-show='ismask' @click='iszhe'></div>
		<ul :class='{show:isshow}'>
			<li v-for='(item,index) in list' :class='{act:flag==index}' :key=index @click='btn(index)'>{{item}}</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				list:['all','1-10','20-30','30-40'],
				flag:0,
				ismask:false,
				isshow:false
			}
		},
		methods:{
			btn(index){
				console.log(index)
				this.flag = index
				this.ismask = false
				this.isshow = false
			},
			shaixuan(){
				this.ismask = true
				this.isshow = true
			},
			iszhe(){
				this.ismask = false
				this.isshow = false
			}
		}
	}
</script>
<style scoped>
.mask{
	width: 100%;
	height: 100%;
	position: fixed;
	top:0;
	left:0;
	background: rgba(0,0,0,.3);
}
	ul{
		width: 230px;
		height: 100%;
		padding-right:10px;
		box-sizing: border-box;
		background: #fff;
		position: absolute;
		left:-230px;
		top:0;
		padding-top:50px;
		transition: all 0.4s; 
	}
	ul.show{
		left:0;
	}
	ul li{
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #ccc;
		padding-left:20px;
	}
	ul li.act{
		border-left:2px solid #f40;
		color:#f40;
	}
</style>
