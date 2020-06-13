<!-- logo、商家名称、收藏按钮图标 -->
<template>
	<view class="logo-enshrine-container">
		<view class="container-left">
			<image class="image-logo" :src="item.LOGO" mode="aspectFill"/>
			<text class="shop-name">{{item.SHOP_NAME}}</text>
		</view>
		<view class="container-right">
			<image class="enshrine-icon" src="/static/images/star_normal.svg" mode="widthFix" @click="enshrineProduct(item.KID)"/>
		</view>
	</view>
</template>

<script>
	export default {
		props : {
			item : null
		},
		methods:{
			enshrineProduct : function(kid){
				console.info(kid);
			}
		}
	}
</script>

<style scoped>
	.logo-enshrine-container{
		margin-bottom:4rpx;
		margin-top: 10rpx;
		display: flex;
		justify-content: space-between;
		width:100%;
		height:50rpx;
		line-height: 50rpx;
	}
	.container-left{
		width: 85%;
		display: flex;
	}
	/* 商家logo */
	.container-left .image-logo{
		width:50rpx;
		height:50rpx;
		margin-right: 8rpx;
	}
	/* 商家名称 */
	.container-left .shop-name{
		font-size: 30rpx;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient:vertical;
	}
	.container-right{
		width:15%;
		height:50rpx;
	}
	/* 收藏的图标 */
	.container-right .enshrine-icon{
		width:40rpx;
		height:40rpx;
		margin-top:10%;
		margin-left: 12%;
	}
</style>
