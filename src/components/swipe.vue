<template>
  <div class="swipeHeight">
  <mt-swipe :auto="4000">
      <mt-swipe-item > <img src="../assets/img/3.jpg" alt="3.jpg"> </mt-swipe-item>
      <mt-swipe-item > <img src="../assets/img/4.jpg" alt="4.jpg"> </mt-swipe-item>
      <mt-swipe-item > <img src="../assets/img/5.jpg" alt="5.jpg"> </mt-swipe-item>
  </mt-swipe>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        swipeHeight:200
      };
    },
    mounted:function(){
    },
    methods:{
    },
  }
</script>

<style>
  .mint-swipe{
    width:100%;
    height:100%;
    main-height:200px;
  }
  .mint-swipe img{
    width:100%;
    height:100%;
    min-height: 200px;
  }

  /*大屏幕*/
  @media screen and (min-width: 1200px){
    .swipeHeight{
      height:500px;
    }
  }
  /*中等屏幕 992-1199*/
  @media screen and (min-width: 992px) and (max-width: 1199px){
    .swipeHeight{
      height:350px;
    }
  }

  /*小屏幕 pad */
  @media screen and (min-width: 768px)  and (max-width: 991px){
    .swipeHeight{
      height:300px;
    }
  }

  /*手机屏幕*/
  @media screen  and (max-width: 767px){
    .swipeHeight{
      height:200px;
    }
  }
</style>
