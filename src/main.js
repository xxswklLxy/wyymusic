import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.prototype.$Bus = new Vue()

// 播放器插件
import vueAplayer from 'vue-aplayer'
Vue.use(vueAplayer)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')