<!-- 菜品详情 -->
<template>
	<view class="root-info-container">
		<image class="info-image" :src="foodDetail.CATE_IMAGE"></image>
		<view class="view-label">— {{foodDetail.CATENAME}} —</view>
		<view class="logo-name-pv">
			<image src="/static/list/category/pro_photo1.png"></image>
			<text class="text-right">{{foodDetail.SHOP_NAME}}</text>
			<text class="text-right">|</text>
			<text class="text-right">{{foodDetail.PVTOTAL|| '1'}}人浏览</text>
			<text class="text-right">{{foodDetail.ENSHRINE_TOTAL|| '0'}}人收藏</text>
		</view>
		<view class="view-detail">
			{{foodDetail.DETAIL}}
		</view>
		<view class="view-label">— 配料 —</view>
		<view class="cells">
			<block v-for="(item,index) in foodDetail.INGREDIENT" :key="index">
				<view class="cell">
					<view class="cell_line">
						<text class="cell-row percent-left">{{item.INGREDIENT_NAME}}</text>
						<text class="cell-row percent-right">{{item.UNITS}}</text>
					</view>
				</view>
			</block>
		</view>
		<view class="view-label">— 烹饪步骤 —</view>
		<view >
			<image src="/static/cateinfo/step01.png" style="width: 100%;height: 290rpx;"></image>
			<view style="font-weight: bold;">第一步</view>
			<view style="font-size: 26rpx;">把鸡蛋和蛋白分开到两个不同的容器里,鸡蛋放室温退冰，然后把蛋黄、蛋白分开放置在调理盆内。</view>
		</view>
		<view >
			<image src="/static/cateinfo/step02.png" style="width: 100%;height: 290rpx;"></image>
			<view style="font-weight: bold;">第二步</view>
			<view style="font-size: 26rpx;">蛋黄与砂糖40g混合，用打蛋器搅打到变淡质地浓稠,蛋黄加牛奶、玉米油、低筋面粉搅拌均匀备用</view>
		</view>
		<view >
			<image src="/static/cateinfo/step03.png" style="width: 100%;height: 290rpx;"></image>
			<view style="font-weight: bold;">第三步</view>
			<view style="font-size: 26rpx;">面粉、玉米粉过筛加入拌均匀。蛋白用电动打蛋器打发，过程中加入砂糖40g打到举起蛋白直挺不滴落就好。</view>
		</view>
		<view >
			<image src="/static/cateinfo/step04.png" style="width: 100%;height: 290rpx;"></image>
			<view style="font-weight: bold;">第四步</view>
			<view style="font-size: 26rpx;">分3次将蛋白霜加入蛋黄糊里，用刮刀由下往上翻搅成均匀的面糊。 (这步骤别拌太久)</view>
		</view>
		<view >
			<image src="/static/cateinfo/step05.png" style="width: 100%;height: 290rpx;"></image>
			<view style="font-weight: bold;">第五步</view>
			<view style="font-size: 26rpx;">放进已预热的烤箱(180℃)，用170℃烘烤30分钟，完成后快速取出，向桌面轻摔几下倒过来放冷。</view>
		</view>
		<view class="view-label">— 小贴士 —</view>
		<view class="view-detail">
			{{foodDetail.TIPS}}
		</view>
		<view class="view-label">— 评论 —</view>
		<view class="horizontal-line"></view>
		<itemComment :comments="comments"></itemComment>
	</view>
</template>

<script>
	import itemComment from './items/itemComment.vue';
	export default{
		components:{
			itemComment
		},
		props : {},
		data() {
			return {
				"foodDetail" : {
					"CATE_IMAGE" : "/static/cateinfo/cmsgny.png",
					"CATENAME":"草莓奶油蛋糕",
					"SHOP_NAME":"羊城西饼",
					"PVTOTAL":"1022w",
					"ENSHRINE_TOTAL":"30w",
					"DETAIL":"草莓奶油蛋糕 是一款西式甜品，热量较高。适合大部分人食用，不过孕妇、新妈妈和儿童等特殊人群尽量少食用奶油蛋糕。由于奶油蛋糕是由面粉、糖、油脂、奶油和蛋类制成的，这些原料营养丰富，含水量高，极易被细菌侵染，再加上蛋糕本身残存的耐高温细菌的生息繁衍，很容易使蛋糕变质，所以奶油蛋糕不宜久存。",
					"INGREDIENT":[
						{
							"INGREDIENT_NAME":"低筋面粉",
							"UNITS":"60g"
						},
						{
							"INGREDIENT_NAME":"淡奶油",
							"UNITS":"300g"
						},
						{
							"INGREDIENT_NAME":"鸡蛋",
							"UNITS":"4个"
						},
						{
							"INGREDIENT_NAME":"芒果",
							"UNITS":"1个"
						},
						{
							"INGREDIENT_NAME":"草莓",
							"UNITS":"6个"
						},
						{
							"INGREDIENT_NAME":"牛奶",
							"UNITS":"40g"
						},
						{
							"INGREDIENT_NAME":"玉米油",
							"UNITS":"40g"
						},
						{
							"INGREDIENT_NAME":"白糖",
							"UNITS":"90g"
						}
					],
					"TIPS":"1、发现草莓是百搭水果，变换切法可以起到很棒的装饰效果。2、裱花蛋糕，抹奶油之前，一定要将蛋糕渣清理干净。3、谁能告诉我怎么样把杏仁片贴得又快又好？谢谢。"
				},
				"comments":[
					{
						"NICKNAME":"爱美的蛋糕芝士",
						"USER_IMAGE":"/static/cateinfo/head/user_image01.png",
						"DETAILS":"感谢分享，之前一直想做草莓奶油蛋糕了,在网上找了很多资料相关的资料，视频都没有这么细致，今日看了受益匪浅……",
						"REPLY_COMMENT":[
							{
								"NICKNAME" : "喜优优",
								"CONTENT" : "同上，非常不错的教学，已点赞收藏"
							},
							{
								"NICKNAME" : "龙大侠",
								"CONTENT" : "不错不错，口感非常Nice哦"
							},
							{
								"NICKNAME" : "龙津桥",
								"CONTENT" : "非常的喜欢啊，感谢感谢哦"
							}
						]
					},
					{
						"NICKNAME":"西美东方不老",
						"USER_IMAGE":"/static/cateinfo/head/user_image02.png",
						"DETAILS":"现在很流行韩式裱花，做出来的蛋糕精致漂亮，简直舍不得吃了",
						"REPLY_COMMENT":[
							{
								"NICKNAME" : "冬瓜西皮",
								"CONTENT" : "同上，已点赞"
							},
							{
								"NICKNAME" : "二月三十一号",
								"CONTENT" : "非常ok啦"
							},
							{
								"NICKNAME" : "我是学霸",
								"CONTENT" : "非常的喜欢哦"
							}
						]
					}
				]
			}
		},
		methods:{}
	}
</script>

<style scoped>
	.root-info-container{
		margin-bottom:14rpx;
		margin-left:6rpx;
		margin-right:6rpx;
	}
	.info-image{
		width: 100%;
		height: 300rpx;
	}
	.view-label{
		text-align: center;
		width: 100%;
		height: 44rpx;
		line-height: 44rpx;
		font-size:34rpx;
		font-weight: bold;
		margin: 16rpx 0;
	}
	.logo-name-pv{
		width: 100%;
		height:64rpx;
		text-align: center; 
	}
	.logo-name-pv image{
		width:64rpx;
		height:64rpx;
		vertical-align:middle;
	}
	.logo-name-pv text{
		font-size: 30rpx;
		color: #808080;
	}
	.text-right{
		margin-left: 10rpx;
	}
	.view-detail{
		margin: 10rpx 0;
		font-size: 30rpx;
	}
	.cells {
		background: #ffffff;
		margin-left:10rpx;
		margin-right:10rpx;
		position: relative;
		box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.3);
	}
	.cells::before,.cells::after {
		content: '';
		position: absolute;
		z-index: -1;
		bottom: 30rpx;
		left: 20rpx;
		width: 50%;
		height: 20%;
		box-shadow: 0 30rpx 20rpx rgba(0, 0, 0, 0.2);
		transform: rotate(-3deg);
	}
	.cells::after {
		right: 20rpx;
		left: auto;
		transform: rotate(3deg);
	}
	.cell {
		position: relative;
		display: flex;
		padding:20rpx 10rpx 20rpx 0rpx;/* 内边距 */
		transition: background-color 0.3s;
		font-size: 32rpx;
	}
	.cell:not(:last-child):before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0rpx;
		right: 0;
		border-bottom: 1px solid #000000;
		transform-origin: 0% 100%;
		transform: scaleY(0.5);
	}
	/* 右边的小箭头
	.cell:after {
		content: ' ';
		display: inline-block;
		height: 12rpx;
		width: 12rpx;
		border-width: 4rpx 4rpx 0 0;
		border-color: #c6c6c6;
		border-style: solid;
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg);
		position: absolute;
		top: 50%;
		right: 45rpx;
		margin-top: -8rpx;
	} */
	.cell_line {
		flex: 1;
		justify-content: space-between;
		display: flex;
	}
	.cell-row{
		height:40rpx;
		line-height:40rpx;
		display: -webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:1;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.percent-left{
		width: 70%;
		padding-left: 20rpx;
	}
	.percent-right{
		width: 30%;
	}
	.cell.hover {
		background-color: #eeeeee;
	}
	.horizontal-line{
		width: 100%;
		border-bottom: 1px solid #808080;
	}
</style>
