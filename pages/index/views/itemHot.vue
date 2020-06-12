<!-- 热门菜系-item项 -->
<template>
	<view class="view-item-info" @click="localCont()">
		<view class="item-info-img">
			<image :src="item.CATE_IMAGE" mode="aspectFill"></image>
		</view>
		<view class="item-info-details">
			<view class="item-info-name">{{item.CATENAME}}</view>
			<!-- 浏览量和收藏量 -->
			<viewBrowse :item="item" style="margin-top:4rpx;"></viewBrowse>
			<!-- 商家logo和商家名称、收藏图标 -->
			<viewLogoName :item="item"></viewLogoName>
		</view>
	</view>
</template>

<script>
	import viewBrowse from './viewBrowse.vue';
	import viewLogoName from './viewLogoName.vue';
	export default{
		components:{
			viewBrowse,
			viewLogoName
		},
		props : {
			item : null
		},
		data() {
			return {}
		},
		methods:{
			localCont : function(){

			}
		}
	}
</script>

<style scoped>
	/* 每一个盒子,每个盒子是48%，因为 没一行要排两个view，那100%/2=50%啦 */
	.view-item-info{
		width: 49%;
		flex-direction: column;
		display: flex;
		box-sizing: border-box;
		margin-bottom: 20rpx;
		/* border-radius:20rpx; */
	}
	/* 图片用一个view来包裹它 */
	.item-info-img{
		height: 400rpx !important;
		width: 100%;
		object-fit: cover;
		overflow: hidden;
	}
	.item-info-img image{
		width: 100% !important;
		height: 100% !important;
	}
	.item-info-details{
		padding-left:8rpx;
	}
	.item-info-name{
		font-size: 32rpx;
		margin-top: 10rpx;
		color: #FEB82B;
		display: -webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:1;/* 仅在一行显示 */
		text-overflow: ellipsis;
		overflow: hidden;
	}
</style>
