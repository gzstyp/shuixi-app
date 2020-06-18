<!-- 优选套餐 -->
<template>
	<view class="prefer-content">
		<item-head ref="itemViewHead" :itemData="itemData"></item-head>
		<scroll-view scroll-x="true" class="scroll" scroll-with-animation="true">
			<view class="horizontal-roll-container">
				<block v-for="(item,index) in preferData" :key="index">
					<view class="horizontal-roll-item">
						<image :src="item.IMAGE" mode="aspectFill"/>
						<text>{{item.CATENAME}}</text>
					</view>
				</block>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import itemHead from './itemHead.vue';
	import {hints} from '../../../api/hints.js';
	export default {
		components:{
			itemHead
		},
		data () {
			return {
				itemData : {
					imgsrc : "/static/images/index/icon/youxuantaocan.svg",
					label : "优选套餐",
					objects : {
						"type":1,
						"label" : '优选套餐',
						"handler" : null
					}
				},
				preferData : [
					{
						"CATENAME":"红烧肉(1-2套餐)",
						"IMAGE":"/static/images/scroll-view-01.png"
					},
					{
						"CATENAME":"红烧狮子头(3-5人套餐)",
						"IMAGE":"/static/images/scroll-view-02.png"
					},
					{
						"CATENAME":"清蒸鲈鱼(3-5人套餐)",
						"IMAGE":"/static/images/scroll-view-03.png"
					},
					{
						"CATENAME":"剁椒鱼头(4-7人套餐)",
						"IMAGE":"/static/images/scroll-view-04.png"
					}
				]
			}
		},
		methods:{},
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
	.scroll{
		white-space: nowrap;
		width: 100%;
	}
	/* 水平滚动 */
	.horizontal-roll-container{display: flex;justify-content: space-between;}
	.horizontal-roll-item{height: 266rpx;width: 300rpx; padding: 0 8rpx;}
	.horizontal-roll-item image{width: 300rpx;height: 200rpx;border-radius: 10rpx;}
	.horizontal-roll-item text{
		height: 45rpx;
		line-height: 45rpx;
		display: -webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:1;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	/* 伪元素处理,其中的nth-child(1)是 image 标签 */
	.horizontal-roll-item text:nth-child(2){font-size: 30rpx;align-items: center;}
	/* 伪元素处理,表示的是从第2个元素开始是上下间距是0,左右间距是7rpx */
	.horizontal-roll-item:nth-child(2){padding:0 7rpx !important;}
</style>
