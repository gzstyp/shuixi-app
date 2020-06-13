<!--首页搜索-->
<template>
	<view class="search-container">
		<view class="search-view" @click="search()">
			<image src="/static/images/icon_search.png" mode="widthFix" class="search-left"></image>
			<input type="text" placeholder="请输入关键字" disabled/>
		</view>
	</view>
</template>

<script>
	import {hints} from '../../../api/hints.js';
	export default {
		data() {
			return {
				current : 0
			}
		},
		methods:{
			search : function(){
				uni.navigateTo({
				    url: '/pages/search/index?from=1&type=2'
				});
			}
		}
	}
</script>
<style scoped>
	/* 搜索开始 */
	.search-container{
		display: flex;
		justify-content: space-between;
		height: 70rpx;
		line-height: 70rpx;
		align-items: center;
		margin-top: 20rpx;
	}
	.search-view{
		height: 70rpx;
		line-height: 70rpx;
		width: 100%;
		display: flex;
		flex-direction: flex;
		background: #eff3f4;
		border-radius:14rpx;
	}
	.search-left{
		margin: auto 0 auto 20rpx;
		width: 40rpx;
		height: 40rpx;
	}
	.search-view input{
		height: 70rpx;
		line-height: 70rpx;
		width: 100%;
		font-size: 32rpx;
		padding-left: 10rpx;
		color: #666666;
	}
</style>
