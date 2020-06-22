import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  linkActiveClass:'router-link-active',
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: resolve=>require(['@/components/tab/home'],resolve)
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component:resolve=>require(['@/components/tab/shopcar'],resolve) 
    },
    {
      path: '/setting',
      name: 'setting',
      component: resolve=>require(['@/components/tab/setting'],resolve) 
    },
    {
      path: '/person',
      name: 'person',
      component: resolve=>require(['@/components/tab/person'],resolve) 
    },
    {
      path:'/axios',
      component:resolve=>require(['@/components/axios/axios'],resolve) 
    },
    {
      path:'/newlist',
      component:resolve=>require(['@/components/new/newlist'],resolve) 
    },
    {
      path:'/slot',
      component:resolve=>require(['@/components/slot/father'],resolve) 
    },
    {
      path:'/vuex',
      component:resolve=>require(['@/components/vuex/sub'],resolve) 
    },
    {
      path:'/show',
      component:resolve=>require(['@/components/show/show'],resolve) 
    },
    {
      path:'/fixed',
      component:resolve=>require(['@/components/fixed/fixed'],resolve) 
    },
    {
      path:'/search',
      name:'search',
      component:resolve=>require(['@/components/search/index'],resolve) 
    },
    {
      path:'/select',
      component:resolve=>require(['@/components/select/index'],resolve) 
    },
    {
      path:'/copy',
      component:resolve=>require(['@/components/copy/index.vue'],resolve) 
    },
    {
      path:'/interactive',
      component:resolve=>require(['@/components/interactive/index'],resolve)
    },
    {
      path:'/routerPath',
      component:resolve=>require(['@/components/Router/index'],resolve)
    },
    {
      // path:'/info/:id',  router-link传参
      path:'/info',
      name:'info',
      component:resolve=>require(['@/components/info/index'],resolve)
    },
    {
      // path:'/info/:id',  router-link传参
      path:'/timer',
      name:'timer',
      component:resolve=>require(['@/components/timer/index'],resolve)
    },
    {
      path:'/radio',
      name:'radio',
      component:resolve=>require(['@/components/radio/index'],resolve)
    },
    {
      // path:'/info/:id',  router-link传参
      path:'/tool',
      name:'tool',
      component:resolve=>require(['@/components/tool/index'],resolve)
    },
    {
      path: '/switch',
      name: 'switch',
      component:resolve=>require(['@/components/Switch/index'],resolve)
    },
    {
      path: '/validator',
      name: 'validator',
      component:resolve=>require(['@/components/Validator/index'],resolve)
    },
    {
      path: '/swiper',
      name: 'swiper',
      component:resolve=>require(['@/components/swiper/index'],resolve)
    },
    {
      path: '/sms',
      name: 'sms',
      component:resolve=>require(['@/components/sms/index'],resolve)
    },
    {
        path: '/processing',
        name: 'processing',
        component:resolve=>require(['@/components/processing/index'],resolve)
      },
    {
        path: '/refers',
        name: 'refers',
        component:resolve=>require(['@/components/refers/index'],resolve)
    },
    {
        path: '/encryption',
        name: 'encryption',
        component:resolve=>require(['@/components/encryption/index'],resolve)
    },
    {
      path:'/offset',
      name:'offset',
      component:(resolve)=>require(['@/components/offset/index'],resolve)
    },
    {
      path:'/calculation',
      name:"calculation",
      component:resolve=>require(['@/components/Calculation/index'],resolve)
    },
    {
        path:'/speed',
        name:'speed',
        component:(resolve)=>require(['@/components/speed/index'],resolve)
      },
      {
        path:'/watch',
        name:'watch',
        component:(resolve)=>require(['@/components/watch/index'],resolve)
      },
      {
        path:'/event-bus',
        name:'event-bus',
        component:(resolve)=>require(['@/components/eventBus/index'],resolve)
      },
      {
        path:'/global-event-bus',
        name:'global-event-bus',
        component:(resolve)=>require(['@/components/eventBus/global.vue'],resolve)
      },
      {
        path:'/pay',
        name:'pay',
        component:(resolve)=>require(['@/components/pay/index.vue'],resolve)
      },
      {
        path:'/table',
        name:'table',
        component:(resolve)=>require(['@/components/table/index.vue'],resolve)
      },
      {
        path:'/input',
        name:'Input',
        component:(resolve)=>require(['@/components/Input/index.vue'],resolve)
      },
      {
          path:'/level',
          name:'level',
          component:(resolve)=>require(['@/components/second/index'],resolve),
          redirect:{
              name:'firstPage'
            },
          children:[
            {
                path:"first-level",
                name:'firstPage',
                component:(resolve)=>require(['@/components/second/firstPage/index'],resolve),
            },
            {
                path:"second-level",
                name:'secondPage',
                component:(resolve)=>require(['@/components/second/secondPage/index'],resolve), 
            }

          ]
      }
  ]
})
