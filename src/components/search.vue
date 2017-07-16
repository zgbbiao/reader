<template>
  <section>
        <!--<div class="mui-input-row mui-search search-box">-->
          <!--<span class="mui-icon mui-icon-search spanSearch">搜索</span>-->
          <!--<input type="search" class="mui-input-clear" placeholder="">-->
        <!--</div>-->
    <mt-search
      cancel-text="取消"
      placeholder="搜索">
    </mt-search>
  </section>
</template>
<style scoped>
  section{
    margin:20px 0;
    height:50px;
  }
  .mint-search{
    height: 100%;
  }


  /*.search-box{*/
    /*position: relative;*/
    /*padding:10px;*/
  /*}*/
  /*.search-box input{*/
    /*height:50px;*/
    /*padding-left:80px;*/
    /*font-size: 35px;*/
  /*}*/
  /*.search{*/
    /*display: block;*/
    /*height:50px;*/
    /*box-shadow: 1px 1px 1px 1px #888888;*/
    /*text-align: center;*/
    /*line-height: 50px;*/
    /*text-decoration: none;*/
  /*}*/
  /*.spanSearch{*/
    /*position: absolute;*/
    /*top:50%;*/
    /*left:10px;*/
    /*transform: translateY( -70%);*/
  /*}*/
</style>

<style>
  .mint-searchbar div.mint-searchbar-inner{
    background:transparent ;
  }
  input.mint-searchbar-core{
    background:#e0e0e0;
  }
</style>
