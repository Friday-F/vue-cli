export default {
    fn(){
        return new Promise(function(resolve,reject){
            setTimeout(()=>{
                return resolve('3')
            },1000)
        })
    }
}