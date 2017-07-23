<template>
  <div>
    <v-header  :headerObj=headerObj ></v-header>
    <!--书架-->
        <router-link :to="{name:'Details', params:{id:item.id} }" class="categoryInfo"  v-for=" ( item, index ) in details " :key="item.id" >
          <img :src="item.images" :alt="item.images">
          <div class="right">
            <h3>{{item.name}}</h3>
            <p> {{item.intro}} </p>
            <span class=" posint-bottom"> <Icon type="person"></Icon>{{item.author}} </span>
          </div>
        </router-link>
  </div>
</template>
<script>
  import Header from "@/components/header.vue"
  import {getAll} from "@/components/getBook.js"
  import axios from "axios"
  export default{
      data(){
          return {
            headerObj: {
              title: "书架",
              back: "首页"
            },
            detailsList:[],
            details:[]
          }
      },
    created(){
      var obj = getAll();
      this.detailsList=Object.keys( obj );
      var This= this;
      this.detailsList.forEach( function( item, i ){
        This.getList( item );
      } )
      console.log( this.details );
    },
    mounted(){
    },
    methods:{
      getList( id ){
//        http://39.108.14.248:3333/booklist?id=2
        axios.get( `${this.common.api}/booklist?id=${id}`
		).then( res => {
          if( res.status == 200 ){
            this.details.push( res.data );
          }
        })
      },
    },
    components:{
        "v-header":Header
    }
  }
</script>
<style scoped>
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
