<template>
	<view class="add-combo-root">
		<view class="label-tips-description">
			<text>套餐名称</text>
		</view>
		<view class="label-description-input">
			<input type="text" maxlength="20" placeholder="输入套餐名称(限制20个字符)"/>
		</view>
		<view class="label-tips-description">
			<text>适用人数</text>
		</view>
		<view class="label-description-input">
			<input type="text" maxlength="20" placeholder="输入适用人数(如:3-5)"/>
		</view>
		<view class="label-tips-description">
			<text>套餐介绍</text>
		</view>
		<textarea type="text" maxlength="512" class="textarea-view-self" placeholder="套餐介绍(限制512个字符)"/>
		<view class="label-tips-description">
			<text>选择菜品</text>
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
	.add-combo-root{
		margin: 0 10rpx;
		padding: 0;
	}
</style>
