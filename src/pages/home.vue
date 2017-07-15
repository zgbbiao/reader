<template>
  <div>
    <v-header :headerObj="headerObj" @onPopup="onCookie" :toChildCookie="toChildCookie">
    </v-header>
    <swipe></swipe>
    <search></search>
    <div class="book-nav-box">
      <router-link
        class="guide-nav-div"
        v-for="(item,index) in bookNav"
        :to="{path:'category',query: {type: item.num}}"
        :key="item.num"
        @click="openBookCategory(item.num)">
        <i class=""></i>
        <h2 class="guide-nav-h">{{item.word}}</h2>
      </router-link>
    </div>
    <div class="banner02">
      <img src="//qidian.qpic.cn/qidian_common/349573/1366cef51c6193f45f45beb3d219d3a6/0" class="home-pure-ad-img" alt="广告">
    </div>
    <hotBook :BList=allList ></hotBook>
    <div class="PopupLogin" >
      <mt-popup
        v-model="popupVisible">
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>用户名</label>
            <input type="text" class="mui-input-clear userName" placeholder="请输入用户名">
          </div>
          <div class="mui-input-row">
            <label>密码</label>
            <input type="password" class="mui-input-password userpassword" placeholder="请输入密码">
          </div>
          <div class="mui-button-row">
            <button type="button" class="mui-btn mui-btn-primary " @click="userLogin" >确认</button>
          </div>
        </form>
      </mt-popup>
    </div>
  </div>
</template>
<script>
  import header from "@/components/header.vue"
  import Swipe from "@/components/swipe.vue"
  import Search from "@/components/search.vue"
  import hotBook from "@/components/hotBook.vue"
  import axios from 'axios'
  import Cookie from "@/components/myCookie.js";
  export default{
    data(){
      return {
        bookNav: [
          {
            num: 1,
            word: '玄幻'
          },
          {
            num: 2,
            word: '修真'
          },
          {
            num: 3,
            word: '都市'
          },
          {
            num: 4,
            word: '历史'
          },
          {
            num: 5,
            word: '游戏'
          }
        ],
        bookList:[],
        privateState:{},
        allList:[],
        headerObj: {
          title: "小说坊",
          back: "首页"
        },
        isCookie:false,
        popupVisible:false,
        toChildCookie:false
      };
    },
    created(){
      this.getbookList();
    },
    mounted(){

    },
    methods:{
      back(){
          window.localhost.history.back()
      },
      getbookList:function(){
        axios.get(`${this.common.api}/booklist`).then( res => {
          if( res.status == 200 ){
              this.bookList=res.data;
              this.allList= [
                  { "list": this.bookList.slice(0,20) , "title":"热门小说" },
                {"list": this.bookList.slice(21,40) , "title": "限时免费"},
                { "list": this.bookList.slice(41,60) , "title": "排行榜"},
                { "list": this.bookList.slice(61,80), "title": "新书抢鲜"},
              ]
          }
        })
      },
      //给子组件注册事件;
      onCookie( isCookie ){
          this.isCookie=isCookie;
          this.popupVisible=!isCookie;
      },
      //点击用户输入登录;
      userLogin(){
        var userName=document.querySelector(".userName").value;
        var userpwd=document.querySelector(".userpassword").value;
        console.log(userName+"="+userpwd  )
        Cookie.set( "myBook", userName+"="+userpwd );
        console.log( Cookie.get( "myBook" ) )
        this.isCookie=true;
        this.popupVisible=false;
        this.toChildCookie=true;
      }
    },
    components:{
      "v-header":header,
      Swipe,
      Search,
      hotBook
    },
    watch:{
      allList:function( newVla, oldVal ){

      }
    },
    beforeDestroy(){
    }
  }




</script>

<style>
  .book-nav-box{
    display: flex;
    padding:15px 0;
  }
  .guide-nav-div{
    flex:1;
    font-size: 20px;
    text-align: center;
    text-decoration: none;
    padding:10px 0;
  }
  .book-nav-box i{
    display: inline-block;
    width: 24px;
    height: 24px;
    background-image: url(../assets/img/sprite.0.50.png);
  }
  .guide-nav-div:nth-of-type(1) i {
    background-position: -63px -28px;
  }

  .guide-nav-div:nth-of-type(2) i {
    background-position: 0 0;
  }

  .guide-nav-div:nth-of-type(3) i {
    background-position: 0 -30px;
  }

  .guide-nav-div:nth-of-type(4) i {
    background-position: 0 -60px;
  }

  .guide-nav-div:nth-of-type(5) i {
    background-position: -30px -30px;
  }

  .banner02{
    width:100%;
    height:200px;
    padding:20px;
    background:#ddd;
  }
  .home-pure-ad-img{
    width: 100%;
    height:160px;
  }




</style>
