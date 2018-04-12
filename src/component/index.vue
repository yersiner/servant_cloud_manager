<template>
    <div class="index_box">
        <Shares></Shares>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import Shares from "../common/shares.vue"
    export default {
       data(){
           return{

           }
       },
        components:{Shares}
    }

</script>
<style lang="scss" scoped>
 .test_button{
     display: block;
 }
</style>