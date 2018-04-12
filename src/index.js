import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import routes  from './routes/index'
import store from './stores/index'
import App from './App.vue'
//动态响应页面
import "./util/rem"
//重置css样式
import "./styles/normalize.css"

import fastClick from "fastclick"
fastClick.attach(document.body)

const router = new VueRouter({
    routes,
    linkActiveClass : 'active'
})

new Vue({
    el : '#root',
    router,
    store,
    render:h=>h(App)
})

