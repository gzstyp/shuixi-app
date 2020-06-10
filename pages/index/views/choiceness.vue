<template>
	<view class="prefer-content">
		<view class="combo">
			<image class="combo-left" src="../../../static/images/icon_choiceness.png"/>
			<text class="prefer-title">厨师精选</text>
			<image src="../../../static/images/next_normal.svg" mode="widthFix" class="combo-right" @click="comboMore()"/>
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
	import {hints} from '../../../api/hints.js';
	export default {
		props : {
			preferListData : ''
		},
		data () {
			return {
				preferData : [
					{
						"kid":"100001",
						"name":"澳洲牛排",
						"image":"../../static/images/index/choiceness1.png"
					},
					{
						"kid":"100002",
						"name":"哈萨里披萨",
						"image":"../../static/images/index/choiceness2.png"
					},
					{
						"kid":"100003",
						"name":"清蒸大闸蟹",
						"image":"../../static/images/index/choiceness3.png"
					}
				]
			}
		},
		methods:{
			comboMore : function(){
				hints.info('更多');
			}
		},
		created(){
		}
	}
</script>

<style>
	.prefer-content{
		margin: 30rpx 0;
		border-radius: 20rpx;
		/* background:#F5F5F5; */
		border-color: #FAA70D;
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(254,184,43, 0.6);
		outline: 0 none;
	}
	.combo{
		margin-bottom: 20rpx;
		padding-top:16rpx;
		margin-left: 14rpx;
		position: relative;
	}
	.combo-left{
		width: 29rpx;
		height: 35rpx;
	}
	.combo-right{
		width:40rpx;
		height:40rpx;
		margin-bottom:-4rpx;
		justify-content: flex-end;
		flex-grow: 5;
		position: absolute;
		top:20rpx;
		right: 20rpx;
	}
	.combo .prefer-title{
		font-size: 36rpx;
		height: 50rpx;
		line-height: 50rpx;
		margin-left: 10rpx;
	}
	.scroll{
		white-space: nowrap;
		width: 100%;
	}
	.prefer-dis{display: flex;justify-content: space-between;}
	.prefer-view{height: 266rpx;width: 300rpx; padding: 0 8rpx;}
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
