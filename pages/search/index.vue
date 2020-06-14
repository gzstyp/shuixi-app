<!--搜素页面-->
<template>
	<view class="root-container">
		<view class="search-container">
			<view class="options-input">
				<view style="width:30%;">
					<xfl-select
						:list="list"
						:clearable="false"
						:showItemNum="2"
						:style_Container="listBoxStyle"
						:placeholder="'菜品'"
						:selectHideType="'independent'"
						@change="change"
						@visible-change="visibleChange"
					></xfl-select>
				</view>
				<input class="view-input" placeholder="输入搜索的内容" v-model="inputValue" />
			</view>
			<view class="search-button" hover-class="search-touch-hover" @click="search()">搜索</view>
		</view>
		<itemHot :listData="listData"></itemHot>
	</view>
</template>

<script>
	import xflSelect from '../../components/xfl-select.vue';
	import itemHot from '../index/item/itemHot.vue';
	export default{
		props : {},
		components: {
			xflSelect,
			itemHot
		},
		data() {
			return {
				listBoxStyle: `height: 38px; font-size: 16px;`,
				list: ['菜品','商家'],
				inputValue : '',
				indexType : 0,
				listData : [
					 {
						"KID":"1011",
						"CATE_IMAGE":"/static/images/realtime01.png",
						"CATENAME":"草莓水果奶油蛋糕草莓水果奶油蛋糕",
						"PVTOTAL":"106w",
						"ENSHRINE_TOTAL":"30w",
						"PRODUCT_INFO":"草莓奶油蛋糕这款蛋糕制作难度一般，不适合新手操作，主要制作材料是新鲜草莓、蛋糕粉、乳酪，辅料和调味料需要鸡蛋、黄油、糖、香草汁、烘焙粉。",
						"SHOP_NAME":"羊城西饼",
						"LOGO":"/static/images/profile_photo.png",
						"STARS":"/static/icon/star1.svg"
					 },
					 {
						"KID":"1012",
						"CATE_IMAGE":"/static/images/realtime02.png",
						"CATENAME":"清蒸金针鱼",
						"PVTOTAL":"100w",
						"ENSHRINE_TOTAL":"38w",
						"PRODUCT_INFO":"蛋白的容器须无水无油，加几滴白醋进去后，打至粗泡后分两次加入白糖，打至蛋白干性发泡",
						"SHOP_NAME":"羊城西饼",
						"LOGO":"/static/images/profile_photo.png",
						"STARS":"/static/icon/star2.svg"
					 },
					 {
						"KID":"1113",
						"CATE_IMAGE":"/static/images/realtime03.png",
						"CATENAME":"山楂银耳汤草莓水果奶油蛋糕",
						"PVTOTAL":"285w",
						"ENSHRINE_TOTAL":"206w",
						"PRODUCT_INFO":"先制作蛋黄糊，如果先打好了蛋白霜再制作蛋黄糊，这中间的时间里蛋白霜有可能消泡",
						"SHOP_NAME":"天津狗不理包子",
						"LOGO":"/static/images/profile_photo.png",
						"STARS":"/static/icon/star3.svg"
					 },
					 {
						"KID":"1014",
						"CATE_IMAGE":"/static/images/realtime02.png",
						"CATENAME":"清蒸金针鱼",
						"PVTOTAL":"100w",
						"ENSHRINE_TOTAL":"38w",
						"PRODUCT_INFO":"蛋白的容器须无水无油，加几滴白醋进去后，打至粗泡后分两次加入白糖，打至蛋白干性发泡",
						"SHOP_NAME":"羊城西饼",
						"LOGO":"/static/images/profile_photo.png",
						"STARS":"/static/icon/star4.svg"
					 },
					 {
						"KID":"1115",
						"CATE_IMAGE":"/static/images/realtime03.png",
						"CATENAME":"山楂银耳汤",
						"PVTOTAL":"285w",
						"ENSHRINE_TOTAL":"206w",
						"PRODUCT_INFO":"先制作蛋黄糊，如果先打好了蛋白霜再制作蛋黄糊，这中间的时间里蛋白霜有可能消泡",
						"SHOP_NAME":"天津狗不理包子",
						"LOGO":"/static/images/profile_photo.png",
						"STARS":"/static/icon/star5.svg"
					 }
				]
			}
		},
		methods:{
			search : function(){
				var value = this.inputValue;
				var type = this.indexType;
				console.info(value);
				console.info(type);
			},
			visibleChange(isShow){
				//console.info('isShow:', isShow);
			},
			change({ newVal, oldVal, index, orignItem }) {
				//console.info(newVal, oldVal, index, orignItem);//index是索引, orignItem,所选择的值
				this.indexType = index;
			}
		},
		created : function(){
			//请求数据
		},
		onLoad(option){
			console.info(option);//接收才参数option是json格式
		}
	}
</script>

<style scoped>
	.root-container{
		margin: 0 15rpx;
	}
	.search-container{
		width: 100%;
		height:78rpx;
		line-height: 78rpx;
		display: flex;
		justify-content: space-between;
		margin-top:6rpx;
		margin-bottom: 20rpx;
	}
	/* 下拉和输入框 */
	.options-input{
		display: flex;
		width:80%;
	}
	/* 下拉和输入框-下拉 */
	.view-options{
		height: 100%;
		width: 30%;
	}
	/* 下拉和输入框-输入框 */
	.view-input{
		display: block;
		width:70%;
		height:76rpx;
		line-height: 76rpx;
		padding: 0 10rpx;
		border-bottom:1rpx solid #C0C4CC;
	}
	/* 搜索按钮 */
	.search-button{
		width:20%;
		border-bottom-right-radius:14rpx;
		border-top-right-radius:14rpx;
		vertical-align: middle;
		text-align: center;
		font-size: 36rpx;
		background:linear-gradient(to right,#ffcc66 5%,#ffcc00 100%);
	}
	.search-touch-hover{
		color: #ffffff;
	}
</style>
