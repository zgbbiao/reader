<template>
  <mt-swipe :auto="4000">
    <mt-swipe-item> <img src="../assets/img/3.jpg" alt="3.jpg"> </mt-swipe-item>
    <mt-swipe-item> <img src="../assets/img/4.jpg" alt="4.jpg"> </mt-swipe-item>
    <mt-swipe-item> <img src="../assets/img/5.jpg" alt="5.jpg"> </mt-swipe-item>
  </mt-swipe>
</template>
<script>
  export default{
    data(){
      return {
        swipeHeight:300
      };
    },
    mounted:function(){
        this.setSwipeWidth()
    },
    methods:{
        setSwipeWidth(){
          var mintSwipe= document.querySelector(".mint-swipe");
          var mintSwipeImg= document.querySelector(".mint-swipe img");
          mintSwipeImg.style.height=this.swipeHeight+"px";
          this.swipeHeight= this.swipeHeight || mintSwipeImg.height;
          mintSwipe.style.height=this.swipeHeight+"px";
          mintSwipeImg.height=this.swipeHeight+"px";
        }
    }
  }
</script>

<style>
  .mint-swipe{
    width:100%;
    height:200px;
  }
  .mint-swipe img{
    width:100%;
  }
</style>
