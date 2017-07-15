<template>
  <div class="qui-nav nav-type-1">
    <a v-for="( item, index ) in items" :class="[commonClass, item.active ? activeClass: '']" @click="navClickEvent( items, index )">
      <span class="nav-txt">{{item.text}}</span>
    </a>
  </div>
</template>
<script>
  export default{
      data:function(){
        return{
          items:[
            {
              text: '首页',
              active : true
            },
            {
              text: '列表',
              active : false
            },
            {
              text: '关于',
              active : false
            },
            {
              text: '招聘',
              active : false
            }
          ],
          commonClass:"nav-item",
          activeClass:"active"
        }
      },
    methods:{
      navClickEvent:function( items, i ){
          items.forEach( function( item ){
              item.active=false;
          } )
        items[i].active=true;
          //将电机事件也交给父组件来触发;
        console.log("触发");
        this.$emit( "navClickEvent", {items, i} );
      }
    }
  }
</script>
<style scoped>
  .nav-item{
    width: 70px;
    height: 50px;
    box-sizing: border-box;
  }
  .active{
    border-bottom:3px solid yellow;
  }
</style>
