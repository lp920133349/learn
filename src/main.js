import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//需要同时导入css
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);   //全局使用

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
