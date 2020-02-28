const mutations = {
	add(state,step){
		state.num+=step
    },
    setInfo(state,newVal){
        state.dataInfo = newVal;
    }
}
export default mutations