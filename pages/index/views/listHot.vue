<!-- 热门菜系 -->
<template>
	<view class="view-parent-container">
		<itemHead ref="itemViewHead" :itemData="itemData"></itemHead>
		<itemHot :listData="listData"></itemHot>
	</view>
</template>

<script>
	import itemHead from './itemHead.vue';
	import itemHot from '../item/itemHot.vue';
	export default {
		components:{
			itemHead,
			itemHot
		},
		props : {},
		data() {
			return {
				itemData : {
					imgsrc : "/static/images/index/icon/remencaixi.svg",
					label : "热门菜系",
					objects : {
						"type":4,
						"label" : '热门菜系',
						"handler" : null
					}
				},
				listData : [
					 {
						"KID":"100011",
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
						"KID":"100012",
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
						"KID":"100113",
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
						"KID":"100014",
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
						"KID":"100115",
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
		}
	}
</script>

<style scoped>
	.view-parent-container{
		margin-top: 30rpx;
		margin-bottom: 6rpx;
		border-radius: 20rpx;
		border-color: #FAA70D;
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(254,184,43, 0.6);
		outline: 0 none;
	}
</style>
