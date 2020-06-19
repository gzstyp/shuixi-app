<!-- 实时新品-item项 -->
<template>
	<view class="new-item-details">
		<image class="details-left" :src="item.CATE_IMAGE" mode="aspectFill"/>
		<view class="details-right">
			<view class="catename-before">
				<view class="catename-before-left oneline" @click="viewInfoByName(item.KID)">{{item.CATENAME}}</view>
				<view class="catename-before-right oneline">{{item.BEFORE || '1分钟'}}前</view>
			</view>
			<browseEnshrine :item="item"></browseEnshrine>
			<view class="container-describe">
				<text class="text-describe oneline">{{item.PRODUCT_INFO}}</text>
			</view>
			<logoName :item="item"></logoName>
		</view>
	</view>
</template>

<script>
	import browseEnshrine from '../element/browseEnshrine.vue';
	import logoName from '../element/logoName.vue';
	import {hints} from '../../../api/hints.js';
	export default{
		components:{
			browseEnshrine,
			logoName
		},
		props : {
			item : null
		},
		data() {
			return {

			}
		},
		methods:{
			viewInfoByName : function(kid){
				uni.navigateTo({
				    url: '/pages/list/viewCateInfo?type=3&kid='+kid
				});
			}
		}
	}
</script>

<style scoped>
	/* item */
	.new-item-details{
		display: flex;
		margin-top:16rpx;
		height:230rpx;
	}
	.details-left{
		margin-left:2rpx;
		height:230rpx;
		width:292rpx;
	}
	.details-right{
		margin-left:10rpx;
		width: 100%;
	}
	.catename-before{
		display: flex;
		justify-content: space-between;
		height: 32rpx;
		line-height: 32rpx;
	}
	.oneline{
		display: -webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:1;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	/* 新品名称 */
	.catename-before-left{
		width: 75%;
		height: 32rpx;
		line-height: 32rpx;
		font-size:32rpx;
		color: #FEB82B;
	}
	/* 提示时间 */
	.catename-before-right{
		width:25%;
		font-size:26rpx;
		height: 32rpx;
		line-height: 32rpx;
		color: #999999;
		text-align: right;
		margin-right:10rpx;
	}
	/* 新品介绍 */
	.container-describe{
		width: 100%;
	}
	.text-describe{
		font-size:30rpx;
		line-height:32rpx;
		height:96rpx;/* 32x3=96 */
		-webkit-line-clamp:3;
	}
</style>
