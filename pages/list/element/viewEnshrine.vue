<template>
	<view class="item-view-container">
		<image class="icon-enshrine" src="/static/images/star_normal.svg"></image>
		<text class="text-total" >{{item.ENSHRINE_TOTAL || '0'}}收藏</text>
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
	image.icon-enshrine{
		height:26rpx;
		width:30rpx;
		align-self: center;
	}
	text.text-total{
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
