<template>
  <mt-header :title="headerObj.title" >
    <router-link to="/" slot="left">
      <mt-button icon="back" @click="back">{{ headerObj.back }}</mt-button>
      <span class="right" @click="login"  >
        <router-link  @click="onPopup" v-show="isCookie" :to="{path: 'reader' }" class="mui-icon mui-icon-person"> </router-link>
        <a  @click="onPopup" class="mui-icon mui-icon-person noCookie" v-show="!isCookie" > </a>
      </span>
    </router-link>
  </mt-header>
</template>
<script>
  import Cookie from "./myCookie.js"
  export default{
    data(){
      return {
          isCookie:false
      };
    },
    props:[ "headerObj" , "toChildCookie"],
    created(){
      this.login();
    },
    mounted(){
      this.login();
    },
    methods: {
        back(){
            if( this.headerObj.back !="首页" ){
              this.$router.go(-1)
            }
        },
        //判断是否存在cookie;
        login(){
          var bookCookie = Cookie.get( "myBook" );
          if( bookCookie ){
              this.isCookie=true;
          }else{
            this.isCookie=false;
          }
        },
      onPopup(){
        this.$emit( "onPopup", this.isCookie );
      }
    },
    watch:{
        //同步父数据,  不能使用isCookie直接同步 , 而要用第三方变量来同步;
      toChildCookie(){
        this.isCookie=this.toChildCookie;
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

<style scoped>
  .right{
    position: absolute;
    right:0px;
    top:0px;
    width:100px;
    height:100%;
  }
  .right a{
    position: absolute;
    top:0;
    width:100%;
    height:100%;
    box-sizing: border-box;
    padding:20px;
    padding-left:40px;
    color:#fff;
  }
</style>
