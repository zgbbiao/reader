<template>
  <div class="reading">
    <v-header :headerObj=headerObj ></v-header>
    <h1>{{ bookList.bookName }}</h1>
    <h2> {{ bookList.title }} </h2>
    <div class="content" v-html="bookList.content">
    </div>
    <div class="reading-bottom">
      <router-link  :to="{ name: 'Reading', params: {book: this.$route.params.book , id:subtractId }}">
        上一页
      </router-link>
      <router-link  :to="{ name: 'Reading', params: {book: this.$route.params.book , id:addId }  }">
        下一页
      </router-link>
    </div>
  </div>
</template>
<script>
  import axios from "axios";
  import Header from "@/components/header.vue"
  export default{
      data(){
          return{
            bookList:{},
            headerObj: {
              title: "阅读中",
              back: "返回"
            },
            subtractId:1,
            addId:1
          }
      },
    created(){
          this.getbookList( this.$route.params.id );
          this.setBookId();
    },
      methods:{
        getbookList:function( id ){
          axios.get(`${this.common.api}/book?book=${this.$route.params.book}&id=${id}`
		  ).then( res => {
            if( res.status == 200 ){
              this.bookList=res.data;
//              console.log( this.bookList )
              var arr = this.bookList.content.split("。");
             arr= arr.map( function( item ){
                return "<spam class='p1'>"+item+"。</spam></br>";
              } )
              this.bookList.content=arr.join("");
            }
          })
        },
        setBookId(){
          this.addId = this.subtractId = parseInt( this.$route.params.id );
          this.subtractId = this.subtractId>=2 ? this.subtractId-1 : 1;
          this.addId++;
        }
      },
    components:{
      "v-header":Header
    },
    watch: {
      //监听路由，点击底部喜欢的书籍路由会改变，重新获取数据
      $route(to, from) {
        this.getbookList(to.params.id);
        this.setBookId();
      },
    }

  }
</script>
<style scoped>
    html,body{
      width:100%;
      height:100%;
      min-height: 100px;
    }
    .reading{
      /*position: relative;*/
      padding:20px;
      background:	#DEB887;
      width:100%;
      height:100%;
    }
    .mint-header{
      background:	#DEB887;
    }
  .reading h1{
    padding:20px;
    text-align: center;
  }
  .content{
    font-size: 25px;
    line-height: 40px;
    text-indent: 2em;
    font:AcadEref;
  }
    .p1{
      font-size: 25px;
      line-height: 40px;
      text-indent: 2em;
      color:red;
    }
  .reading-bottom{
    position: fixed;
    /*display: flex;*/
    width:100%;
    bottom:0;
    padding:20px;
    padding-bottom:0;
  }
    .reading-bottom a{
      display: inline-block;
      width:40%;
      padding:20px;
      box-sizing: border-box;
      line-height: 18px;
      font-size: 16px;
      background:#DEB887;
      border-radius: 30px;
      margin-right:30px;
      text-align: center;
      border: 1px solid #6d6d72;
      color:#fff;
    }

</style>
