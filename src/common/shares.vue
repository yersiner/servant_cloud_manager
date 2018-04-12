<template>
    <div class="markdown">
        <div class="bdsharebuttonbox shares">
            <div class="item">
                <a href="#" class="bds_weixin" data-cmd="weixin"></a>
                <span>微信</span>
            </div>
            <div class="item">
                <a href="#" class="bds_qzone" data-cmd="qzone"></a>
                <span>QQ空间</span>
            </div>
            <div class="item">
                <a href="#" class="bds_tsina" data-cmd="tsina"></a>
                <span>新浪微博</span>
            </div>
            <div class="item">
                <a href="#" class="bds_sqq" data-cmd="sqq"></a>
                <span>QQ好友</span>
            </div>
        </div>
    </div>
</template>
<script>
 export default {
     name : "shares",
     data(){
         return{

         }
     },
     mounted(){
         window._bd_share_config = {
             "common": {
                 "bdSnsKey": {},
                 "bdText": "",
                 "bdMini": "2",
                 "bdPic": "",
                 "bdStyle": "0",
                 "bdSize": "32"
             },
             "share": {},
             "image": {
                 "viewList": ["qzone", "tsina", "tqq", "renren", "weixin"],
                 "viewText": "分享到：",
                 "viewSize": "16"
             },
             "selectShare": {
                 "bdContainerClass": null,
                 "bdSelectMiniList": ["qzone", "tsina", "tqq", "renren", "weixin"]
             }
         };
         (document.getElementsByTagName('head')[0] || document.body).appendChild(document.createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5);
     }
 }
</script>
<style lang="scss" scoped="">
    @import "../styles/public";
.markdown{
    position: fixed;
    z-index: 10000;
    top:0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.2);
}
.shares{
    display:flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: white;
    padding: get_size(40) 0;
    .item{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        span{
            font-size:0.24rem;
            color: $dark_black;
            margin-left: 26px;
            margin-top: 5px;
        }
    }
    a{
        margin-left: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

</style>