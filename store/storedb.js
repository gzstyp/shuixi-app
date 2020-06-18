import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const storedb = new Vuex.Store({
    state : {
        login : false,
        token : '',
        avatarUrl : '/static/icon/icon_user_photo_default.svg',
        userName : 'yinlz',
		nickName : "引路者",
		shops : false/* 是否是商家 */
    },
    mutations : {
        login(state,provider){
            state.login = true;
            state.token = provider.token;
            state.userName = provider.userName;
            state.avatarUrl = provider.avatarUrl;
        },
        logout(state){
            state.login = false;
            state.token = '';
            state.userName = '';
            state.avatarUrl = '';
        }
    },
    actions: {}
});
export default storedb;
