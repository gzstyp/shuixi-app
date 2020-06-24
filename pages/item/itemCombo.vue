<!-- 套餐选择组合 -->
<template>
	<view class="item-select-container" @click="selected(item.KID)">
		<image class="item-select-image" :src="item.CATE_IMAGE" mode="aspectFill"></image>
		<image class="item-icon-selected" src="/static/icon/icon_selected_yellow.svg" mode="widthFix" v-if="isShow"></image>
		<view class="item-icon-name horizontal-line">{{item.CATENAME}}</view>
	</view>
</template>

<script>
	export default{
		props : {
			item : null,
			from : 0,
			selectKeys : []
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
					this.handler(kid,true);
				}else{
					this.isShow = false;
					this.handler(kid,false);
				}
			},
			handler : function(kid,bl){
				var _from = this.from;
				if(_from === 1){//选择菜品组合
					var _of = this.storedb.state.comboAdd.listSelect.indexOf(kid);
					if(bl){
						if(_of == -1){
							this.storedb.state.comboAdd.listSelect.push(kid);
						}else{
							this.storedb.state.comboAdd.listSelect.splice(_of,1);
						}
					}else{
						this.storedb.state.comboAdd.listSelect.splice(_of,1);
					}
				}else if(_from === 2){//赠送菜品
					var _of = this.storedb.state.comboAdd.listPresented.indexOf(kid);
					if(bl){
						if(_of == -1){
							this.storedb.state.comboAdd.listPresented.push(kid);
						}else{
							this.storedb.state.comboAdd.listPresented.splice(_of,1);
						}
					}else{
						this.storedb.state.comboAdd.listPresented.splice(_of,1);
					}
				}
			}
		}
	}
</script>

<style scoped>
	.item-select-container{
		padding: 0;
		width: 230rpx;
		height: 240rpx;
		position: relative;
		border-top-left-radius: 10rpx;
		border-top-right-radius: 10rpx;
		padding-bottom: 6rpx;
	}
	.item-select-image{
		width: 230rpx;
		height: 200rpx;
		border-top-left-radius: 10rpx;
		border-top-right-radius: 10rpx;
	}
	.item-icon-name{
		font-size: 35rpx;
		color: #000000;
		width: 230rpx;
		height: 40rpx;
		line-height: 40rpx;
	}
	/* 选中的图标 */
	.item-icon-selected{
		width: 50rpx;
		height: 50rpx;
		position: absolute;
		top: -2rpx;
		right: -2rpx;
	}
</style>
