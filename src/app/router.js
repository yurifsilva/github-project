import Vue from "vue";
import Router from "vue-router";
import Home from "views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/repositories/:User",
      name: "Repositories",
      component: () => import("views/Repositories.vue")
    },
    {
      path: "/repositories/:User/:Name/commits",
      name: "Commits",
      component: () => import("views/Commits.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("views/About.vue")
    }
  ]
});
