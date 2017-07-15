<template>
  <div id="pageQuiButton">
    <!--将 "确定"通过msg传到子组件,  达到更改当前组件的html值;-->
    <!--监听: 将子组件祖册的点击事件函数拿过来, 作为父监听的注册函数, 并给父一个添加一个函数;-->
    <!--这时候, 可以调用一个组件做不同的事情了;-->
    <qui-btn @btnClickEvent="doSth" msg="确定" class="small">
      <!--slot 传一个图标进去    也可以传任意 dom进去-->
      <img slot="icon" src="../assets/img/logo.png" alt="logo.png" class="ico">
    </qui-btn>
    <qui-btn @btnClickEvent="doSth2" msg="取消" class="small"></qui-btn>
  </div>
</template>

<script>
  //引用按钮组件
  import quiBtn from "../components/quiButton.vue"
  export default{
      name:"pageQuiButton",
    components:{
          //注册组件;
          "qui-btn":quiBtn
    },
    methods:{
          //用同一个组件, 做不同的事情;
      doSth:function( str ){
          alert(str+".....你点击了父组件的click: btnClickEvent");
      },
      doSth2:function( str ){
        alert(str+".....你点击了父组件2的click: btnClickEvent");
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
