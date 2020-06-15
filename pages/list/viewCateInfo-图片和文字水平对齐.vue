<!-- 菜品详情 -->
<template>
	<view class="root-info-container">
		<image class="info-image" :src="foodDetail.CATE_IMAGE"></image>
		<view class="view-name">— {{foodDetail.CATENAME}} —</view>
		<view class="logo-name-pv">
			<image src="/static/list/category/pro_photo1.png"></image>
			<text>{{foodDetail.SHOP_NAME}}</text>
			<text>|</text>
			<text style="background: #666666;">{{foodDetail.PVTOTAL|| '1'}}人浏览</text>
			<text style="background: #444444;">{{foodDetail.ENSHRINE_TOTAL|| '0'}}人收藏</text>
		</view>
	</view>
</template>

<script>
	export default{
		props : {},
		data() {
			return {
				foodDetail : {
					"CATE_IMAGE" : "/static/cateinfo/cmsgny.png",
					"CATENAME":"凉拌黄瓜凉拌黄瓜凉拌黄瓜",
					"SHOP_NAME":"湘掌门",
					"PVTOTAL":"1022w",
					"ENSHRINE_TOTAL":"30w",
				}
			}
		},
		methods:{}
	}
</script>

<style scoped>
	.root-info-container{
		margin: 0 6rpx;
	}
	.info-image{
		width: 100%;
		height: 300rpx;
		margin-bottom: 10rpx;
	}
	.view-name{
		text-align: center;
		width: 100%;
		height: 44rpx;
		line-height: 44rpx;
		font-size:34rpx;
		font-weight: bold;
		margin-bottom:12rpx;
	}
	.logo-name-pv{
		width: 100%;
		height:64rpx;
		background: #4CA2FF;
		text-align: center; 
	}
	.logo-name-pv image{
		width:64rpx;
		height:64rpx;
		background: #DD524D;
		vertical-align:middle;/* 控制图片和文字在同一行对齐显示 */
	}
	.logo-name-pv text{
		font-size: 30rpx;
		color: #999999;
		vertical-align:middle;
	}
</style>
