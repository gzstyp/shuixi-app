<template>
	<view style="position: relative;margin-top: -20rpx;">
		<image class="product-pv-eye" src="/static/images/eye_normal.svg" mode="widthFix"/>
		<text class="product-pv-total">{{item.PVTOTAL}}浏览</text>
		<image class="pv-star-icon" src="/static/images/star_normal.svg" mode="widthFix"/>
		<text class="enshrine-total">{{item.ENSHRINE_TOTAL}}收藏</text>
	</view>
</template>

<script>
	export default{
		props : {
			item : null
		}
	}
</script>

<style scoped>
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
</style>
