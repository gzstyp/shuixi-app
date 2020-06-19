<!-- 登录页面 -->
<template>
	<view class="login-root">
		<view class="login-container">
			<view class="top-text">
				<view class="diandiandidi">
					记录生活点点滴滴
				</view>
				<view>
					开启美食生活
				</view>
				<view>
					愿你每一餐都有美味相伴
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props : {},
		data() {
			return {}
		},
		methods:{},
		created(){}
	}
</script>

<style scoped>
	.login-root{
		margin: 0 2rpx;
		padding: 0;
		display: flex;
		justify-content:center;
		align-items:Center;
	}
	.login-container{
		margin-top: 50rpx;
	}
	.top-text{
		width: 100%;
		justify-content:center;
		align-items:Center;
		background: #EFEFF4;
	}
	.diandiandidi{
		font-size: 35rpx;
		width: 600rpx;
		font-weight: bold;
		align-items: center;
		justify-content:center;
		background:#909090;
	}
</style>
