<template>
	<div>
		<slot :data='list'></slot>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				list:[
				{'name':'小明','age':18,'sex':'男'},
				{'name':'小红','age':20,'sex':'女'},
				{'name':'小懒','age':28,'sex':'女'},
				{'name':'小绿','age':10,'sex':'男'}
				]
			}
		}
	}
</script>