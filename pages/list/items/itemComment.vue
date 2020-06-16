<!--菜品详细信息-评论的头部信息-->
<template>
	<view>
		<block v-for="(item,index) in comments" :key="index">
			<view class="item-comment-container">
				<!-- 头部 -->
				<view class="view-top-container">
					<view class="container-left">
						<image class="comment-head" :src="item.USER_IMAGE"></image>
						<text class="comment-username">{{item.NICKNAME}}</text>
					</view>
					<view class="container-right">
						<view class="icon-comment-container" @click="comment(item.KID)">
							<image class="icon-comment-image" src="/static/icon/comment_normal.svg"></image>
							<text class="icon-comment-text">评论</text>
						</view>
						<view class="icon-zan-container" @click="dianzan(item.KID)">
							<image class="icon-zan-image" src="/static/icon/heart_normal.svg"></image>
							<text class="icon-zan-text">赞</text>
						</view>
					</view>
				</view>
				<!-- 评论信息 -->
				<view class="details">{{item.DETAILS}}</view>
				<view class="reply-comment">
					<block v-for="(comment,index) in item.REPLY_COMMENT" :key="index">
						<view class="list-comment">
							<text class="name-comment-info">{{comment.NICKNAME}} ：{{comment.CONTENT}}</text>
						</view>
					</block>
				</view>
				<view class="horizontal-line"></view>
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
		methods:{
			comment : function(kid){
				console.info('评论:'+kid);
			},
			dianzan : function(kid){
				console.info('点赞:'+kid);
			}
		}
	}
</script>

<style scoped>
	.item-comment-container{
		margin-top: 18rpx;
	}
	/* 头部的-用户头像-昵称-评论-点赞 */
	.view-top-container{
		display: flex;
		height: 64rpx;
		justify-content: space-between;
	}
	/* 头部的-左边->用户头像-昵称*/
	.container-left{
		width: 73%;
		height:64rpx;
	}
	/* 头像 */
	.comment-head{
		width:64rpx;
		height:64rpx;
		vertical-align:middle;
	}
	/* 昵称 */
	.comment-username{
		font-size: 30rpx;
		color: #000000;
		margin-left: 8rpx;
		overflow: hidden;
	}
	/* 头部的-右边->评论-点赞 */
	.container-right{
		width: 27%;
		height: 64rpx;
		display: flex;
	}
	/* 评论(图标+评论的容器) */
	.icon-comment-container{
		width:55%;
		height:64rpx;
	}
	/* 点赞(图标+赞的容器) */
	.icon-zan-container{
		width:45%;
		height:64rpx;
	}
	.icon-comment-image,.icon-zan-image{
		margin-top: 7rpx;/* (64-50)/2=7 */
		width:45rpx;
		height:45rpx;
		vertical-align:middle;
	}
	.icon-comment-text,.icon-zan-text{
		font-size: 24rpx;
		margin-left: 4rpx;
	}
	.details{
		margin-left: 68rpx;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		font-size: 30rpx;
		line-height: 30rpx;
	}
	.reply-comment{
		margin-left: 68rpx;
		margin-top: 6rpx;
		background: #F1F1F1;
		margin-right: 12rpx;
	}
	.name-comment-info{
		font-size: 30rpx;
		line-height: 30rpx;
	}
	.horizontal-line{
		width: 100%;
		border-bottom: 1px solid #8a8a8a;
		margin-top: 18rpx;
	}
</style>
