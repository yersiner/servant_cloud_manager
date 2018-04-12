/*
* 路由使用原生按需加载的形式
* return function(r){
*   return require.ensure([],function(){
*     return r(require('@@/@@/component.vue'))
*   },"chunkName")
* }
* */
//方法1 webpack的原生方式
const Index = r => require.ensure([],()=>r(require("../component/index.vue")),"index")
//方法2
const Index1 = ()=>import('../component/index.vue')

const routes = [
    {
        name : 'Index',
        path:"/",
        component : Index,
        meta:{title : 'test',auth:true}
    },{
        name : 'Index',
        path:"/index",
        component : Index1,
        meta:{title : 'test1',auth:true}
    }
]

export default routes