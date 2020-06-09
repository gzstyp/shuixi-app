<template>
	<view class="contenting">
		<!-- 3.渲染 -->
		 <search></search>
		 <banner></banner>
		 <category></category>
		 <optimization :preferListData="listPreferData"></optimization>
	</view>
</template>
<!-- 父组件向子组件传递数据，是通过:Xxx="数据" ,子组件接收方是通过 props:{ 数据 : null } -->
<!-- 父组件调用子组件(即组件的)的方法 showForm(),也就是 组件的 methods.showForm();其中的 goodsForm 是上面定义的 ref="goodsForm" -->
<script>
	//1.导入子组件
	import search from './components/search.vue';
	import banner from './components/banner.vue';
	import category from './components/category.vue';
	import optimization from './components/optimization.vue';
	//引入接口url,大括号{}接收变量
	import {httpReq} from '../../api/httpReq.js';
	import {urls} from '../../api/urls.js';
	export default {
		//2.注册组件
		components:{
			search,
			banner,
			category,
			optimization,
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
				httpReq.get(urls.home.getListData,{current:1,pageSize:20}).then((data) =>{
					_this.listPreferData = data[1].data;
				}).catch((err) =>{
					console.info(err);
				});
			}
		}
	}
</script>

<style scoped>
	.contenting{
		margin: 0 15rpx;
	}
</style>
