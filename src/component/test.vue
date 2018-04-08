<template>
    <div class="test_box">
        {{text}}
        <button class="test_button" @click="changeHTML">点我</button>
    </div>
</template>
<script>
import {mapState} from 'vuex'
    export default {
       data(){
           return{

           }
       },
       computed :mapState(["text"]),//数组 对象
       methods: {
           changeHTML(e){
               console.log(this)
               this.$store.dispatch("changText","我是点击事件")
           }
       }
    }

</script>
<style lang="scss" scoped>
 .test_button{
     display: block;
 }
</style>