<!--菜品类别列表-item项-->
<template>
	<view class="category-item-container">
		<image class="category-item-image"  :src="item.CATE_IMAGE"></image>
		<view class="name-star-pv">
			<view class="left-name-star">{{item.CATENAME}}</view>
			<image class="middle-star" :src="item.STARS"></image>
			<view class="right-pv">
				<viewPv class="pv-total" :item="item"></viewPv>
				<viewEnshrine class="enshrine-total" :item="item"></viewEnshrine>
			</view>
		</view>
		<view class="logo-name">
			<image :src="item.LOGO"></image>
			<text>{{item.SHOP_NAME}}</text>
		</view>
	</view>
</template>

<script>
	import viewPv from '../element/viewPv.vue';
	import viewEnshrine from '../element/viewEnshrine.vue';
	export default{
		components:{
			viewPv,
			viewEnshrine
		},
		props : {
			item : null
		},
		data() {
			return {}
		},
		methods:{}
	}
</script>

<style scoped>
	.category-item-container{
		margin-top:18rpx;
		border-radius:20rpx;
		width: 100%;
		height: 524rpx;
		border-color: #FAA70D;
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(254,184,43, 0.6);
		outline: 0 none;
		padding-bottom: 6rpx;
	}
	.category-item-image{
		height:400rpx;
		width: 100%;
	}
	.name-star-pv{
		height:60rpx;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.left-name-star{
		width:100%;
		height:60rpx;
		font-size:32rpx;
		color: #FEB82B;
		line-height: 60rpx;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient:vertical;
		margin-left:6rpx;
	}
	.middle-star{
		width:70rpx;
		height:60rpx;
	}
	.right-pv{
		width:100%;
		height:60rpx;
		display: flex;
		justify-content: space-between;
		vertical-align: middle;
	}
	.pv-total{
		width: 50%;
		padding-top:14rpx;
	}
	.enshrine-total{
		width: 50%;
		padding-top:14rpx;
	}
	.logo-name{
		height:64rpx;
		line-height: 64rpx;
		width: 100%;
		display: flex;
		padding-left: 4rpx;
	}
	.logo-name image{
		width:64rpx;
		height:64rpx;
	}
	.logo-name text{
		font-size:36rpx;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient:vertical;
		margin-left: 8rpx;
	}
	
</style>
