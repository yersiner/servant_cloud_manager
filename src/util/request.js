import axios from 'axios'

const devMode = false; //是否使用测试数据
/*
* axios的操作拦截
* 存在两种情况
*   1、请求拦截 request
*   2、响应拦截 response
* 成功则直接返回，交给下一步函数处理。
* 失败则直接返回一个异步对象
* */
function interceptors() {
    axios.interceptors.response.use((response)=>{
        return response;
    },(error)=>{
        return Promise.reject(error);
    })

    axios.interceptors.request.use((response)=>{
        return response;
    },(error => {
        return Promise.reject(error)
    }))
}
/*
* 请求配置，包含以下内容
* method post/get 必需
* url             必需
* data            必需
*
* 如何存在测试数据
* 测试数据的命名使用接口的最后一级目录
* */
function request(config) {
    if(!config){
        throw new Error("axios request must have a config");
    }
    if(!config.url){
        throw new Error("axios request must has a 'url' param");
    }
    let baseConfig = {
        method : "POST",
        url : '',
        data:{}
    }
    baseConfig = Object.assign(baseConfig,config);
    if(devMode){
        const rootPath = "/testData/";
        const subPath = baseConfig.url.split("/");
        baseConfig.url = rootPath + subPath[subPath.length-1] + "json";
    }
    return new Promise(resolve=>{
        axios(baseConfig).then(response=>{
            resolve(response);
        })
    })
}

export default {
    request : request,
    interceptors :interceptors
}
