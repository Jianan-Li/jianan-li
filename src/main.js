import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueScrollTo from "vue-scrollto";
Vue.use(VueScrollTo);

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faDribbble } from "@fortawesome/free-brands-svg-icons";
// import {
//   faAngleLeft,
//   faAngleRight,
//   faEnvelope,
//   faBookOpen,
//   faTimes
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// library.add(faDribbble);
// library.add(faYoutube);
// library.add(faLinkedinIn);
// library.add(faAngleLeft);
// library.add(faAngleRight);
// library.add(faEnvelope);
// library.add(faBookOpen);
// library.add(faTimes);

// Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
