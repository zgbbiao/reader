import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import home from "@/pages/home.vue";
import category from "@/pages/category.vue";
import Details from "@/pages/Details.vue";
import Reading from "@/pages/reading.vue";
// import pageQuiButton from "../pages/pageQuiButton.vue"
// import pageQuilList from "../pages/pageQuilList.vue"
// import pageQuiNav from "../pages/pageQuiNav.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/category',
      name: 'category',
      component: category
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: Details
    },
    {
      path: '/reading/:id',
      name: 'Reading',
      component: Reading
    }


  ]
})
