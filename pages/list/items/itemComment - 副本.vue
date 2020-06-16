<template>
	<view>
		<block v-for="(item,index) in comments" :key="index">
			<view class="item-comment-container">
				<view class="view-top-container">
					<view class="container-left">
						<image class="comment-head" :src="item.USER_IMAGE"></image>
						<text class="comment-username">{{item.NICKNAME}}</text>
					</view>
					<view class="container-right">
						<view class="container-line">
							<image class="line-image" src="/static/icon/comment_normal.svg"></image>
							<text class="line-text">评论</text>
						</view>
						<view class="container-line text-right">
							<image class="line-image" src="/static/icon/heart_normal.svg"></image>
							<text class="line-text">赞</text>
						</view>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default{
		props : {comments:null},
		data() {
			return {}
		},
		methods:{}
	}
</script>

<style scoped>
	.item-comment-container{
		margin-top: 18rpx;
	}
	.view-top-container{
		display: flex;
		height: 64rpx;
		justify-content: space-between;
	}
	.container-left{
		width: 70%;
		height:64rpx;
		background: #4CA2FF;
	}
	.comment-head{
		width:64rpx;
		height:64rpx;
		vertical-align:middle;
	}
	.comment-username{
		font-size: 30rpx;
		color: #000000;
		margin-left: 8rpx;
		overflow: hidden;
	}
	.container-right{
		width: 30%;
		height: 64rpx;
		background: #4CD964;
		display: flex;
	}
	.container-line{
		width:50%;
		height:64rpx;
	}
	.line-image{
		margin-top: 7rpx;/* (64-50)/2=7 */
		width:50rpx;
		height:50rpx;
		vertical-align:middle;
	}
	.line-text{
		font-size: 24rpx;
		margin-left: 4rpx;
	}
	.icon-zan-container{
		width:35%;
		height:64rpx;
	}
	.icon-zan-image{
		width:35%;
		height:64rpx;
	}
	.text-right{
		text-align: right;
		padding-right: 14rpx;
	}
</style>
