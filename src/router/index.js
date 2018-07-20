import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
// import Main from '../pages/main.vue'
// import PHP from '../pages/php.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Main',
    component: resolve => require(['../pages/main.vue'], resolve)
    // component: Main
  }]
})
