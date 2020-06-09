<template>
	<view class="prefer-content">
		<view class="combo">
			<image src="../../../static/images/combo.png"></image>
			<text class="prefer-title">优选套餐</text>
		</view>
		<scroll-view scroll-x="true" class="scroll" scroll-with-animation="true">
			<view class="prefer-dis">
				<block v-for="(item,index) in preferData" :key="index">
					<view class="prefer-view">
						<image :src="item.image" mode="aspectFill"/>
						<text>{{item.name}}</text>
					</view>
				</block>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props : {
			preferListData : ''
		},
		data () {
			return {
				preferData : [
					{
						"name":"红烧肉(1-2套餐)",
						"image":"../../static/images/scroll-view-01.png"
					},
					{
						"name":"红烧狮子头(3-5人套餐)",
						"image":"../../static/images/scroll-view-02.png"
					},
					{
						"name":"清蒸鲈鱼(3-5人套餐)",
						"image":"../../static/images/scroll-view-03.png"
					},
					{
						"name":"剁椒鱼头(4-7人套餐)",
						"image":"../../static/images/scroll-view-04.png"
					}
				]
			}
		},
		methods:{
		},
		created(){
		}
	}
</script>

<style>
	.prefer-content{margin: 30rpx 0;}
	.combo{
		margin-bottom: 20rpx;
	}
	.combo image{
		width: 29rpx;
		height: 35rpx;
	}
	.combo .prefer-title{
		font-size: 34rpx;
		height: 50rpx;
		line-height: 50rpx;
		margin-left: 10rpx;
	}
	.scroll{
		white-space: nowrap;
		width: 100%;
		height: 300rpx;
	}
	.prefer-dis{display: flex;justify-content: space-between;}
	.prefer-view{height: 300rpx;width: 300rpx; padding: 0 8rpx;}
	.prefer-view image{width: 300rpx;height: 200rpx;border-radius: 10rpx;}
	.prefer-view text{
		height: 45rpx;
		line-height: 45rpx;
		display: -webkit-box;/* 文字超出隐藏 */
		-webkit-box-orient:vertical;/* 文字超出隐藏 */
		-webkit-box-clamp:1;/* 文字超出1行隐藏 */
		overflow:hidden;/* 文字超出隐藏 */
	}
	/* 伪元素处理,其中的nth-child(1)是 image 标签 */
	.prefer-view text:nth-child(2){font-size: 30rpx;align-items: center;}
	/* 伪元素处理,表示的是从第2个元素开始是上下间距是0,左右间距是7rpx */
	.prefer-view:nth-child(2){padding:0 7rpx !important;}
</style>
