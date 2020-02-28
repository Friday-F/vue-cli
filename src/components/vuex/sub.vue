<template>
	<div>
		{{num}} <br>
		偶数：{{info}} <br>
		<input type="button" value="加" @click='btnAdd'>
        <button @click="actionBtn"></button>

		
	</div>
</template>
<script>
	import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
	export default{
		data(){
			return{

			}
		},
		methods:{
            actionBtn(){
                
                this.setNumber(5)
            },
			btnAdd(){
                // this.add(1)
                 this.$store.commit('add',1)
            },
            ...mapActions(['setNumber'])
			// ...mapMutations(['add'])
		},
		computed:{
			...mapState(['num']),
			...mapGetters(['info'])
		}
	}
</script>