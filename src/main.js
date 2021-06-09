import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vant from "vant";
import store from "./store";
import "vant/lib/index.css";
Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
  
}).$mount("#app");


// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.getItem("token") || "";
//   if (isLogin) {
//     //说明已经登陆
//     if (to.path == "/login") {
//       //如果已经登陆，再想回到登录页面不允许
//       next("/");
//     } else {
//       //我已经登陆了，也没有在登录页面，直接放行
//       next();
//     }
//   } else {
//     //说明没有登录，
//     if (to.path == "/login") {
//       next(); //没有登陆想去登录页面，直接放行
//     } else {
//       if (to.path == "/mine") {
//         next("/login");
//       } else {
//         next()
//       }

//     }
//   }
// });
