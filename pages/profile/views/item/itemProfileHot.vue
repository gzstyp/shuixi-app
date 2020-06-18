<!-- 历史|人文|风貌下边的热门推荐 -->
<template>
	<view class="item-profile-container">
		<image class="item-profile-image" :src="item.IMAGE"></image>
		<view class="title-pv-follow">
			<view class="left-title">
				<view class="view-text-container">
					<text class="text-title" @click="viewInfo(item.KID,item.IMAGE,item.TITLE)">{{item.TITLE}}</text>
				</view>
				<view class="pv-container">
					<image class="left-icon" src="/static/images/eye_normal.svg"></image>
					<view class="view-pv">
						<text class="pv-text">{{item.PVTOTAL || '1'}}浏览</text>
					</view>
				</view>
			</view>
			<view class="right-follow" hover-class="follow-text-hover"><text class="follow-text">关注</text></view>
		</view>
		<view class="detail-info" @click="viewInfo(item.KID,item.IMAGE,item.TITLE)">
			{{item.DETAILS}}
		</view>
	</view>
</template>

<script>
	export default{
		props : {item:null},
		methods:{
			viewInfo : function(kid,image,title){
				uni.navigateTo({
				    url : '/pages/info/profileInfo?type=1&kid='+kid+'&title='+title+'&image='+image
				});
			}
		}
	}
</script>

<style scoped>
	.item-profile-container{
		border-radius:20rpx;
		width: 100%;
		height: 480rpx;
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 6px rgba(176, 176, 176, 0.6);
		outline: 0 none;
		margin-bottom: 16rpx;
	}
	.item-profile-image{
		height: 290rpx;
		width: 100%;
	}
	.title-pv-follow{
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 68rpx;
	}
	.left-title{
		width: 80%;
		height: 68rpx;
		line-height:68rpx;
		display: flex;
		justify-content: space-between;
		vertical-align: middle;
	}
	.view-text-container{
		width: 65%;
	}
	.text-title{
		font-weight: 600;
		font-size: 35rpx;
		margin-left: 6rpx;
		height: 68rpx;
		line-height: 68rpx;
		display: -webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:1;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.pv-container{
		width: 35%;
		display: flex;
		justify-content: flex-start;
	}
	.left-icon{
		width: 36rpx;
		height: 36rpx;
		margin-top: 15rpx;
	}
	.view-pv{
		height: 68rpx;
		line-height: 68rpx;
		vertical-align: middle;
	}
	.pv-text{
		color: #808080;
		font-size: 28rpx;
		display: -webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:1;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.right-follow{
		width: 20%;
		height: 68rpx;
		line-height:68rpx;
		vertical-align: middle;/* 垂直居中 */
		text-align: center;/* 水平居中 */
		color: #FEB82B;
	}
	.follow-text{
		border: 2rpx solid #FEB82B;
		padding: 8rpx 12rpx;
		font-size: 30rpx;
	}
	.follow-text-hover{
		color: #000000;
	}
	.detail-info{
		font-size: 34rpx;
		line-height: 35rpx;
		padding-left: 8rpx;
		display: -webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:3;
		text-overflow: ellipsis;
		overflow: hidden;
	}
</style>
