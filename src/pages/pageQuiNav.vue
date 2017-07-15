<template>
  <div id="pageQuiButton">
    <qui-nav @navClickEvent="navC" msg="确定" class="small">
      <img slot="icon" src="../assets/img/logo.png" alt="logo.png" class="ico">
    </qui-nav>
  </div>
</template>

<script>
  //引用按钮组件
  import quiNav from "../components/quiNav.vue"
  export default{
    name:"pageQuiNav",
    components:{
      //注册组件;
      "qui-nav":quiNav
    },
    methods:{
      //用同一个组件, 做不同的事情;
      navC:function( obj ){
          console.log( obj.items );
      }
    }
  }
</script>

<style scoped>
  .ico{
    width:10px;
    height: 10px;
  }
</style>
