<!-- 菜品详情 -->
<template>
	<view>
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
			<view class="load-more-normal" @click="loadAll()" hover-class="load-more-hover">
				<text>查看全部评论</text>
			</view>
			<view class="pinglun-container">
				<input type="text" class="pinglun-input"/>
				<view class="pinglun-view" hover-class="pinglun-view-hover" @click="pinglunSubmit()">评论</view>
			</view>
			<view class="view-label">— 相关推荐 —</view>
			<view class="recommend-container">
				<block v-for="(item,index) in listRecommend" :key="index">
					<itemInfoRecommend :item="item"></itemInfoRecommend>
				</block>
			</view>
		</view>
		<view class="info-bottom-container">
			<view class="info-bottom-collect">
				<image class="bottom-collect-icon" src="/static/icon/collect_white.svg"></image>
				<view class="bottom-collect-text" hover-class="info-bottom-hover">收藏</view>
			</view>
			<view class="info-bottom-transpond">
				<image class="bottom-transpond-icon" src="/static/icon/transpond_white.svg"></image>
				<view class="bottom-transpond-text" hover-class="info-bottom-hover">转发</view>
			</view>
		</view>
	</view>
</template>

<script>
	import itemComment from './items/itemComment.vue';
	import itemInfoRecommend from './items/itemInfoRecommend.vue';
	export default{
		components:{
			itemComment,
			itemInfoRecommend
		},
		props : {},
		data() {
			return {
				"foodDetail" : {
					"KID":"1100001",
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
						"KID":"100001",
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
								"CONTENT" : "不错不错，口感非常Nice哦,大爱啊.此元素会作为列表显示。"
							},
							{
								"NICKNAME" : "龙津桥",
								"CONTENT" : "非常的喜欢啊，感谢感谢哦，不得了，期待下一期"
							}
						]
					},
					{
						"KID":"100002",
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
								"CONTENT" : "非常ok啦,已学习"
							},
							{
								"NICKNAME" : "我是学霸",
								"CONTENT" : "非常的喜欢哦"
							}
						]
					},
					{
						"KID":"100003",
						"NICKNAME":"小芳",
						"USER_IMAGE":"/static/cateinfo/head/user_image01.png",
						"DETAILS":"做出来的蛋糕精致漂亮，简直舍不得吃了",
						"REPLY_COMMENT":[
							{
								"NICKNAME" : "小芳邻居",
								"CONTENT" : "我是你的小林娟，已点赞"
							},
							{
								"NICKNAME" : "今日是32号",
								"CONTENT" : "嗯，还不错，讨教了"
							},
							{
								"NICKNAME" : "玉帝孙子",
								"CONTENT" : "我是猴王，得叫我孙猴子哦"
							}
						]
					}
				],
				listRecommend : [
					{
						"KID":"10101",
						"CATENAME":"草莓蛋糕卷",
						"DETAIL":"草莓、奶油、面粉、鸡蛋、玉米油合成……",
						"SHOP_NAME":"羊城西饼",
						"ENSHRINE_TOTAL":"16w",
						"CATE_IMAGE" : "/static/cateinfo/recomment/recommend01.png"
					},
					{
						"KID":"10102",
						"CATENAME":"草莓奶油蛋糕",
						"DETAIL":"草莓、奶油、面粉、鸡蛋、玉米油合成……",
						"SHOP_NAME":"羊城西饼",
						"ENSHRINE_TOTAL":"60w",
						"CATE_IMAGE" : "/static/cateinfo/recomment/recommend02.png"
					},
					{
						"KID":"10103",
						"CATENAME":"酸奶蛋糕",
						"DETAIL":"草莓、奶油、面粉、鸡蛋、玉米油合成……",
						"SHOP_NAME":"羊城西饼",
						"ENSHRINE_TOTAL":"206w",
						"CATE_IMAGE" : "/static/cateinfo/recomment/recommend03.png"
					}
				]
			}
		},
		methods:{
			loadAll : function(){
				console.info('查看全部评论')
			},
			pinglunSubmit : function(){
				
			}
		},
		/* type =1是优选套餐;2是厨师精选;3实时新品;4热门菜系;5菜品分类列表;6是套餐项进入 */
		onLoad(options){
			console.info(options.type);
		}
	}
</script>

<style scoped>
	.root-info-container{
		margin-bottom:1rpx;
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
	.load-more-normal{
		margin: 30rpx auto;
		border-radius:20rpx;
		height:66rpx;
		width: 480rpx;
		background: #ebedee;
		text-align: center;
	}
	.load-more-normal text{
		color: #C0C0C0;
		font-size:38rpx;
		height: 66rpx;
		line-height: 66rpx;
		vertical-align: middle;
	}
	.load-more-hover{
		background: #e9e9ea;
	}
	.pinglun-container{
		display: flex;
		justify-content: space-between;
		width: 100%;
		background:#333334;
	}
	.pinglun-input{
		width:70%;
		height:80rpx;
		background: #ffffff;
		margin: 14rpx;
		border-radius:14rpx;
		padding: 4rpx;
	}
	.pinglun-view{
		height:80rpx;
		line-height: 80rpx;
		text-align: center;
		width: 30%;
		background: #909090;
		color: #ffffff;
		margin: 14rpx 14rpx 14rpx 0;
		padding: 4rpx;
		border-radius:14rpx;
	}
	.pinglun-view-hover{
		background: #e2a426;
	}
	.recommend-container{
		padding-right:2rpx;
	}
	.info-bottom-container{
		display: flex;
		justify-content: space-between;
		width: 100%;
		height:80rpx;
	}
	/* 左边的收藏 */
	.info-bottom-collect{
		width: 50%;
		background: #333334;
		color: #FFFFFF;
		display: flex;
		justify-content: center;
		height:80rpx;
	}
	/* 收藏图标 */
	.bottom-collect-icon{
		width: 40rpx;
		height: 40rpx;
		margin-top: 20rpx;
		vertical-align:middle;
	}
	/* 收藏文字 */
	.bottom-collect-text{
		font-size:34rpx;
		height:80rpx;
		margin-top: -4rpx;
		line-height: 80rpx;
	}
	/* 右边的转发|分享 */
	.info-bottom-transpond{
		width: 50%;
		background:#F19149;
		color: #FFFFFF;
		display: flex;
		justify-content: center;
		height:80rpx;
	}
	/* 转发的图标 */
	.bottom-transpond-icon{
		width: 40rpx;
		height: 40rpx;
		margin-top: 20rpx;
		vertical-align:middle;
	}
	/* 转发的文字 */
	.bottom-transpond-text{
		font-size:34rpx;
		height:80rpx;
		margin-top: -4rpx;
		line-height: 80rpx;
	}
	.info-bottom-hover{
		color: #4CA2FF;
	}
</style>
