const actions = {
    setNumber({commit},payload){
        setTimeout(()=>{
            commit('add',payload)
        },3000)
    }
}
export default actions