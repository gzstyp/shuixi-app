<!-- 厨师精选 -->
<template>
	<view class="prefer-content">
		<item-head ref="itemViewHead" :itemData="itemData"></item-head>
		<scroll-view scroll-x="true" class="scroll" scroll-with-animation="true">
			<view class="prefer-dis">
				<block v-for="(item,index) in preferData" :key="index">
					<view class="prefer-view">
						<image :src="item.IMAGE" mode="aspectFill"/>
						<text @click="viewInfoByName(item.KID)">{{item.CATENAME}}</text>
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
					imgsrc : "/static/images/index/icon/chushijingxuan.svg",
					label : "厨师精选",
					objects : {
						"type":2,
						"label" : '厨师精选',
						"handler" : null
					}
				},
				preferData : [
					{
						"KID":"100001",
						"CATENAME":"澳洲牛排",
						"IMAGE":"/static/images/index/choiceness1.png"
					},
					{
						"KID":"100002",
						"CATENAME":"哈萨里披萨",
						"IMAGE":"/static/images/index/choiceness2.png"
					},
					{
						"KID":"100003",
						"CATENAME":"清蒸大闸蟹",
						"IMAGE":"/static/images/index/choiceness3.png"
					}
				]
			}
		},
		methods:{
			viewInfoByName : function(kid){
				uni.navigateTo({
				    url: '/pages/list/viewCateInfo?type=2&kid='+kid
				});
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
