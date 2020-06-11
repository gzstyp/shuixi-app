<template>
	<view class="view-item-content" v-model="item">
		<image class="content-left" :src="item.CATE_IMAGE" mode="aspectFill"/>
		<view class="content-right">
			<view class="right-content">
				<text class="lable-name">{{item.CATENAME}}</text>
				<text class="lable-time">{{item.BEFORE}}</text>
			</view>
			<view style="position: relative;margin-top: -20rpx;">
				<image class="product-pv-eye" src="/static/images/eye_normal.svg" mode="widthFix"/>
				<text class="product-pv-total">{{item.PVTOTAL}}浏览</text>
				<image class="pv-star-icon" src="/static/images/star_normal.svg" mode="widthFix"/>
				<text class="enshrine-total">{{item.ENSHRINE_TOTAL}}收藏</text>
			</view>
			<text class="product-info">{{item.PRODUCT_INFO}}</text>
			<view class="product-bottom">
				<view class="photo-username">
					<image class="img-photo" :src="item.LOGO" mode="aspectFill"/>
					<text class="username">{{item.SHOP_NAME}}</text>
				</view>
				<image class="enshrine-lable" src="/static/images/star_normal.svg" mode="widthFix" @click="enshrineProduct(item.KID)"/>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				item : {
					"KID":"100001",
					"CATE_IMAGE":"/static/images/realtime01.png",
					"CATENAME":"草莓水果奶油蛋糕",
					"BEFORE":"10分钟前",
					"PVTOTAL":"1.6w",
					"ENSHRINE_TOTAL":"310000.6w",
					"PRODUCT_INFO":"草莓奶油蛋糕这款蛋糕制作难度一般，不适合新手操作，主要制作材料是新鲜草莓、蛋糕粉、乳酪，辅料和调味料需要鸡蛋、黄油、糖、香草汁、烘焙粉。",
					"SHOP_NAME":"羊城西饼",
					"LOGO":"/static/images/profile_photo.png"
				}
			}
		}
	}
</script>

<style scoped>
	/* item */
	.view-item-content{
		display: flex;
		margin-top:16rpx;
	}
	.content-left{
		margin-left:2rpx;
		height:220rpx;
		width:292rpx;
	}
	.content-right{
		margin-left:14rpx;
	}
	.right-content{
		display: flex;
		justify-content:space-between;
		position: relative;
	}
	/* 新品名称 */
	.lable-name{
		font-size:32rpx;
		display: inline-block;
		white-space: nowrap;
		width:280rpx;
		overflow: hidden;
		text-overflow:ellipsis;
		color: #FEB82B;
	}
	/* 提示时间 */
	.lable-time{
		font-size:26rpx;
		color: #999999;
		position: relative;
		top:-8rpx;
		right:0;
	}
	/* 浏览量图标 */
	.product-pv-eye{
		height:26rpx;
		width:30rpx;
		position: absolute;
		top:12rpx;
	}
	/* 新品浏览量 */
	.product-pv-total{
		font-size:24rpx;
		color: #666666;
		margin-left: 32rpx;
	}
	/* 收藏图标 */
	.pv-star-icon{
		height:26rpx;
		width:26rpx;
		margin-left:8rpx;
		position: absolute;
		top:12rpx;
	}
	/* 收藏人数 */
	.enshrine-total{
		font-size:24rpx;
		color: #666666;
		margin-left:40rpx;
	}
	/* 新品介绍 */
	.product-info{
		width:380rpx;
		font-size:30rpx;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient:vertical;
	}
	/* 商家图标及商家名称和收藏按钮并排 */
	.product-bottom{
		display: flex;
		justify-content: space-between;
	}
	/* 商家图标及商家名称并排 */
	.photo-username{
		display: flex;
	}
	/* 商家logo */
	.img-photo{
		width:50rpx;
		height:50rpx;
		margin-top:8rpx;
	}
	/* 商家名称 */
	.username{
		font-size: 30rpx;
		margin-top:20rpx;
		margin-left: 10rpx;
	}
	/* 收藏按钮图标 */
	.enshrine-lable{
		width:40rpx;
		height:40rpx;
		margin-top:8rpx;
	}
</style>
