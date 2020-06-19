<!-- 数据为空时显示 -->
<template>
	<view class="empty">
		<view  class="empty-tips">
			此地空空如也
		</view>
	</view>
</template>

<script>
	export default{
		name:'empty'
	}
</script>

<style lang="scss">
	.empty{
		position:fixed;
		left: 0;
		top:0;
		width: 100%;
		height: 100vh;
		padding-bottom:100rpx;
		display:flex;
		justify-content: center;
		flex-direction: column;
		align-items:center;
		background: #fff;
		image{
			width: 240rpx;
			height: 160rpx;
			margin-bottom:30rpx;
		}
		.empty-tips{
			display:flex;
			font-size: 36rpx;
			color: gray;
			.navigator{
				color: #FEB82B;
				margin-left: 16rpx;
			}
		}
	}
</style>
