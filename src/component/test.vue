<template>
    <div class="text_box">
        {{text}}
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
       method : {

       }
    }

</script>
<style lang="scss" scoped>

</style>