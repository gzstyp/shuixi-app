<!-- 热门菜系 -->
<template>
	<view class="view-parent-container">
		<itemHead ref="itemViewHead" :itemData="itemData"></itemHead>
		<view class="view-item-content">
			<block v-for="(item,index) in listData" :key="index">
				<itemHot :item="item"></itemHot>
			</block>
		</view>
	</view>
</template>

<script>
	import itemHead from './itemHead.vue';
	import itemHot from './itemHot.vue';
	export default{
		name:"productList",
		components:{
			itemHot,
			itemHead
		},
		props : {
			lists : Array
		},
		data() {
			return {
				itemData : {
					imgsrc : "/static/images/index/icon/remencaixi.svg",
					label : "热门菜系",
					objects : {
						"kid":"11000"
					}
				},
				listData :[
					{
						"KID":"100012",
						"CATE_IMAGE":"/static/images/realtime02.png",
						"CATENAME":"皮蛋瘦肉粥",
						"BEFORE":"7分钟",
						"PVTOTAL":"20.26w",
						"ENSHRINE_TOTAL":"31250.6w",
						"PRODUCT_INFO":"皮蛋瘦肉粥,好吃养颜",
						"SHOP_NAME":"贵州龙",
						"LOGO":"/static/images/profile_photo.png"
					},
					{
						"KID":"100013",
						"CATE_IMAGE":"/static/images/realtime03.png",
						"CATENAME":"清蒸金针鱼",
						"BEFORE":"1小时",
						"PVTOTAL":"1.6w",
						"ENSHRINE_TOTAL":"300.6w",
						"PRODUCT_INFO":"蛋白的容器须无水无油，加几滴白醋进去后，打至粗泡后分两次加入白糖，打至蛋白干性发泡",
						"SHOP_NAME":"羊城西饼",
						"LOGO":"/static/images/profile_photo.png"
					},
					{
						"KID":"100114",
						"CATE_IMAGE":"/static/images/realtime04.png",
						"CATENAME":"山楂银耳汤",
						"BEFORE":"12分钟",
						"PVTOTAL":"2.8w",
						"ENSHRINE_TOTAL":"30.6w",
						"PRODUCT_INFO":"先制作蛋黄糊，如果先打好了蛋白霜再制作蛋黄糊，这中间的时间里蛋白霜有可能消泡",
						"SHOP_NAME":"天津狗不理包子",
						"LOGO":"/static/images/profile_photo.png"
					}
				]
			}
		},
		methods:{
			localCont : function(){
				
			}
		}
	}
</script>

<style scoped>
	.view-parent-container{
		margin: 30rpx 0;
		border-radius: 20rpx;
		border-color: #FAA70D;
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(254,184,43, 0.6);
		outline: 0 none;
		padding-bottom: 20rpx;
	}
	/* 表示内容在一行排不下时，就换行,即就往下一行排列 */
	.view-item-content{
		display: flex;/* 并排排列,让每一个view都是并排排列 */
		flex-wrap: wrap;/* 表示内容在一行排不下时，就换行,即就往下一行排列 */
		justify-content: space-between;/* 向两边撑开,也就是往两边排 */
		width:100%;/* 撑满,下面的.conteng-acticle样式要结合这个来一起使用,即100/2=50% */
		-webkit-flex-wrap:wrap;
		overflow: hidden;/* 溢出隐藏 */
	}
	/* 每一个盒子,每个盒子是48%，因为 没一行要排两个view，那100%/2=50%啦 */
	.view-item-info{
		width: 48%;
		flex-direction: column;
		display: flex;
		box-sizing: border-box;
	}
</style>
