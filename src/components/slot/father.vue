<template>
	<div>
		<ul>
			<li class="niming">
				<h3>父组件</h3>
				<son class='son'>
					<h4>匿名插槽</h4>
					<p>如果父元素中有值,将子组件中的数据进行覆盖</p>
				</son>
			</li>
			<li>
				<h3>父组件</h3>
				<son-name class='son'>
					
					<div slot='up'>
						<h4>具名插槽1--up,根据插槽名字进行渲染到相应位置</h4>
						<span>up</span>
				        <span>up</span>
				        <span>up</span>
				        <span>up</span>
					</div>
					
					<div slot='down'>
						<h4>具名插槽2--down，根据插槽名字进行渲染到相应位置</h4>
						<span>down</span>
				        <span>down</span>
				        <span>down</span>
				        <span>down</span>
					</div>
				</son-name>
			</li>
			<li>
				<h3>父组件</h3>
				<son-data class='son'>
					<template slot-scope="list">
						<h4>作用域插槽 | 带数据的插槽</h4>
						<p>通过slot-scope="list"定义数据,<br>
							<strong>list.数据名称</strong>可以拿到子组件传给父组件的数据</p>
						<ul>
							<li v-for='item in list.data'>
								姓名：{{item.name}}，
								年龄：{{item.age}},
								性别：{{item.sex}}
							</li>
						</ul>
					</template>
				</son-data>
			</li>
		</ul>
	</div>
</template>
<script>
	import son from './niming'
	import sonName from './son-name'
	import sonData from './son-data'
	export default{
		components:{
			son,
			sonName,
			sonData
		}
	}
</script>
<style>
	h3{
		text-align: center;
		line-height: 30px;
	}
	h4{
		text-align: center;
		line-height: 30px;
	}
	p{
		color:red;
		line-height: 40px;
		text-align: center;
	}
	.son{
		background: #06c1ae;
	}
</style>