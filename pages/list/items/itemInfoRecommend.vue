<!--菜品详细信息-评论和回复-->
<template>
	<view class="info-item-container">
		<image class="info-item-left" :src="item.CATE_IMAGE"></image>
		<view class="info-item-right">
			<text class="one-line item-cate-name">{{item.CATENAME || '美味食品'}}</text>
			<text class="one-line item-detail">{{item.DETAIL || ' '}}</text>
			<text class="one-line item-shop-name">{{item.SHOP_NAME || ' '}}</text>
			<text class="one-line item-enshrine">{{item.ENSHRINE_TOTAL || '0'}}收藏</text>
		</view>
	</view>
</template>

<script>
	export default{
		props : {item:null},
		methods:{}
	}
</script>

<style scoped>
	.info-item-container{
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		height: 240rpx;
		border-radius:16rpx;
		margin-bottom: 20rpx;
		display: flex;
		justify-content: space-between;
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 3px rgba(208,208,208,0.6);
		outline: 0 none;
	}
	.info-item-left{
		width: 40%;
		height: 240rpx;
	}
	.info-item-right{
		width: 60%;
		height: 240rpx;
		margin-left:10rpx;
	}
	/* 名称 */
	.item-cate-name{
		font-weight: bold;
	}
	/* 介绍 */
	.item-detail{
		font-size: 32rpx;
		color: #808080;
	}
	/* 商家名 */
	.item-shop-name{
		font-weight: 600;
		font-size: 30rpx;
	}
	/* 收藏量 */
	.item-enshrine{
		font-size: 28rpx;
		color: #808080;
	}
	.one-line{
		height: 60rpx;
		line-height: 60rpx;
		display: -webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:1;
		text-overflow: ellipsis;
		overflow: hidden;
	}
</style>
