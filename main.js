import Vue from 'vue'
import App from './App'
import faicon from './components/fa-icon/fa-icon.vue'
import store from './store'  


Vue.component('faicon',faicon)
Vue.config.productionTip = false
Vue.prototype.$store = store

App.mpType = 'app'


const app = new Vue({
	...App,
	store
})
app.$mount()
