<!-- 浏览量和收藏量 -->
<template>
	<view class="browse-pv">
		<view class="browse-pv-left">
			<image class="browse-pv-image" src="/static/images/eye_normal.svg"></image>
			<text class="browse-pv-text">{{item.PVTOTAL || '1'}}浏览</text>
		</view>
		<view class="browse-pv-right">
			<image class="browse-enshrine-image" src="/static/images/star_normal.svg"></image>
			<text class="browse-enshrine-text">{{item.ENSHRINE_TOTAL || '0'}}收藏</text>
		</view>
	</view>
</template>

<script>
	export default{
		props : {
			item : null
		}
	}
</script>

<style scoped>
	/* 浏览量和收藏量 */
	.browse-pv{
		display: flex;
		justify-content: space-between;
		width:100%;
		margin:10rpx 0;
		color: #666666;
	}
	/* 左边-浏览量*/
	.browse-pv .browse-pv-left{
		width: 50%;
		display: flex;
	}
	/* 右边-收藏量 */
	.browse-pv .browse-pv-right{
		width: 50%;
		display: flex;
		justify-content: flex-end;
		padding-right:5px;
	}
	/* 浏览量图标 */
	.browse-pv-left .browse-pv-image{
		height:26rpx;
		width:30rpx;
		padding-bottom:4rpx;
	}
	/* 浏览人数 */
	.browse-pv-left .browse-pv-text{
		height:26rpx;
		line-height:26rpx;
		font-size:24rpx;
		display:inline-block;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:1;
		text-overflow: ellipsis;
		overflow: hidden;
		vertical-align: middle;
		align-self: center;
	}
	/* 收藏量图标 */
	.browse-pv-right .browse-enshrine-image{
		height:26rpx;
		width:26rpx;
		padding-bottom:3rpx;
	}
	/* 收藏人数 */
	.browse-pv-right .browse-enshrine-text{
		height:26rpx;
		line-height:26rpx;
		font-size:24rpx;
		display:inline-block;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:1;
		text-overflow: ellipsis;
		overflow: hidden;
		vertical-align: middle;
		align-self: center;
	}
</style>
