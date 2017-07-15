<template>
  <div>
    <v-header :headerObj=headerObj ></v-header>
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
      <button type="button" class="mui-btn mui-btn-danger ">
        <router-link class="to-reading" :to="{path:'reading',query: {book: details.id , id:1 }, params:{ id: 1 } } "></router-link>立刻阅读
      </button>
      <button type="button" class="mui-btn">加入书架</button>
    </div>
    <div class="intro">
      {{ details.intro }}
    </div>
    <div class="other">
      <p> 书友还看过 </p>
      <div class="bottom">
        <router-link v-for=" ( ite, index ) in bookList " :to="{path:'details', query:{id:ite.id}, params:{ id:ite.id } }">
          <img v-bind:src="ite.images" :alt="ite.images">
          <p class="fs-bold">{{ite.name}}</p>
          <p>{{ite.author}}</p>
        </router-link>
      </div>


    </div>
  </div>

</template>
<script>
  import axios from 'axios'
  import Header from "@/components/header.vue"

  var store = {
    debug: true,
    state: {
      authorStatus: true
    },
  }
  export default{
    data(){
      return {
        details: {},
        headerObj: {
          title: "小说详情",
          back: "返回"
        },
        authorStatus:store.state.authorStatus,
        bookList:[]
      }
    },
    components:{
      "v-header":Header
    },
    created(){
      this.getList();
      this.getbookList();
    },
    coumted(){

    },
    methods:{
      getList(){
//        http://39.108.14.248:3333/booklist?id=2
        axios.get( `${this.common.api}/booklist?id=${this.$route.query.id}` ).then( res => {
          if( res.status == 200 ){
            this.details=res.data;
//            console.log( this.details )
            this.headerObj.title=`${this.details.name}`;
          }
        })
      },
      getbookList:function(){
        axios.get(`${this.common.api}/booklist`).then( res => {
          if( res.status == 200 ){
            this.bookList=res.data;
            console.log( this.bookList );
          }
        })
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
    display: flex;
    padding:20px;
    border-bottom:1px solid #8f8f94;
  }
  .mui-btn{
    padding:20px;
    flex: 1;
    margin:0px 20px;
    font-size: 30px;
    box-sizing: border-box;
    border-radius: 20px;
  }
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
    min-width:20%;
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
</style>
