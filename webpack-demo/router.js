import Vue from 'vue'
//导入登录组件login1
import login1 from './login.vue'
import account from './Account.vue'
import goodslist from './GoodsList.vue'
import register from './register.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)



var router = new VueRouter({

    routes: [{
            path: '/account',
            component: account,
            children: [
                { path: 'login', component: login1 },
                { path: 'register', component: register }

            ]
        },
        { path: '/goodslist', component: goodslist }
    ]
});

//把路由对象暴露出去
export default router