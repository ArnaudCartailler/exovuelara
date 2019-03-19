import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Vue.component('Home', require('.././components/Home.vue').default),
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/costmanagement',
        name: 'costmanagement',
        component: Vue.component('CostManagement', require('.././components/CostManagement.vue').default),
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/settings',
        name: 'settings',
        component: Vue.component('Settings', require('.././components/Settings.vue').default),
        meta: {
            requiresAuth: true,
        }
    },
    // {
    //     path: '/logout',
    //     name: 'logout',
    //     component: Vue.component('Logout', require('.././components/login/Logout.vue').default),
    //     meta: {
    //         requiresAuth: true,
    //         breadcrumb: '_/logout'
    //     }

    // }
    // {
    //     path: '/forgottenpassword',
    //     name: 'forgottenpassword',
    //     component: Vue.component('ForgottenPassword', require('../components/ForgottenPassword.vue').default),
    //     meta: {
    //         requiresAuth: true,
    //     }
    // }
]

const router = new VueRouter({
    routes: routes, // short for `routes: routes`
    hashbang: false,
    mode: 'history'
})

// router.beforeEach((to, from, next) => {

//     if (to.matched.some(record => record.meta.requiresAuth)) {

//         axios.get('/api/user/isLoggedIn')
//             .then((res) => {

//                 if (res.data.success) {

//                     next();
//                 } else {

//                     next({
//                         path: '/login',
//                         params: {
//                             nextUrl: to.fullPath
//                         }
//                     })
//                 }

//             })

//     } else {
//         next();
//     }
// });

export default router;
