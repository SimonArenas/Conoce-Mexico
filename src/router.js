import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Pop_up from "@/components/Pop_up";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/popup",
      name: "popup",
      component: Pop_up,
    },
  ],
  scrollBehavior: function(to) {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }
  },
});
