<template>
  <div>
    <div class="moreBook" v-for="item in BList " >
      <div class="top">
        <span class="borderLeft"></span>
        <h2> {{item.title}} <!-- <slot name="titleTwo"></slot> --> </h2>
      </div>
      <div class="bottom">
        <router-link v-for=" ( ite, index ) in item.list " :to="{ name: 'Details', params: { id: ite.id }}">
          <img v-bind:src="ite.images" :alt="ite.images">
          <p class="fs-bold">{{ite.name}}</p>
          <p>{{item.author}}</p>
        </router-link>
      </div>
    </div>
  </div>


</template>
<script>
  export default{
      data(){
        return{
            bookList:[],
        }
      },
      props:[ "BList" ],
      methods:{

      },
    watch:{
        BList:function(){
//          this.bookList=this.BList;
        }
      }
  }
</script>
<style scoped>
  .moreBook{
    padding:20px;
  }
    .top{
      width:100%;
      height:30px;
    }
  .borderLeft{
    width:3px;
    height:30px;
    float:left;
    background:red;
    margin-right:10px;
  }
  h2{
    line-height: 20px;
  }
  .bottom{
    display: flex;
    overflow: hidden;
  }
  .bottom a{
    flex:1;
    padding:25px;
    min-width:150px;
  }
  .bottom a img{
    width:100%;
    height:140px;
  }
  .fs-bold{
    font-weight: 700;
    color:#000;
  }
  p{
    line-height: 30px;
    font-size: 20px;
    text-align: center;
  }
</style>
