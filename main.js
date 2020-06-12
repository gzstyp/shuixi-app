import Vue from 'vue'
import App from './App'

import toolHttp from './api/ToolHttp.js'
Vue.use(toolHttp);
/*[全局函数]调用方法this.getDatas();*/
Vue.prototype.getDatas = function(){};

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount();