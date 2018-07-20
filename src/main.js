// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"; //Vue
import App from "./App"; //App启动首页

import router from "./router"; //路由表
import language from "./language"; //国际化语言包
import {
  $get,
  $post,
  $put,
  $delete
} from "./global/http"; //网络请求

//第三方
import iView from "iview"; //iview UI组件库
import "iview/dist/styles/iview.css"; //iview官方css
// import store from "./store"; //状态管理
// import Lockr from "lockr"; //本地存储
// import Cookies from "js-cookie"; //Cookie
// import _ from "lodash"; //JavaScript 实用工具库
// import moment from "moment"; //JavaScript 日期处理类库
// import NProgress from "nprogress"; //进度条控件

//全局 Use
Vue.use(iView);


//全局配置
Vue.prototype.$get = $get;
Vue.prototype.$post = $post;
Vue.prototype.$put = $put;
Vue.prototype.$delete = $delete;

//Debug
Vue.config.productionTip = false;


new Vue({
  el: "#app",
  router,
  // store,
  components: {
    App
  },
  template: "<App/>"
});
