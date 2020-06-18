import Vue from 'vue';
import App from './App';

/* import Vuex from 'vuex';
Vue.use(Vuex); */

import toolHttp from './api/ToolHttp.js'
Vue.use(toolHttp);//挂载方式1
/*[全局函数]调用方法this.getDatas();*/
Vue.prototype.getDatas = function(){};

//引入vuex
import storedb from './store/storedb.js'
//把vuex定义成全局组件
Vue.prototype.storedb = storedb;//挂载方式2[含vuex]

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount();