<template>
  <section>
        <div class="mui-input-row mui-search search-box">
          <span class="mui-icon mui-icon-search spanSearch">搜索</span>
          <input type="search" class="mui-input-clear" placeholder="">
        </div>
  </section>
</template>
<style scoped>
  .search-box{
    position: relative;
    padding:10px;
  }
  .search-box input{
    height:50px;
    padding-left:80px;
    font-size: 35px;
  }
  .search{
    display: block;
    height:50px;
    box-shadow: 1px 1px 1px 1px #888888;
    text-align: center;
    line-height: 50px;
    text-decoration: none;
  }
  .spanSearch{
    position: absolute;
    top:50%;
    left:10px;
    transform: translateY( -70%);
  }
</style>
