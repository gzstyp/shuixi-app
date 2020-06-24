<!-- 套餐管理 -->
<template>
	<view>
		<view class="list-combo-root">
			<view class="list-combo-container">
				<block v-for="(item,index) in listData" :key="index">
					<itemListCombo :item="item"></itemListCombo>
				</block>
			</view>
			<view class="bottom-circle-add" @click="addCombo()">
				<image src="/static/icon/icon_add_circle_selected.svg"></image>
			</view>
		</view>
		<view class="botton-backtrack" hover-class="botton-backtrack-hover" @click="previous()">
			<text>返回</text>
		</view>
	</view>
</template>

<script>
	import itemListCombo from '../item/itemListCombo.vue';
	export default{
		props : {},
		components: {
			itemListCombo
		},
		data() {
			return {
				listData : [
					{
						"KID" : "101001",
						"COMBO_NAME" : "炸鸡红烧肉",
						"COMBO_COUNT" : "3-5",
						"COMBO_DESC" : "炸鸡红烧肉,价格实惠,可口美味，我国科学家在新型冠状病毒抗体研究中取得重大突破，由中国工程院院士、军事科学院军事医学研究院研究员陈薇领衔的团队，发现了首个靶向刺突蛋白N端结构域的高效中和单克隆抗体。北京时间6月22日22:00，国际顶级学术期刊《科学》在线发表了该项研究结果。这也是陈薇团队研发的腺病毒载体重组新冠疫苗在全球率先进入Ⅱ期临床试验后，取得的又一项世界级科研成果。该论文第一作者为迟象阳、鄢仁鸿、张军；通讯作者为陈薇、周强、李建民。",
						"LIST_SELECT" : [
							{
								"KID":"100011",
								"CATE_IMAGE":"/static/combo/combo01.png",
								"CATENAME":"草莓水果奶油蛋糕"
							},
							{
								"KID":"100012",
								"CATE_IMAGE":"/static/combo/combo02.png",
								"CATENAME":"清蒸金针鱼"
							},
							{
								"KID":"100113",
								"CATE_IMAGE":"/static/combo/combo03.png",
								"CATENAME":"山楂银耳汤草莓"
							},
							{
								"KID":"100014",
								"CATE_IMAGE":"/static/combo/combo04.png",
								"CATENAME":"清蒸金针鱼"
							},
							{
								"KID":"100115",
								"CATE_IMAGE":"/static/combo/combo05.png",
								"CATENAME":"山楂银耳汤"
							}
						],
						"LIST_PRESENTED" : [
							{
								"KID":"200011",
								"CATE_IMAGE":"/static/images/realtime01.png",
								"CATENAME":"草莓水果奶油蛋糕"
							},
							{
								"KID":"200012",
								"CATE_IMAGE":"/static/images/realtime02.png",
								"CATENAME":"清蒸金针鱼"
							},
							{
								"KID":"200113",
								"CATE_IMAGE":"/static/images/realtime03.png",
								"CATENAME":"山楂银耳汤草莓"
							}
						]
					},
					{
						"KID" : "101002",
						"COMBO_NAME" : "洋芋干锅鸡",
						"COMBO_COUNT" : "4-5",
						"COMBO_DESC" : "洋芋干锅鸡,我国科学家在新型冠状病毒抗体研究中取得重大突破，由中国工程院院士、军事科学院军事医学研究院研究员陈薇领衔的团队，发现了首个靶向刺突蛋白N端结构域的高效中和单克隆抗体。北京时间6月22日22:00，国际顶级学术期刊《科学》在线发表了该项研究结果。这也是陈薇团队研发的腺病毒载体重组新冠疫苗在全球率先进入Ⅱ期临床试验后，取得的又一项世界级科研成果。该论文第一作者为迟象阳、鄢仁鸿、张军；通讯作者为陈薇、周强、李建民。",
						"LIST_SELECT" : [
							{
								"KID":"100011",
								"CATE_IMAGE":"/static/combo/combo01.png",
								"CATENAME":"草莓水果奶油蛋糕"
							},
							{
								"KID":"100012",
								"CATE_IMAGE":"/static/combo/combo02.png",
								"CATENAME":"清蒸金针鱼"
							},
							{
								"KID":"100113",
								"CATE_IMAGE":"/static/combo/combo03.png",
								"CATENAME":"山楂银耳汤草莓"
							},
							{
								"KID":"100014",
								"CATE_IMAGE":"/static/combo/combo04.png",
								"CATENAME":"清蒸金针鱼"
							},
							{
								"KID":"100115",
								"CATE_IMAGE":"/static/combo/combo05.png",
								"CATENAME":"山楂银耳汤"
							}
						]
					}
				]
			}
		},
		methods:{
			/* 返回 */
			previous : function(){
				uni.navigateBack();
			},
			addCombo : function(){
				uni.navigateTo({
					url:'/pages/my/addCombo?type=1'
				});
			}
		},
		onLoad(options) {
			console.info(options.from);//from=1是商家进入;2是访客
		}
	}
</script>

<style scoped>
	.list-combo-root{
		margin: 0 10rpx 88rpx 10rpx;
		padding: 0;
	}
	.list-combo-container{
		
	}
	.bottom-circle-add image{
		position:fixed;
		display: flex;
		right: 120rpx;
		bottom:180rpx;
		z-index: 1;
		width: 80rpx;
		height: 80rpx;
		background: rgba(255,255,255,0.9);
		box-shadow: 0 0 20rpx 0 rgba(0,0,0,0.5);
		border-radius: 40rpx;
	}
</style>
