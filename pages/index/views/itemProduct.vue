<template>
	<view class="view-item-content">
		<image class="content-left" :src="item.CATE_IMAGE" mode="aspectFill"/>
		<view class="content-right">
			<view class="right-content">
				<text class="lable-name">{{item.CATENAME}}</text>
				<text class="lable-time">{{item.BEFORE || '1分钟'}}前</text>
			</view>
			<!-- 浏览量和收藏量 -->
			<view-browse :item="item"></view-browse>
			<text class="product-info">{{item.PRODUCT_INFO}}</text>
			<!-- 商家logo和商家名称、收藏图标 -->
			<view-logo-name :item="item"></view-logo-name>
		</view>
	</view>
</template>

<script>
	import viewBrowse from './viewBrowse.vue';
	import viewLogoName from './viewLogoName.vue';
	import {hints} from '../../../api/hints.js';
	export default{
		components:{
			viewBrowse,
			viewLogoName
		},
		props : {
			item : null
		},
		data() {
			return {

			}
		},
		methods:{
			enshrineProduct : function(kid){
				hints.info(kid);
			}
		}
	}
</script>

<style scoped>
	/* item */
	.view-item-content{
		display: flex;
		margin-top:16rpx;
	}
	.content-left{
		margin-left:2rpx;
		height:220rpx;
		width:292rpx;
	}
	.content-right{
		margin-left:14rpx;
	}
	.right-content{
		display: flex;
		justify-content:space-between;
		position: relative;
	}
	/* 新品名称 */
	.lable-name{
		font-size:32rpx;
		display: inline-block;
		white-space: nowrap;
		width:280rpx;
		overflow: hidden;
		text-overflow:ellipsis;
		color: #FEB82B;
	}
	/* 提示时间 */
	.lable-time{
		font-size:26rpx;
		color: #999999;
		position: relative;
		top:-4rpx;
		right:0;
	}
	/* 新品介绍 */
	.product-info{
		width:380rpx;
		font-size:30rpx;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient:vertical;
	}
</style>
