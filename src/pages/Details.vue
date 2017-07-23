<template>
  <div>
    <v-header :headerObj=headerObj >
    </v-header>
    <span class="badge">{{badge}}</span>
    <!--书的详情-->
      <div class="bookDetails">
        <img :src="details.images" alt="">
        <div class="book-right">
          <h1>{{details.name}}</h1>
          <p>{{details.author}} <span class="authorStatus" :class="{authorRed: authorStatus }">{{ details.wordcount | authorFilter }}</span> </p>
          <p> {{details.ratings}} 评分</p>
          <p>{{details.type}}  {{details.serialize}}</p>
        </div>
      </div>
    <div class="btn-box">
      <!--<button type="button" class="mui-btn mui-btn-danger ">-->
        <!--:to="{ name: 'Reading', params: { id: ite.id }}-->
        <router-link class="to-reading" :to="{name:'Reading', params: {book: details.id , id:1 }} " size="large">
          <Button type="primary" shape="circle" size="large" class="mui-btn">立刻阅读
          </Button>

        </router-link>
      <!--</button>-->
      <a >
        <Button type="primary" shape="circle" size="large" class="addBookrack mui-btn" @click="addBookrack">  加入书架    </Button>
      </a>



      <!--<button type="button" class="mui-btn addBookrack" @click="addBookrack">加入书架</button>-->
    </div>
    <div class="intro">
      {{ details.intro }}
    </div>
    <!--书的详情end-->

    <!--推荐书-->
    <div class="other">
      <p> 书友还看过 </p>
      <div class="bottom">
        <router-link v-for=" ( ite, index ) in bookList " :to="{name:'Details', params:{id:ite.id} }">
          <img v-bind:src="ite.images" :alt="ite.images">
          <p class="fs-bold">{{ite.name}}</p>
          <p>{{ite.author}}</p>
        </router-link>
      </div>
      <!--推荐书end-->

    </div>
  </div>

</template>
<script>
  import axios from 'axios'
  import Header from "@/components/header.vue"
  import { setVal, getAllBookNum, getVal } from "@/components/getBook.js"
  //使用store 共享数据;
  var store = {
    debug: true,
    state: {
      authorStatus: true
    },
  }
  export default{
    data(){
      return {
          //小说详情数据
        details: {},
        headerObj: {
          title: "小说详情",
          back: "返回"
        },
        //作者等级的状态(如:大神)
        authorStatus:store.state.authorStatus,
        bookList:[],
        //书架数量;
        badge:0
      }
    },
    components:{
      "v-header":Header
    },
    created(){
      this.getList( this.$route.params.id );
      this.getbookList(  );
      this.getAllBook();
    },
    mounted(){
    },
    methods:{
        //获取书详情
      getList( id ){
//        http://39.108.14.248:3333/booklist?id=2
        axios.get( `${this.common.api}/booklist?id=${id}`
		).then( res => {
          if( res.status == 200 ){
            this.details=res.data;
//            console.log( this.details )
            this.headerObj.title=`${this.details.name}`;
          }
        })
      },
      //获取所有书籍;
      getbookList:function(){
        axios.get(`${this.common.api}/booklist`).then( res => {
          if( res.status == 200 ){
            this.bookList=res.data;
//            console.log( this.bookList );
          }
        })
      },
//      加入书架, 加入本地localstorage;
      addBookrack(){
          if(  getVal( this.details.id )== "1"  ){
              alert("该书已经被加入书架");
          }
            setVal(this.details.id, 1);
            this.badge=getAllBookNum();
      },
      getAllBook(){
        this.badge=getAllBookNum();
      }
    },
    filters:{
      authorFilter( wordcount ){
        if( wordcount <= 80){
            return "签约作者"
        }else{
          store.state.authorStatus=true;
            return "大神";
        }
      }
    },
    watch: {
      //监听路由，点击底部喜欢的书籍路由会改变，重新获取数据
      $route(to , from) {
          //调用获取数据;
        this.getList(to.params.id)
      }
    }
  }
</script>
<style scoped>
  .bookDetails{
    padding:20px;
  }
  .bookDetails img{
    float:left;
    width:150px;
    height:200px;
  }
  .bookDetails .book-right{
    overflow: hidden;
  }
  .bookDetails .book-right h1{
    padding:10px 0px 0px 10px;
  }
  .bookDetails .book-right p{
    font-size: 25px;
    padding:10px 20px;
  }
  .authorRed {
    background: rgba(200, 0, 0, .7);
    border-radius: 10px;
    color: #fff;
  }
  .btn-box{
    display: block;
    padding:20px;
    border-bottom:1px solid #8f8f94;
  }
  .btn-box>a {
    /*padding: 20px;*/
    width:45%;
    display: inline-block;
    /*margin: 0px 20px;*/
    font-size: 22px;
    box-sizing: border-box;
    /*border-radius: 20px;*/
    height:60px;
  }
  .btn-box>a .mui-btn {
    width:100%;
    height:100%;
    font-size: 22px;
  }

  /*.mui-btn a, .mui-btn span{*/
    /*display: block;*/
    /*width: 100%;*/
    /*height: 100%;*/
  /*}*/
  .intro{
    font-size: 30px;
    line-height: 45px;
    text-indent: 2em;
    padding: 20px 20px;
    border-bottom:1px solid #777777;
  }
  .other{
    padding:20px;
  }
  .other p{
    line-height: 50px;
    font-size: 40px;
    font-weight: 700;
    color:#000;
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
  .bottom p {
    line-height: 30px;
    font-size: 20px;
    text-align: center;
  }
  .mui-btn-danger{
    position: relative;
  }
  .mui-btn-danger .to-reading{
      position: absolute;
    top:0;
    left:0;
    width:100%;
      height:100%;
  }

  .badge{
    position: absolute;
    right:5px;
    top:5px;
    width: 30px;
    height: 30px;
    background:rgba(150, 0 , 0, .5);
    border-radius: 50%;
    color:#fff;
    text-align: center;
    line-height: 30px;
  }


</style>
