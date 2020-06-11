<template>
	<view class="view-hot-item">
		<image>图片</image>
		<view>
			<text>菜品名称</text>
			<view>
				<image src="/static/images/star_select.svg"></image>
			</view>
			<!-- 浏览量和收藏量 -->
			<view-browse :item="item"></view-browse>
			<text class="product-info">{{item.PRODUCT_INFO}}</text>
			<!-- 商家logo和商家名称、收藏图标 -->
			<view-logo-name :item="item"></view-logo-name>
		</view>
	</view>
</template>

<script>
	import viewBrowse from './viewBrowse.vue';
	import viewLogoName from './viewLogoName.vue';
	export default{
		props : {
			item : null
		},
		components:{
			viewBrowse,
			viewLogoName
		},
		data() {
			return {}
		},
		methods:{}
	}
</script>

<style scoped>
	.view-hot-item{
		margin: 30rpx 0;
		border-radius: 20rpx;
	}
</style>
