<!-- 选择禽类;from=5 -->
<template>
	<view class="make-menu-root">
		<view class="make-menu-container">
			<view class="item-cook-root">
				<block v-for="(item,index) in listData" :key="index">
					<view class="view-detail-container">
						<itemSelected :item="item" :from="5"></itemSelected>
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
						"KID":"5511111",
						"NAME":"鸡",
						"IMAGE":"/static/my/qinlei/ji.svg"
					},
					{
						"KID":"5511112",
						"NAME":"鸭",
						"IMAGE":"/static/my/qinlei/ya.svg"
					},
					{
						"KID":"5511113",
						"NAME":"鹅",
						"IMAGE":"/static/my/qinlei/e.svg"
					},
					{
						"KID":"5511114",
						"NAME":"鸽",
						"IMAGE":"/static/my/qinlei/gezi.svg"
					},
					{
						"KID":"5511115",
						"NAME":"鹌鹑",
						"IMAGE":"/static/my/qinlei/anchun.svg"
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
					url : '/pages/my/selectHaixian',
				});
			},
			/* 重置 */
			resetData : function(){
				this.storedb.state.selfCook.listQinlei = [];/* 选择禽类,from=5 */
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
	.view-tips{
		margin-left: 10rpx;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		font-size: 35rpx;
	}
</style>
