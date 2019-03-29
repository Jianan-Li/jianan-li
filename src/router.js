import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

// Keep track of home page y position
let homePageYPos = 0;
function updatePosition() {
  if (window.location.pathname == "/") {
    homePageYPos = window.scrollY;
  }
}
window.addEventListener("scroll", updatePosition);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash };
    }
    if (to.path == "/") {
      //nav to home, set y to myVar
      return { x: 0, y: homePageYPos };
    }
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: () => import("./views/About.vue")
    },
    {
      path: "/resume",
      name: "Resume",
      component: () => import("./views/Resume.vue")
    },
    {
      path: "/Grocery",
      name: "Grocery",
      component: () => import("./views/Grocery.vue")
    },
    {
      path: "/T3",
      name: "T3",
      component: () => import("./views/T3.vue")
    },
    {
      path: "/IPDDirectory",
      name: "IPDDirectory",
      component: () => import("./views/IPDDirectory.vue")
    },
    {
      path: "/PigPushToy",
      name: "PigPushToy",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/PigPushToy.vue")
    },
    {
      path: "/WateringCan",
      name: "WateringCan",
      component: () => import("./views/WateringCan.vue")
    },
    {
      path: "/LetterOpener",
      name: "LetterOpener",
      component: () => import("./views/LetterOpener.vue")
    },
    {
      path: "/Shi",
      name: "Shi",
      component: () => import("./views/Shi.vue")
    },
    {
      path: "/Kollapse",
      name: "Kollapse",
      component: () => import("./views/Kollapse.vue")
    },
    {
      path: "/TwoSix",
      name: "TwoSix",
      component: () => import("./views/TwoSix.vue")
    },
    {
      path: "/Tetris",
      name: "Tetris",
      component: () => import("./views/Tetris.vue")
    },
    {
      path: "/FloorPiano",
      name: "FloorPiano",
      component: () => import("./views/FloorPiano.vue")
    },
    {
      path: "/BusStopKiosk",
      name: "BusStopKiosk",
      component: () => import("./views/BusStopKiosk.vue")
    }
  ]
});
