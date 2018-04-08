/*
* 路由使用原生按需加载的形式
* return function(r){
*   return require.ensure([],function(){
*     return r(require('@@/@@/component.vue'))
*   },"chunkName")
* }
* */
//方法1 webpack的原生方式
const Test = r => require.ensure([],()=>r(require("../component/test.vue")),"test")
//方法2
const Test1 = ()=>import('../component/test.vue')

const routes = [
    {
        name : 'test',
        path:"/",
        component : Test,
        meta:{title : 'test',auth:true}
    },{
        name : 'test1',
        path:"/test1",
        component : Test1,
        meta:{title : 'test1',auth:true}
    }
]

export default routes