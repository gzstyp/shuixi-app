<!-- 选择海鲜;from=6 -->
<template>
	<view class="make-menu-root">
		<view class="make-menu-container">
			<view class="item-cook-root">
				<block v-for="(item,index) in listData" :key="index">
					<view class="view-detail-container">
						<itemSelected :item="item" :from="6"></itemSelected>
					</view>
				</block>
			</view>
			<min-modal ref="modal"></min-modal>
		</view>
		<view class="bottom-btn-container">
			<view class="bottom-btn-left" hover-class="view-bottom-hover" @click="previous()">
				<text>上一步</text>
			</view>
			<view class="bottom-btn-right" hover-class="view-bottom-hover" @click="nextStep()">
				<text>下一步</text>
			</view>
		</view>
	</view>
</template>

<script>
	import itemSelected from './item/itemSelected.vue';
	import minModal from '../../components/min-modal/min-modal.vue';
	var indexSrc = 0;
	export default{
		components: {
			itemSelected,
			minModal
		},
		props : {},
		data() {
			return {
				listData : [
					{
						"KID":"6611111",
						"NAME":"鱼",
						"IMAGE":"/static/my/haixian/yu.svg"
					},
					{
						"KID":"6611112",
						"NAME":"虾",
						"IMAGE":"/static/my/haixian/xia.svg"
					},
					{
						"KID":"6611113",
						"NAME":"蟹",
						"IMAGE":"/static/my/haixian/xie.svg"
					},
					{
						"KID":"6611113",
						"NAME":"扇贝",
						"IMAGE":"/static/my/haixian/shanbei.svg"
					}
				]
			}
		},
		methods : {
			dialog : function(msg){
				this.$refs.modal.handleShow({
					title: '系统提示',
					content: msg,
					showCancel : false
				});
			},
			/* 上一步 */
			previous : function(){
				this.resetData();
				uni.navigateBack();
			},
			/* 下一步 */
			nextStep : function(){
				uni.navigateTo({
					url : '/pages/my/selectPeiliao',
				});
			},
			/* 重置 */
			resetData : function(){
				this.storedb.state.selfCook.listHaixian = [];/* 选择海鲜,from=6 */
				this.storedb.state.selfCook.listPeiliao = [];/* 选择配料,from=7 */
			}
		},
		onLoad(){
			this.resetData();
		}
	}
</script>

<style scoped>
	.make-menu-root{
		padding-top: 20rpx;
		margin-bottom: 80rpx;
	}
	.make-menu-container{
		margin: 0 13rpx;
		padding: 0;
	}
	.item-cook-root{
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		width:100%;
		-webkit-flex-wrap:wrap;
		overflow: hidden;
	}
	.view-detail-container{
		width:22%;
		flex-direction: column;
		display: flex;
		box-sizing: border-box;
		margin-bottom:10rpx;
		margin-left: 20rpx;
		height: 200rpx;
	}
</style>
