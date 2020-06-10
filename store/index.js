import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({  
    state: {  
        login: false,  
        token: '',  
        avatarUrl: '../../static/user.png',  
        userInfo: {}  
    },  
    mutations: {  
        login(state, provider) {  
            console.log(state)  
            console.log(provider)  
            state.login = true;               
            state.userInfo = provider; 
			state.avatarUrl = provider.avatar;
        },  
        logout(state) {  
            state.login = false;
            state.token = '';  
            state.userInfo = '';  
            state.avatarUrl = '';  
        }  
    }  
})
export default store