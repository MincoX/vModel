import Vue from 'vue'

import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts;

import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// request
import Request from '@/network/request'
Vue.prototype.$req = Request;

// loading
import loading from "@/components/common/loading";
Vue.prototype.$loading = loading;

// 引入自定义插件
import plugins from '@/components/common/plugins/index'
Vue.use(plugins);

// 引入自定义指令
import Directives from '@/static/js/app/directives/index';
Vue.use(Directives);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
