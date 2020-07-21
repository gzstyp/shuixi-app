<template>
	<view class="view-root">
		<!-- 搜索框 -->
		<search></search>
		<!-- 滚动图 -->
		<banner></banner>
		<!-- 菜品类型 -->
		<category></category>
		<!-- 优选套餐 -->
		<optimization></optimization>
		<!-- 厨师精选 -->
		<choiceness></choiceness>
		<!-- 实时新品 -->
		<realtime></realtime>
		<!-- 热门菜系 -->
		<listHot></listHot>
	</view>
</template>
<!-- 父组件向子组件传递数据，是通过:Xxx="数据" ,子组件接收方是通过 props:{ 数据 : null } -->
<!-- 父组件调用子组件(即组件的)的方法 showForm(),也就是 组件的 methods.showForm();其中的 goodsForm 是上面定义的 ref="goodsForm" -->
<script>
	import search from './views/search.vue';
	import banner from './views/banner.vue';
	import category from './views/category.vue';
	import optimization from './views/optimization.vue';
	import choiceness from './views/choiceness.vue';
	import realtime from './views/realtime.vue';
	import listHot from './views/listHot.vue';

	//引入接口url,大括号{}接收变量
	import {httpReq} from '../../api/httpReq.js';
	import {urls} from '../../api/urls.js';
	export default {
		components:{
			search,
			banner,
			category,
			optimization,
			choiceness,
			realtime,
			listHot
		},
		/* 一般情况下,是在父组件获取数据再传到子组件!!!???父组件给子组件传值!!!,所以把请求放在父组件来 */
		data () {
			return {
				//为你优选(推荐在父组件获取数据往子组件传值)
				listPreferData : []
			}
		},
		/* 这个是微信小程序的方法 */
		onLoad() {},
		/* el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子 */
		mounted() {},
		/* 实例已经创建完成之后被调用 */
		created() {
			this.preference();
		},
		methods: {
			preference : function(){
				var _this = this;
				//this.reqGet(urls.home.getListData,{current:1,pageSize:20},function(data){
					//console.info(data);
				//});
			}
		}
	}
</script>

<style scoped>
	.view-root{
		margin: 0 15rpx;
	}
</style>
