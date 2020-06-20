<template>
	<view class="item-cook-root">
		<image class="item-cook-image" :src="item.IMAGE" @click="selected(item.KID)"></image>
		<image class="item-icon-selected" src="/static/icon/icon_check_selected.svg" v-if="isShow"></image>
		<text>{{item.NAME}}</text>
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
					this.item.SELECTED = true;
					this.isShow = true;
				}else{
					this.item.SELECTED = false;
					this.isShow = false;
				}
			}
		}
	}
</script>

<style scoped>
	.item-cook-root{
		padding: 0;
	}
	.item-cook-image{
		width: 150rpx;
		height: 150rpx;
	}
	.item-icon-selected{
		width: 50rpx;
		height: 50rpx;
	}
	.item-cook-root text{
		font-size: 30rpx;
		color: #000000;
	}
</style>
