<template>
	<view class="prefer-content">
		<item-head ref="itemViewHead" :imgsrc="imgsrc" :label="label" :objects="objects"></item-head>
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
				imgsrc : "/static/images/icon_realtime.png",
				label : "实时新品",
				objects : {
					"kid":"1024",
				},
				productDatas : [
					{
						"KID":"100011",
						"CATE_IMAGE":"/static/images/realtime01.png",
						"CATENAME":"草莓水果奶油蛋糕",
						"BEFORE":"10分钟前",
						"PVTOTAL":"1.6w",
						"ENSHRINE_TOTAL":"310000.6w",
						"PRODUCT_INFO":"草莓奶油蛋糕这款蛋糕制作难度一般，不适合新手操作，主要制作材料是新鲜草莓、蛋糕粉、乳酪，辅料和调味料需要鸡蛋、黄油、糖、香草汁、烘焙粉。",
						"SHOP_NAME":"羊城西饼",
						"LOGO":"/static/images/profile_photo.png"
					},{
						"KID":"100012",
						"CATE_IMAGE":"/static/images/realtime02.png",
						"CATENAME":"皮蛋瘦肉粥",
						"BEFORE":"7分钟前",
						"PVTOTAL":"20.26w",
						"ENSHRINE_TOTAL":"310000.6w",
						"PRODUCT_INFO":"皮蛋瘦肉粥,好吃养颜",
						"SHOP_NAME":"贵州龙",
						"LOGO":"/static/images/profile_photo.png"
					},{
						"KID":"100013",
						"CATE_IMAGE":"/static/images/realtime03.png",
						"CATENAME":"清蒸金针鱼",
						"BEFORE":"1小时前",
						"PVTOTAL":"1.6w",
						"ENSHRINE_TOTAL":"300.6w",
						"PRODUCT_INFO":"蛋白的容器须无水无油，加几滴白醋进去后，打至粗泡后分两次加入白糖，打至蛋白干性发泡",
						"SHOP_NAME":"羊城西饼",
						"LOGO":"/static/images/profile_photo.png"
					},{
						"KID":"100114",
						"CATE_IMAGE":"/static/images/realtime04.png",
						"CATENAME":"山楂银耳汤",
						"BEFORE":"12分钟前",
						"PVTOTAL":"2.8w",
						"ENSHRINE_TOTAL":"30.6w",
						"PRODUCT_INFO":"先制作蛋黄糊，如果先打好了蛋白霜再制作蛋黄糊，这中间的时间里蛋白霜有可能消泡",
						"SHOP_NAME":"狗不理包子",
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
	.prefer-content{
		margin: 30rpx 0;
		border-radius: 20rpx;
		border-color: #FAA70D;
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(254,184,43, 0.6);
		outline: 0 none;
		padding-bottom: 20rpx;
	}
	/* 下边距 */
	.view-header{
		margin-bottom:16rpx;
		padding-top:16rpx;
		margin-left: 14rpx;
		position: relative;
	}
	.header-left{
		width: 35rpx;
		height: 35rpx;
	}
	.header-right{
		width:40rpx;
		height:40rpx;
		margin-bottom:-4rpx;
		justify-content: flex-end;
		flex-grow: 5;
		position: absolute;
		top:20rpx;
		right: 20rpx;
	}
	/* 每一个 */
	.view-item-content{
		display: flex;
		margin-top:16rpx;
	}
	.content-left{
		margin-left:2rpx;
		height:220rpx;
		width:292rpx;
	}
	.content-right{
		margin-left:14rpx;
	}
	.right-content{
		display: flex;
		justify-content:space-between;
		position: relative;
	}
	/* 新品名称 */
	.lable-name{
		font-size:32rpx;
		display: inline-block;
		white-space: nowrap;
		width:280rpx;
		overflow: hidden;
		text-overflow:ellipsis;
		color: #FEB82B;
	}
	/* 提示时间 */
	.lable-time{
		font-size:26rpx;
		color: #999999;
		position: relative;
		top:-8rpx;
		right:0;
	}
	/* 浏览量图标 */
	.product-pv-eye{
		height:26rpx;
		width:30rpx;
		position: absolute;
		top:12rpx;
	}
	/* 新品浏览量 */
	.product-pv-total{
		font-size:24rpx;
		color: #666666;
		margin-left: 32rpx;
	}
	/* 收藏图标 */
	.pv-star-icon{
		height:26rpx;
		width:26rpx;
		margin-left:8rpx;
		position: absolute;
		top:12rpx;
	}
	/* 收藏人数 */
	.enshrine-total{
		font-size:24rpx;
		color: #666666;
		margin-left:40rpx;
	}
	/* 新品介绍 */
	.product-info{
		width:380rpx;
		font-size:30rpx;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient:vertical;
	}
	/* 商家图标及商家名称和收藏按钮并排 */
	.product-bottom{
		display: flex;
		justify-content: space-between;
	}
	/* 商家图标及商家名称并排 */
	.photo-username{
		display: flex;
	}
	/* 商家logo */
	.img-photo{
		width:50rpx;
		height:50rpx;
		margin-top:8rpx;
	}
	/* 商家名称 */
	.username{
		font-size: 30rpx;
		margin-top:20rpx;
		margin-left: 10rpx;
	}
	/* 收藏按钮图标 */
	.enshrine-lable{
		width:40rpx;
		height:40rpx;
		margin-top:8rpx;
	}
</style>
