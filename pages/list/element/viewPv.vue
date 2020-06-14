<template>
	<view class="item-view-container">
		<image class="icon-eye" src="/static/images/eye_normal.svg"></image>
		<text class="text-pv-total" >{{item.PVTOTAL || '1'}}浏览</text>
	</view>
</template>

<script>
	export default{
		props : {item : null}
	}
</script>

<style scoped>
	.item-view-container{
		display: flex;
	}
	image.icon-eye{
		height:26rpx;
		width:30rpx;
		align-self: center;
	}
	text.text-pv-total{
		height:26rpx;
		line-height:26rpx;
		font-size:24rpx;
		width: 100%;
		margin-left:6rpx;
		display:inline-block;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:1;
		text-overflow: ellipsis;
		overflow: hidden;
		vertical-align: middle;
		align-self: center;
		color: #666666;
	}
</style>
