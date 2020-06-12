<template>
	<view class="view-item-info" @click="localCont()">
		<view class="item-info-img">
			<image :src="item.CATE_IMAGE" mode="aspectFill"></image>
		</view>
		<view class="item-info-details">
			<view class="item-info-name">{{item.CATENAME}}</view>
			<!-- 浏览量和收藏量 -->
			<viewBrowse :item="item" style="margin-top:4rpx;margin-left: 6rpx;"></viewBrowse>
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
		width: 48%;
		flex-direction: column;
		display: flex;
		box-sizing: border-box;
	}
	/* 图片用一个view来包裹它 */
	.item-info-img{
		height: 400rpx !important;
		object-fit: cover;
		overflow: hidden;
	}
	.item-info-img image{
		width: 100% !important;
		height: 100% !important;
		object-fit: cover;
		border-radius: 10rpx;
	}
	/* 让两个view并排排列 */
	.item-left-right{
		display: flex;/* 并排排列,让两个view并排排列 */
		align-items: center;/* 让文字居中 */
		padding-bottom: 10rpx;/* 离下面的距离是10 */
	}
	.item-info-details{
		padding-left:0rpx;
	}
	.item-info-name{
		font-size: 32rpx;
		color: #d0b083;
		display: -webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:1;/* 仅在一行显示 */
		text-overflow: ellipsis;
		overflow: hidden;
	}
	
	
	
	
	
	
	
	
	
	.item-image{
		height: 50rpx;
		width: 50rpx;
		color: #ff6b28;
		padding-right: 9rpx;
	}
	.item-right{
		font-size: 30rpx;
		color: #cacaca;
	}
	
	/* 收藏图标 */
	.pv-star-icon{
		height:26rpx;
		width:26rpx;
		top:0rpx;
	}
</style>
