<template>
	<view class="item-cook-root" @click="selected(item.KID)">
		<image class="item-cook-image" :src="item.IMAGE" mode="aspectFill"></image>
		<image class="item-icon-selected" src="/static/icon/icon_selected_yellow.svg" v-if="isShow"></image>
		<view class="item-icon-name horizontal-line">{{item.NAME}}</view>
	</view>
</template>

<script>
	export default{
		props : {
			item : null,
			from : 0
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
				if(_from === 1){//选择黄豆样式
					var _of = this.storedb.state.selfCook.listStyle.indexOf(kid);
					if(bl){
						if(_of == -1){
							this.storedb.state.selfCook.listStyle.push(kid);
						}else{
							this.storedb.state.selfCook.listStyle.splice(_of,1);
						}
					}else{
						this.storedb.state.selfCook.listStyle.splice(_of,1);
					}
				}else if(_from === 2){//选择蔬菜
					var _of = this.storedb.state.selfCook.listShucai.indexOf(kid);
					if(bl){
						if(_of == -1){
							this.storedb.state.selfCook.listShucai.push(kid);
						}else{
							this.storedb.state.selfCook.listShucai.splice(_of,1);
						}
					}else{
						this.storedb.state.selfCook.listShucai.splice(_of,1);
					}
				}else if(_from === 3){//选择肉类
					var _of = this.storedb.state.selfCook.listRoulei.indexOf(kid);
					if(bl){
						if(_of == -1){
							this.storedb.state.selfCook.listRoulei.push(kid);
						}else{
							this.storedb.state.selfCook.listRoulei.splice(_of,1);
						}
					}else{
						this.storedb.state.selfCook.listRoulei.splice(_of,1);
					}
				}else if(_from === 4){//选择部位
					var _of = this.storedb.state.selfCook.listBuwei.indexOf(kid);
					if(bl){
						if(_of == -1){
							this.storedb.state.selfCook.listBuwei.push(kid);
						}else{
							this.storedb.state.selfCook.listBuwei.splice(_of,1);
						}
					}else{
						this.storedb.state.selfCook.listBuwei.splice(_of,1);
					}
				}else if(_from === 5){//选择禽类
					var _of = this.storedb.state.selfCook.listQinlei.indexOf(kid);
					if(bl){
						if(_of == -1){
							this.storedb.state.selfCook.listQinlei.push(kid);
						}else{
							this.storedb.state.selfCook.listQinlei.splice(_of,1);
						}
					}else{
						this.storedb.state.selfCook.listQinlei.splice(_of,1);
					}
				}else if(_from === 6){//选择海鲜
					var _of = this.storedb.state.selfCook.listHaixian.indexOf(kid);
					if(bl){
						if(_of == -1){
							this.storedb.state.selfCook.listHaixian.push(kid);
						}else{
							this.storedb.state.selfCook.listHaixian.splice(_of,1);
						}
					}else{
						this.storedb.state.selfCook.listHaixian.splice(_of,1);
					}
				}else if(_from === 7){//选择配料
					var _of = this.storedb.state.selfCook.listPeiliao.indexOf(kid);
					if(bl){
						if(_of == -1){
							this.storedb.state.selfCook.listPeiliao.push(kid);
						}else{
							this.storedb.state.selfCook.listPeiliao.splice(_of,1);
						}
					}else{
						this.storedb.state.selfCook.listPeiliao.splice(_of,1);
					}
				}
			}
		}
	}
</script>

<style scoped>
	.item-cook-root{
		padding: 0;
		width: 161rpx;
		height: 186rpx;
		position: relative;
		padding-bottom: 4rpx;
	}
	.item-cook-image{
		width: 161rpx;
		height: 150rpx;
	}
	.item-icon-selected{
		width: 50rpx;
		height: 50rpx;
		position: absolute;
		top: -2rpx;
		right: -2rpx;
	}
	.item-icon-name{
		font-size: 30rpx;
		color: #000000;
		width: 161rpx;
		height: 34rpx;
		line-height: 34rpx;
	}
</style>
