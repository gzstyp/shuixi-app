<!-- 商家入住 -->
<template>
	<view class="regsiter-root">
		<view class="regsiter-container">
			<view class="label-tips-description">
				<text>商家名称</text>
			</view>
			<view class="label-description-input">
				<input type="text" maxlength="32" placeholder="请输入商家商铺名称(限制32个字符)"/>
			</view>
			<view class="label-tips-description">
				<text>联系方式</text>
			</view>
			<view class="label-description-input">
				<input type="text" maxlength="20" placeholder="请输入电话号码|联系方式(限制20个字符)"/>
			</view>
			<view class="label-tips-description">
				<text>商家介绍</text>
			</view>
			<view class="label-description-textarea">
				<textarea type="text" rows="15" maxlength="256" placeholder="输入商家介绍,特色(限制256个字符)"/>
			</view>
			<view class="label-tips-description">
				<text>添加logo图片或商家店招</text>
			</view>
			<view class="view-upload-image">
				<image src="/static/icon/icon_plus_normal.svg"></image>
			</view>
			<view class="label-tips-description">
				<text>添加商家装潢或有代表性的图片</text>
			</view>
			<view class="view-upload-image">
				<image src="/static/icon/icon_plus_normal.svg"></image>
			</view>
			<view class="label-tips-description">
				<text>商家地图</text>
			</view>
			<view class="view-upload-image">
				<image src="/static/icon/icon_plus_normal.svg"></image>
			</view>
			<view class="label-description-input">
				<input type="text" maxlength="20" placeholder="请输入商家地址(限制64个字符)"/>
			</view>
			<view class="label-tips-description">
				<text>资质资料上传</text>
			</view>
			<view class="view-upload-image">
				<image src="/static/icon/icon_plus_normal.svg"></image>
			</view>
			<min-modal ref="modal"></min-modal>
		</view>
		<view class="bottom-submit" hover-class="bottom-submit-hover">
			<text>提交注册</text>
		</view>
	</view>
</template>

<script>
	export default{
		props : {},
		data() {
			return {}
		},
		methods:{}
	}
</script>

<style scoped>
	.regsiter-container{
		margin: 0 10rpx;
		padding: 0;
	}
	.view-upload-image{
		height: 260rpx;
		margin-left:10rpx;
		margin-right:10rpx;
	}
	.view-upload-image image{
		height: 250rpx;
		width: 250rpx;
	}
	.bottom-submit{
		margin-top: 20rpx;
		height: 80rpx;
		width: 100%;
		font-size:35rpx;
		background: #FEB82B;
		text-align: center;
		line-height: 80rpx;
		color: #000000;
	}
	.bottom-submit-hover{
		color: #ffffff;
	}
</style>
