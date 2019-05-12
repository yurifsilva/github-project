import Vue from "vue";
import App from "app/app";
import router from "app/router";
import store from "app/store";
import "app/infiniteLoadingSetup";
import "app/vuetifySetup";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
