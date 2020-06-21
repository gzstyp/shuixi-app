<template>
	<view class="item-cook-root">
		<image class="item-cook-image" :src="item.IMAGE" @click="selected(item.KID)" mode="aspectFill"></image>
		<image class="item-icon-selected" src="/static/icon/icon_selected_yellow.svg" v-if="isShow"></image>
		<view class="item-icon-name horizontal-line">{{item.NAME}}</view>
	</view>
</template>

<script>
	export default{
		props : {
			item : null
		},
		data(){
			return {
				indexSrc : 1,
				isShow : false
			}
		},
		methods:{
			selected : function(kid){
				this.indexSrc++;
				var result = this.indexSrc % 2;
				if(result == 0){
					this.isShow = true;
				}else{
					this.isShow = false;
				}
			}
		}
	}
</script>

<style scoped>
	.item-cook-root{
		padding: 0;
		width: 150rpx;
		height: 186rpx;/* 150 + 34 = 186 */
		position: relative;
	}
	.item-cook-image{
		width: 150rpx;
		height: 150rpx;
	}
	.item-icon-selected{
		width: 50rpx;
		height: 50rpx;
		position: absolute;
		top: -2rpx;
		right: 0rpx;
	}
	.item-icon-name{
		font-size: 30rpx;
		color: #000000;
		width: 150rpx;
		height: 34rpx;
		line-height: 34rpx;
	}
</style>
