import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const router = new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: () => import("../pages/Home"),
      meta: {
        footerShow: true,
      },
    },
    {
      path: "/search",
      component: () => import("../pages/Search"),
      meta: {
        footerShow: false,
      },
    },
    {
      path: "/searchlist",
      component: () => import("../pages/SearchList"),
      meta: {
        footerShow: false,
      },
    },
    {
      path: "/detail/:id",
      component: () => import("../pages/Detail"),
      meta: {
        footerShow: false,
      },
    },
    {
      path: "/fenlei",
      component: () => import("../pages/Fenlei"),
      meta: {
        footerShow: true,
      },
    },
    {
      path: "/cart",
      component: () => import("../pages/Cart"),
      meta: {
        footerShow: true,
      },
    },
    {
      path: "/order",
      component: () => import("../pages/Order"),
      meta: {
        footerShow: false,
      },
    },
    {
      path: "/address",
      component: () => import("../pages/Address"),
      meta: {
        footerShow: false,
      },
    },
    {
      path: "/addlist",
      component: () => import("../pages/Addlist"),
      meta: {
        footerShow: false,
      },
    },
    {
      path: "/mine",
      component: () => import("../pages/Mine"),
      meta: {
        footerShow: true,
      },
      // beforeEnter: (to, from, next) => {
      //   const isLogin = localStorage.getItem("token") || "";
      //   if (!isLogin) {
      //     next("/login")
      //   } else {
      //     next()
      //   }
      // }
    },
    {
      path: "/reg",
      component: () => import("../pages/Reg"),
      meta: {
        footerShow: false,
      },
    },
    {
      path: "/login",
      component: () => import("../pages/Login"),
      meta: {
        footerShow: false,
      },
      // beforeEnter: (to, from, next) => {
      //   const isLogin = localStorage.getItem("token") || "";
      //   if (!isLogin) {
      //     next("/login")
      //   } else {
      //     next("/")
      //   }
      // }
    },
  ],
});
export default router;
