const getters = {
	info(state){
		return state.num%2==0?'偶数':'基数'
	}
}
export default getters