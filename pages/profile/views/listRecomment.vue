<!-- 历史|人文|风貌的文章评论列表 -->
<template>
	<view class="recommend-list-container">
		<block v-for="(item,index) in listData" :key="index">
			<view class="recommend-list-item">
				<view class="container-left-right">
					<view class="container-view-left">
						<image :src="item.PHOTO"></image>
						<view class="show-label">
							<text>{{item.NICKNAME}}</text>
						</view>
					</view>
				</view>
				<view class="view-comment-describe">
					<text>{{item.COMMENT}}</text>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default{
		props : {},
		data() {
			return {
				kid : null,
				listData : [
					{
						"KID":"100101",
						"PHOTO":"/static/head/user_image01.png",
						"NICKNAME":"旅行者",
						"COMMENT":"很美的一道风景，那里的人都很热情，很多很多的好吃的，当然好玩的也不少，下次带着家人一起."
					},
					{
						"KID":"100102",
						"PHOTO":"/static/head/user_image01.png",
						"NICKNAME":"猪八戒",
						"COMMENT":"已去过，确实很美的一道风景,有时间再去1次。"
					},
					
				]
			}
		},
		methods:{},
		onLoad(options){
			this.kid = options.kid;
		}
	}
</script>

<style scoped>
	.recommend-list-container{
		margin-top: 6rpx;
		margin-left: 6rpx;
		margin-right: 4rpx;
	}
	.recommend-list-item{
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 6px rgba(176, 176, 176, 0.6);
		outline: 0 none;
		padding-bottom: 10rpx;
		margin-bottom: 20rpx;
	}
	/* 左右两边布局的容器 */
	.container-left-right{
		width: 100%;
		height: 100rpx;
		display: flex;
		justify-content: space-between;
	}
	/* 左右两边-左边 */
	.container-view-left{
		height: 100rpx;
		line-height:100rpx;
		width: 60%;
		display: flex;
		justify-content: flex-start;
	}
	/* 左右两边-左边->图标|图片 */
	.container-view-left image{
		   height: 100rpx;
		   width: 100rpx;
		   text-align: center;
	}
	/* 左右两边-左边->文字内容 */
	.show-label{
		font-size: 35rpx;
		margin-left: 6rpx;
		display: -webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:1;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	/* 评论信息 */
	.view-comment-describe{
		font-size: 30rpx;
		line-height: 31rpx;
		padding-left: 4rpx;
		margin-top: 16rpx;
	}
</style>
