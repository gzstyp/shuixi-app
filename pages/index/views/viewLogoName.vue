<!-- 实时新品-item项-商家logo、店铺名、收藏按钮 -->
<template>
	<view class="product-bottom">
		<view class="photo-username">
			<image class="img-photo" :src="item.LOGO" mode="aspectFill"/>
			<text class="username">{{item.SHOP_NAME}}</text>
		</view>
		<image class="enshrine-lable" src="/static/images/star_normal.svg" mode="widthFix" @click="enshrineProduct(item.KID)"/>
	</view>
</template>

<script>
	import {hints} from '../../../api/hints.js';
	export default{
		props : {
			item : null
		},
		methods:{
			enshrineProduct : function(kid){
				hints.info(kid);
			}
		}
	}
</script>

<style scoped>
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
