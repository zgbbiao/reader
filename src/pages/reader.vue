<template>
  <div>
    <v-header  :headerObj=headerObj ></v-header>
    <!--书架-->

  </div>
</template>
<script>
  import Header from "@/components/header.vue"
  export default{
      data(){
          return {
            headerObj: {
              title: "读者",
              back: "首页"
            }
          }
      },
    mounted(){
          //视图创建完成后, 删除登录或进入读者页面的元素;
          var reader = document.querySelector( ".right" );
          reader.style.display="none";
    },
    methods:{},
    components:{
        "v-header":Header
    }
  }
</script>
<style scoped>

</style>
