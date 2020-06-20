<template>
	<view class="item-cook-root">
		<image class="item-cook-image" :src="item.IMAGE" @click="selected(item.KID)"></image>
		<image class="item-icon-selected" src="/static/icon/icon_check_selected.svg" v-if="item.SELECTED"></image>
		<text>{{item.NAME}}</text>
	</view>
</template>

<script>
	var indexSrc = 1;
	export default{
		props : {
			item : null
		},
		data() {
			return {
				keys : null
			}
		},
		methods:{
			selected : function(kid){
				this.keys = kid;
				indexSrc++;
				var result = indexSrc % 2;
				if(result == 0){
					this.item.SELECTED = true;
				}else{
					this.item.SELECTED = false;
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
