<!-- 热门菜系-item -->
<template>
	<view class="view-item-container">
		<block v-for="(item,index) in listData" :key="index">
			<view class="view-detail-container">
				<view class="detail-img">
					<image :src="item.CATE_IMAGE" mode="aspectFill"></image>
				</view>
				<view class="catename-star">
					<view  @click="viewInfoByName(item.KID)" class="catename">{{item.CATENAME}}</view>
					<image class="star" :src="item.STARS"/>
				</view>
				<browseEnshrine :item="item"></browseEnshrine>
				<view class="detail-describe">{{item.PRODUCT_INFO}}</view>
				<logoName :item="item"></logoName>
			</view>
		</block>
	</view>
</template>

<script>
	import browseEnshrine from '../element/browseEnshrine.vue';
	import logoName from '../element/logoName.vue';
	export default{
		components:{
			browseEnshrine,
			logoName
		},
		props:{
			listData:null
		},
		data(){
			return {}
		},
		methods:{
			viewInfoByName : function(kid){
				uni.navigateTo({
				    url: '/pages/list/viewCateInfo?type=4&kid='+kid
				});
			}
		}
	}
</script>

<style scoped>
	/* 表示内容在一行排不下时，就换行,即就往下一行排列 */
	.view-item-container{
		display: flex;/* 并排排列,让每一个view都是并排排列 */
		flex-wrap: wrap;/* 表示内容在一行排不下时，就换行,即就往下一行排列 */
		justify-content: space-between;/* 向两边撑开,也就是往两边排 */
		width:100%;
		-webkit-flex-wrap:wrap;
		overflow: hidden;/* 溢出隐藏 */
	}
	/* 每一个盒子,每个盒子是48%，因为 没一行要排两个view，那100%/2=50%啦 */
	.view-item-container .view-detail-container{
		width:49.7%;
		flex-direction: column;
		display: flex;
		box-sizing: border-box;
		border-bottom: 1rpx solid #FEB82B;
		margin-bottom:10rpx;
	}
	/* 图片用一个view来包裹它 */
	.detail-img{
		height:300rpx !important;
		object-fit: cover;
		overflow: hidden;
		margin-bottom: 16rpx;
	}
	.detail-img image{
		width: 100% !important;
		height: 100% !important;
		object-fit: cover;
		border-top-left-radius:10rpx;
		border-top-right-radius:10rpx;
	}
	.catename-star{
		display: flex;
		justify-content: space-between;
		height:32rpx;
	}
	.star{
		height:100%;
		width:32rpx;
		align-items: center;
		justify-content: flex-end;
		width:10%;
	}
	/* 菜品名称 */
	.catename{
		height: 32rpx;
		line-height: 32rpx;
		font-size:32rpx;
		color: #FEB82B;
		display: -webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:1;
		text-overflow: ellipsis;
		overflow: hidden;
		width: 90%;
	}
	/* 菜品介绍 */
	.detail-describe{
		font-size:30rpx;
		height:64rpx;/* 32x2=64 */
		line-height:32rpx;
		display: -webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:2;
		text-overflow: ellipsis;
		overflow: hidden;
	}
</style>
