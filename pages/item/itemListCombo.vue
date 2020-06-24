<!--套餐列表-->
<template>
	<view class="item-combo-details">
		<view class="item-label-handler-container">
			<view class="item-combo-name-count">
				<text class="horizontal-line">{{item.COMBO_NAME}}({{item.COMBO_COUNT}}人)</text>
			</view>
			<view class="item-label-handler-execute">
				<text class="edit" @click="edit(item.KID,item.COMBO_NAME)">编辑</text>
				<text class="delete" @click="del(item.KID,item.COMBO_NAME)">删除</text>
			</view>
		</view>
		<view class="listWH item-combo-select">
			<scroll-view scroll-x="true" class="scroll" scroll-with-animation="true">
				<view class="horizontal-roll-container">
					<block v-for="(items,index) in item.LIST_SELECT" :key="index">
						<view class="horizontal-roll-item">
							<image @click="viewInfoByName(items.KID)" :src="items.CATE_IMAGE" mode="aspectFill"/>
							<text @click="viewInfoByName(items.KID)">{{items.CATENAME}}</text>
						</view>
					</block>
				</view>
			</scroll-view>
		</view>
		<view class="listWH item-combo-presented" v-if="(item.LIST_PRESENTED != null && item.LIST_PRESENTED.length > 0)">
			<scroll-view scroll-x="true" class="scroll" scroll-with-animation="true">
				<view class="horizontal-roll-container">
					<block v-for="(items,index) in item.LIST_PRESENTED" :key="index">
						<view class="horizontal-roll-item">
							<image @click="viewInfoByName(items.KID)" :src="items.CATE_IMAGE" mode="aspectFill"/>
							<text @click="viewInfoByName(items.KID)">{{items.CATENAME}}</text>
						</view>
					</block>
				</view>
			</scroll-view>
		</view>
		<view class="item-combo-desc" @click="viewDesc(item.COMBO_DESC)">
			<text class="horizontal-line">{{item.COMBO_DESC}}</text>
		</view>
		<min-modal ref="modal"></min-modal>
	</view>
</template>

<script>
	import minModal from '../../components/min-modal/min-modal.vue';
	export default{
		components: {
			minModal
		},
		props : {
			item : null
		},
		data() {
			return {}
		},
		methods:{
			dialog : function(msg){
				this.$refs.modal.handleShow({
					title: '系统提示',
					content: msg,
					showCancel : false
				});
			},
			viewInfoByName : function(kid){
				uni.navigateTo({
				    url: '/pages/list/viewCateInfo?type=6&kid='+kid
				});
			},
			viewDesc : function(desc){
				this.dialog(desc);
			},
			edit : function(kid,name){
				this.dialog(kid+'[编辑]'+name);
			},
			del : function(kid,name){
				this.dialog(kid+'[删除]'+name);
			}
		}
	}
</script>

<style scoped>
	.item-combo-details{
		margin-bottom: 20rpx;
		margin-top: 6rpx;
		padding: 0;
		border-color: #FAA70D;
		box-shadow: 0 1rpx 1rpx rgba(0, 0, 0, 0.075) inset, 0 0 8rpx rgba(254,184,43, 0.6);
		outline: 0 none;
		border-radius: 10rpx;
		padding-top: 14rpx;
	}
	.item-label-handler-container{
		display: flex;
		justify-content: space-between;
	}
	.item-label-handler-execute{
		font-size: 35rpx;
		padding-right: 14rpx;
	}
	.item-label-handler-execute text.edit{
		color: #4CA2FF;
	}
	.item-label-handler-execute text.delete{
		color: #ff6a6a;
		margin-left: 16rpx;
	}
	.item-combo-name-count{
		height: 40rpx;
		line-height: 40rpx;
		font-size: 35rpx;
		width: 76%;
		margin-bottom: 14rpx;
	}
	.item-combo-name-count text{
		margin-left: 14rpx;
	}
	.listWH{
		width: 100%;
		height: 285rpx;
	}
	.item-combo-select{
	}
	.scroll{
		white-space: nowrap;
		width: 100%;
	}
	/* 水平滚动 */
	.horizontal-roll-container{display: flex;justify-content:flex-start;}
	.horizontal-roll-item{height: 285rpx;width: 230rpx; padding: 0 8rpx;}
	.horizontal-roll-item image{width: 230rpx;height: 240rpx;border-radius: 10rpx;}
	.horizontal-roll-item text{
		height: 45rpx;
		line-height: 45rpx;
		font-size: 35rpx;
		display: -webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:1;
		text-overflow: ellipsis;
		overflow: hidden;
		color: #FEB82B;
	}

	.item-combo-presented{
		margin-top: 10rpx;
	}
	.item-combo-desc{
		width: 100%;
		height: 274rpx;
		margin-top: 10rpx;
		padding: 4rpx;
	}
	.item-combo-desc text{
		font-size: 35rpx;
		line-height: 35rpx;
		-webkit-line-clamp:8;
	}
</style>
