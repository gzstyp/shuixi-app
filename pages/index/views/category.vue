<template>
	<view class="cate-category">
		<scroll-view scroll-x="true" class="scroll" scroll-with-animation="true">
			<view class="prefer-dis">
				<block v-for="(item,index) in categoryList">
					<view class="prefer-view">
						<image :src="item.image" mode="aspectFill"/>
						<text>{{item.lable}}</text>
					</view>
				</block>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				categoryList : [
					{
						"kid" : "10001",
						"lable" : "凉菜类",
						"image" : "../../static/images/category1.png"
					},
					{
						"kid" : "10002",
						"lable" : "甜食类",
						"image" : "../../static/images/category2.png"
					},
					{
						"kid" : "10003",
						"lable" : "面食类",
						"image" : "../../static/images/category3.png"
					},
					{
						"id" : "10004",
						"lable" : "炒菜类",
						"image" : "../../static/images/category4.png"
					}
				]
			}
		},
	}
</script>

<style scoped>
	.cate-category{
		height: 175rpx;
		width: 100%;
		border-radius: 20rpx;
		background:#F5F5F5;
		margin-top:20rpx;
	}
	.scroll{
		white-space: nowrap;
		width: 100%;
	}
	.prefer-dis{display: flex;justify-content: space-between;padding: 16rpx 0;}
	.prefer-view{padding: 0 20rpx;}
	.prefer-view image{width: 110rpx;height: 110rpx;}
	.prefer-view text{
		height: 40rpx;
		line-height: 40rpx;
		font-size: 30rpx;
		text-align: center;
		display: -webkit-box;
		-webkit-box-orient:vertical;
		-webkit-box-clamp:1;
		overflow:hidden;
	}
</style>
