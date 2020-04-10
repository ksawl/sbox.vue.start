import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import Vue from "vue";

Vue.use(BootstrapVue);

new Vue({
    el: "#app",
    render: h => h(App)
});