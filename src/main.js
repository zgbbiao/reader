// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'


//引入第三方模块;
import mint from "mint-ui";
import 'mint-ui/lib/style.css'    //引入 mint-ui 的样式
import $ from "@/lib/jquery-2.2.2.min.js"
import "@/lib/jquery.fly.min.js"
import "@/lib/requestAnimationFrame.js"

import './lib/mui/css/mui.css';
import './lib/mui/css/icons-extra.css';

import Common from "@/components/utils.js";

Vue.use( mint );
Vue.use( Common  )

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>', /*告知页面这个组件用这样的标签来包裹着,并且使用它*/
  components: { App } /*告知当前页面想使用App这个组件*/
})


