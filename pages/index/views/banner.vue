<template>
	<view class="swiper-view">
		<swiper :indicator-dots="false" :autoplay="true" :interval="2000" :duration="1000" @change="bannerFun">
			<block v-for="(item,index) in bannerList" :key="index">
				<swiper-item>
					<image :src="item.image" mode="widthFix" class="uploadimg"/>
				</swiper-item>
			</block>
		</swiper>
		<!-- 指示灯 -->
		<view class="instruct-view">
			<block v-for="(item,index) in bannerList.length" :key="index">
				<view class="instruct" :class="{active:index == current}"></view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current : 0,
				bannerList : [
					{
						"kid":"10001",
						"image":"/static/images/banner1.png"
					},
					{
						"kid":"10002",
						"image":"/static/images/banner2.png"
					},
					{
						"kid":"10003",
						"image":"/static/images/banner3.png"
					}
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
	/* 轮播开始 */
	.swiper-view{
		margin: 10rpx 0;
	}
	swiper{height: 350rpx !important;}
	.contenting-img{
		width: calc(100%/5 - 12rpx) !important;
		margin: 6rpx;
		position: relative;
		text-align: center;
	}
	.uploadimg{
		width:98%;
		height: auto;
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
