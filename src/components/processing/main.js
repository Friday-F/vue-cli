export default{
    data(){
        return{
            currency:'btc',
            //后台返回的数据
            data:[{
                currency:'btc',
                available_amount:0.2300,
                frozen_amount:0.000
            },{
                currency:'eth',
                available_amount:20.1230,
                frozen_amount:30.890
            },{
                currency:'usdt',
                available_amount:12.000,
                frozen_amount:90.000
            }],
            balances:{
                currency:'--',
                available_amount:'--',
                frozen_amount:'--'
            }
        }
    },
    created(){
        // this.toggle()
        // this.data.map(item=>{
        //     if(item.currency === this.currency){
        //         this.balances = item;
        //     }
        // })
        this.data.filter(item=>{
            if(item.currency === this.currency){
                this.balances = item;
            }
        })
    },
    methods:{
        toggle(current){
            this.currency = current.currency
            this.balances = Object.assign({},this.balances,current)
        }
        // toggle(flag){
        //     this.isFlag = flag;
        //     this.data.map(item=>{
        //         if(item.currency === this.isFlag){
        //             this.balances = Object.assign({},this.balances,item)
        //         }
        //     })
        // }
        
    }
}