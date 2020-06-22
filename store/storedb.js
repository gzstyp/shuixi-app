import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const storedb = new Vuex.Store({
    state : {
        login : false,
        token : '',
        avatarUrl : '/static/icon/icon_user_photo_default.svg',
        userName : 'yinlz',
		nickName : "未登录",
		shops : true ,/* 是否是商家 */
		/* 自制菜品 */
		selfCook : {
			cookType : null,/* 选择菜品的烹饪方式 */
			listStyle : [],/* 选择黄豆样式,from=1 */
			listShucai : [],/* 选择蔬菜,from=2 */
			listRoulei : [],/* 选择肉类,from=3 */
		}
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
