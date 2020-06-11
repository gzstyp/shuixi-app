<template>
	<view class="view-head-root">
		<image class="view-head-left" :src="imgsrc"/>
		<text class="view-head-label">{{label}}</text>
		<image src="/static/images/next_normal.svg" mode="widthFix" class="view-head-right" @click="headMore()"/>
	</view>
</template>

<script>
	import {hints} from '../../../api/hints.js';
	export default{
		props : {
			imgsrc:null,
			label:null,
			objects : {
				type : Object,
				default : null
			}
		},
		methods : {
			headMore : function(){
				var _objects = this.objects;
				if(_objects){
					hints.info(_objects.kid);
				}else{
					hints.info('获取数据失败');
				}
			}
		}
	}
</script>

<style scoped>
	.view-head-root{
		margin-bottom: 20rpx;
		padding-top:16rpx;
		margin-left: 14rpx;
		position: relative;
	}
	.view-head-root .view-head-left{
		width: 29rpx;
		height: 35rpx;
	}
	.view-head-root .view-head-label{
		font-size: 36rpx;
		height: 50rpx;
		line-height: 50rpx;
		margin-left: 10rpx;
	}
	.view-head-root .view-head-right{
		width:40rpx;
		height:40rpx;
		margin-bottom:-4rpx;
		justify-content: flex-end;
		flex-grow: 5;
		position: absolute;
		top:20rpx;
		right: 20rpx;
	}
	
</style>
