<template>
  <mt-header :title="headerObj.title">
    <router-link to="/" slot="left">
      <mt-button icon="back" @click="back">{{ headerObj.back }}</mt-button>
    </router-link>
  </mt-header>
</template>
<script>
  export default{
    data(){
      return {
      };
    },
    props:[ "headerObj" ],
    created(){

    },
    mounted(){
//      this.setClick();
//      http://39.108.14.248:3333/book?book=1&id=1
    },
    methods: {
        back(){
            if( this.headerObj.back !="首页" ){
              this.$router.go(-1)
            }
        }
      }
  }
</script>
<style>
  .mint-header{
    box-shadow: 1px 1px 1px 1px #888888;
    height:60px;
    font-size: 30px;
  }
  .mintui-back{
    font-size: 30px;
  }
</style>
