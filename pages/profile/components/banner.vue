<template>
	<view>
		<view class="search-cont">
			<view class="search">
				<image src="../../../static/images/icon_search.png" mode="widthFix" class="search-left"></image>
				<input type="text" placeholder="请输入关键字" disabled/>
			</view>
		</view>
		<!-- 自定义轮播 -->
		<!-- <view>
			<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="5000" :duration="500">
				<block v-for="(item,index) in lable" :key="index">
					<swiper-item>
						<block v-for="(listData,index) in item" key="index">
						<view>
							<image :src="listData.img" mode="widthFix" style="width: 20rpx;height: 20rpx;"></image>
							<text>{{listData.title}}</text>
						</view>
						</block>
					</swiper-item>
				</block>
			</swiper>
		</view> -->
		<view class="swiper-view">
			<swiper :indicator-dots="false" :autoplay="true" :interval="2000" :duration="1000" @change="bannerFun">
				<block v-for="(item,index) in lable" :key="index">
					<swiper-item>
						<view class="swiper-item">
							<block v-for="(listData,index) in item" key="index">
							<view class="contenting-img">
								<image :src="listData.img" mode="widthFix" class="uploadimg"/>
								<text>{{listData.title}}</text>
							</view>
							</block>
						</view>
					</swiper-item>
				</block>
			</swiper>
			<!-- 指示灯 -->
			<view class="instruct-view">
				<block v-for="(item,index) in lable.length" :key="index">
					<view class="instruct" :class="{active:index == current}"></view>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current : 0,
				//二维数组
				lable : [
					[
						{
							"img" : "../../static/images/img-meishi1.png",
							"title":"麻辣烫"
						},
						{
							"img" : "../../static/images/img-meishi2.png",
							"title":"青椒鱼"
						},
						{
							"img" : "../../static/images/img-meishi3.png",
							"title":"西红柿炒蛋"
						},
						{
							"img" : "../../static/images/icon-wx.png",
							"title":"日韩料理"
						}
					],
					[
						{
							"img" : "../../static/images/img-meishi3.png",
							"title":"野生蔬菜"
						},
						{
							"img" : "../../static/images/img-meishi2.png",
							"title":"超市便利"
						},
						{
							"img" : "../../static/images/img-meishi1.png",
							"title":"西红柿炒蛋"
						},
						{
							"img" : "../../static/images/icon-qq.png",
							"title":"德国汉堡"
						}
					],
					[
						{
							"img" : "../../static/images/img-meishi3.png",
							"title":"野生蔬菜"
						},
						{
							"img" : "../../static/images/img-meishi2.png",
							"title":"超市1"
						},
						{
							"img" : "../../static/images/img-meishi1.png",
							"title":"西红2"
						},
						{
							"img" : "../../static/images/icon-qq.png",
							"title":"德国2"
						}
					]
				]
			}
		},
		methods:{
			bannerFun : function(event){
				this.current = event.detail.current;
			}
		}
	}
</script>
<style scoped>
	.search-text{
		padding: 0 10rpx;
	}
	/* 搜索开始 */
	.search-left{
		margin: auto 0 auto 20rpx;
		width: 40rpx;
		height: 40rpx;
	}
	.search{
		height: 70rpx;
		line-height: 70rpx;
		width: 100%;
		display: flex;
		flex-direction: flex;
		background: #eff3f4;
		border-radius:14rpx;
	}
	.search input{
		height: 70rpx;
		line-height: 70rpx;
		width: 100%;
		font-size: 25rpx;
		padding-left: 10rpx;
		color: #666666;
	}
	.search-cont{
		display: flex;
		justify-content: space-between;
		height: 70rpx;
		line-height: 70rpx;
		align-items: center;
		margin-top: 30rpx;
	}
	/* 搜索结束 */
	/* 轮播开始 */
	swiper{height: 320rpx !important;}
	/* 九宫格 */
	.swiper-item{
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		height: 320rpx;
	}
	.contenting-img{
		width: calc(100%/5 - 12rpx) !important;
		margin: 6rpx;
		position: relative;
		text-align: center;
	}
	.contenting-img text{margin-top: 20rpx;font-size: 25rpx;}
	.uploadimg{
		width: 70rpx;
		height: 70rpx;
		border-radius: 50rpx;
		display: block;
		margin: 0 auto;
	}
	/* 轮播结束 */
	/* 指示灯 */
	.instruct-view{
		display: flex;
		justify-content: center;
		padding-top: 10rpx;
	}
	.instruct{
		background: #e6e6e6;
		height: 10rpx;
		width: 30rpx;
		border-radius: 50rpx;
		margin: 0 10rpx;
	}
	.active{background: #fba222 !important}
</style>
