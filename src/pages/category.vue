<template>
  <div id="category">
    <v-header :headerObj=headerObj ></v-header>
    <div class="search-filter">
        <a href="javascript:;" class="jsTag active" data-value="" role="tab" aria-selected="true">人气</a>
        <a
        href="javascript:;" class="jsTag" data-value="4" role="tab" aria-selected="false">时间</a>
        <a
        href="javascript:;" class="jsTag" data-value="3" role="tab" aria-selected="false">字数</a>
        <a
        href="javascript:;" class="jsTag" data-value="11" role="tab" aria-selected="false">收藏</a>
        <a
        href="javascript:;" class="jsTag" data-value="9" role="tab" aria-selected="false">推荐</a>
        <a
        href="javascript:;" class="sTag" data-value="1" role="tab" aria-selected="false">点击</a>
        <a href="#&amp;asideFilter" id="asideFilterTrigger" class="module-filter-icon" data-rel="asideFilter"
           role="button" aria-haspopup="true" aria-selected="false">
        </a>
    </div>

    <router-link :to="{path:'details', query:{id:item.id} }" class="categoryInfo"  v-for=" ( item, index ) in bookList " :key="item.id" >
      <img :src="item.images" :alt="item.images">
      <div class="right">
        <h3>{{item.name}}</h3>
        <p> {{item.intro}} </p>
        <span class="mui-icon mui-icon-contact posint-bottom"> {{item.author}} </span>
      </div>
    </router-link>
  </div>
</template>
<script>
  import axios from 'axios'
  import Header from "@/components/header.vue"
  export default{
      data(){
          return{
            bookList:[],
            categoryTitle:"",
            headerObj: {
              title: "小说",
              back: "返回"
            }
          }
      },
    created(){
      this.getList();
      this.setType();
      this.headerObj.title=`${this.categoryTitle}小说`;
    },
    mounted(){

    },
    methods:{
        setType(){

          switch( parseInt( this.$route.query.type) ){
            case 1:
                this.categoryTitle="玄幻";
                break;
            case 2:
              this.categoryTitle="修真";
              break;
            case 3:
              this.categoryTitle="都市";
              break;
            case 4:
              this.categoryTitle="历史";
              break;
            case 5:
              this.categoryTitle="网游";
              break;
            default :
              this.categoryTitle="玄幻";
              break;
          }
        },
        getList(){
          axios.get(`${this.common.api}/booklist`).then( res => {
          if( res.status == 200 ){
             this.bookList=res.data;
             var This=this;
            this.bookList = this.bookList.filter( function( item ){
                  if( item.type == This.categoryTitle ){
                      return item;
                  }
              } )
          }
        })
        }
    },
    watch:{

    },
    components:{
      "v-header":Header
    },
    beforeDestroy(){

    }
  }
</script>
<style scoped>
  #category{
    background:#fff;
  }
  .mint-header {
    background: linear-gradient(to right, gainsboro, white);
    color: #000;
    margin-bottom: 10px;
  }

  .mint-header-button {

  }

  .module-filter-header {
    position: relative;
    z-index: 1;
    right: 0;
    left: 0;
    padding: .6875rem 1rem;
  }

  .search-filter{
    height:55px;
    padding:10px 20px;
    display: flex;
    box-sizing: border-box;
  }
  .search-filter a{
    flex:1;
    text-align: center;
    color:grey;
    font-size: 25px;
  }
  .search-filter a:hover,
  .search-filter a:active{
    padding-top:10px;
    border-radius: 10px;
    border:1px solid red;
    color:red;
  }
  .categoryInfo{
    display: block;
    padding:20px;
    height:200px;
  }
  .categoryInfo img{
    float:left;
    width:100px;
    height:100%;
  }
  .categoryInfo .right{
    overflow: hidden;
    /*background:red;*/
    height:100%;
    padding-left:10px;
    position: relative;
  }
  .categoryInfo .right *{
    color:#000;
  }
  .categoryInfo .right h3{
    font-size: 35px;
  }
  .categoryInfo .right p{
    text-indent: 2em;
    font-size: 22px;
    line-height: 28px;
    height:80px;
    overflow: hidden;
    text-overflow:ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:3;
    -webkit-box-orient:vertical;
  }
  .posint-bottom{
      position: absolute;
    bottom:0px;
  }

</style>
