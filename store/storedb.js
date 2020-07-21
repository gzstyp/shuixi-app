import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const storedb = new Vuex.Store({
    state : {
		userInfo : {
			login : false,
			token : '',
			avatarUrl : '/static/icon/icon_user_photo_default.svg',
			userName : 'yinlz',
			nickName : "未登录",
			shops : false ,/* 是否是商家 */
		},
		/* 自制菜品 */
		selfCook : {
			cookType : null,/* 选择菜品的烹饪方式 */
			listStyle : [],/* 选择黄豆样式,from=1 */
			listShucai : [],/* 选择蔬菜,from=2 */
			listRoulei : [],/* 选择(畜类)肉类,from=3 */
			listBuwei : [],/* 肉类部位,from=4 */
			listQinlei : [],/* 选择禽类,from=5 */
			listHaixian : [],/* 选择海鲜,from=6 */
			listPeiliao : [],/* 选择配料,from=7 */
		},
		/* 套餐的添加-选择菜品 */
		comboAdd : {
			listSelect : [],//选择菜品组合
			listPresented : []//赠送菜品
		}
    },
    mutations : {
        login(state,provider){
            state.userInfo.login = true;
            state.userInfo.token = provider.token;
            state.userInfo.userName = provider.userName;
            state.userInfo.nickName = provider.nickName;
            state.userInfo.avatarUrl = provider.avatarUrl;
            console.info(state.userInfo);
        },
        logout(state){
            state.userInfo.login = false;
            state.userInfo.token = '';
            state.userInfo.userName = '';
            state.userInfo.avatarUrl = '';
        }
    },
    actions: {}
});
export default storedb;
