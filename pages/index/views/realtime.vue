<!-- 实时新品 -->
<template>
	<view class="list-new-produce-container">
		<item-head ref="itemViewHead" :itemData="itemData"></item-head>
		<block v-for="(item,index) in productDatas" :key="index">
			<itemProduct :item="item"></itemProduct>
		</block>
	</view>
</template>

<script>
	import itemProduct from './itemProduct.vue';
	import itemHead from './itemHead.vue';
	import {hints} from '../../../api/hints.js';
	export default {
		props : {},
		components:{
			itemProduct,
			itemHead
		},
		data () {
			return {
				itemData : {
					imgsrc : "/static/images/index/icon/shishixinpin.svg",
					label : "实时新品",
					objects : {
						"type":3,
						"label" : '实时新品',
						"handler" : null
					}
				},
				productDatas : [
					{
						"KID":"100011",
						"CATE_IMAGE":"/static/images/realtime01.png",
						"CATENAME":"草莓水果奶油蛋糕",
						"BEFORE":"6个月",
						"PVTOTAL":"16w",
						"ENSHRINE_TOTAL":"310006w",
						"PRODUCT_INFO":"草莓奶油蛋糕这款蛋糕制作难度一般，不适合新手操作，主要制作材料是新鲜草莓、蛋糕粉、乳酪，辅料和调味料需要鸡蛋、黄油、糖、香草汁、烘焙粉。",
						"SHOP_NAME":"羊城西饼",
						"LOGO":"/static/images/profile_photo.png"
					},
					{
						"KID":"100013",
						"CATE_IMAGE":"/static/images/realtime03.png",
						"CATENAME":"清蒸金针鱼",
						"BEFORE":"25分钟",
						"PVTOTAL":"106w",
						"ENSHRINE_TOTAL":"3006w",
						"PRODUCT_INFO":"蛋白的容器须无水无油，加几滴白醋进去后，打至粗泡后分两次加入白糖，打至蛋白干性发泡",
						"SHOP_NAME":"羊城西饼",
						"LOGO":"/static/images/profile_photo.png"
					},
					{
						"KID":"100114",
						"CATE_IMAGE":"/static/images/realtime04.png",
						"CATENAME":"山楂银耳汤",
						"BEFORE":"59分钟",
						"PVTOTAL":"28w",
						"ENSHRINE_TOTAL":"376w",
						"PRODUCT_INFO":"先制作蛋黄糊，如果先打好了蛋白霜再制作蛋黄糊，这中间的时间里蛋白霜有可能消泡",
						"SHOP_NAME":"天津狗不理包子",
						"LOGO":"/static/images/profile_photo.png"
					},
					{
						"KID":"100012",
						"CATE_IMAGE":"/static/images/realtime02.png",
						"CATENAME":"皮蛋瘦肉粥",
						"BEFORE":"29天",
						"PVTOTAL":"20326w",
						"ENSHRINE_TOTAL":"310w",
						"PRODUCT_INFO":"皮蛋瘦肉粥,好吃养颜",
						"SHOP_NAME":"贵州龙",
						"LOGO":"/static/images/profile_photo.png"
					}
				]
			}
		},
		methods:{
			enshrineProduct : function(kid){
				hints.info(kid);
			}
		},
		created(){}
	}
</script>

<style>
	.list-new-produce-container{
		margin: 30rpx 0;
		border-radius: 20rpx;
		border-color: #FAA70D;
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(254,184,43, 0.6);
		outline: 0 none;
		padding-bottom: 20rpx;
	}
</style>
