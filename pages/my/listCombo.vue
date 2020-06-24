<!-- 套餐管理 -->
<template>
	<view class="tao-can-root">
		<view class="bottom-circle-add" @click="addCombo()">
			<image src="/static/icon/icon_add_circle_selected.svg" ></image>
		</view>
	</view>
</template>

<script>
	export default{
		props : {},
		data() {
			return {}
		},
		methods:{
			addCombo : function(){
				uni.navigateTo({
					url:'/pages/my/addCombo?type=1'
				});
			}
		}
	}
</script>

<style scoped>
	.tao-can-root{
		margin: 0 2rpx;
		padding: 0;
	}
	.bottom-circle-add image{
		position:fixed;
		display: flex;
		right: 120rpx;
		bottom:100rpx;
		z-index: 1;
		width: 80rpx;
		height: 80rpx;
		background: rgba(255,255,255,0.9);
		box-shadow: 0 0 20rpx 0 rgba(0,0,0,0.5);
		border-radius: 40rpx;
	}
</style>
