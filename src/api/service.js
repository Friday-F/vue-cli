import fetch from './ajax'
export default{
    getBannerList(params){
        return fetch.get('/api/getlunbo',params)
    },
    getNewList(params){
        return fetch.get(`api/getcomments/${params.id}?pageindex=${params.page}`)
    }

}