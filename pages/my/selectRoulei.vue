<!-- 选择(肉类)畜类;from=3,4肉类部位 -->
<template>
	<view class="make-menu-root">
		<view class="make-menu-container">
			<view class="item-cook-root">
				<block v-for="(item,index) in listData" :key="index">
					<view class="view-detail-container">
						<itemSelected :item="item" :from="3"></itemSelected>
					</view>
				</block>
			</view>
			<view class="view-tips">
				<text>
					选择肉类部位
				</text>
			</view>
			<view class="item-cook-root">
				<block v-for="(item,index) in listBuwei" :key="index">
					<view class="view-detail-container">
						<itemSelected :item="item" :from="4"></itemSelected>
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
						"KID":"3011111",
						"NAME":"黄牛",
						"IMAGE":"/static/my/roulei/roulei01.png"
					},
					{
						"KID":"3011112",
						"NAME":"马",
						"IMAGE":"/static/my/roulei/roulei02.png"
					},
					{
						"KID":"3011113",
						"NAME":"羊",
						"IMAGE":"/static/my/roulei/roulei03.png"
					},
					{
						"KID":"3011114",
						"NAME":"狗",
						"IMAGE":"/static/my/roulei/roulei04.png"
					},
					{
						"KID":"3011115",
						"NAME":"猪",
						"IMAGE":"/static/my/roulei/roulei05.png"
					}
				],
				listBuwei : [
					{
						"KID":"401101",
						"NAME":"耳朵",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"401102",
						"NAME":"舌头",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"401103",
						"NAME":"脚",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"401104",
						"NAME":"尾巴",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"401105",
						"NAME":"心",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"401106",
						"NAME":"肝",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"401107",
						"NAME":"肚",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"401108",
						"NAME":"肠",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"401109",
						"NAME":"瘦肉",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"401110",
						"NAME":"五花肉",
						"IMAGE":"/static/icon/icon_image.svg"
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
			/*下一步 */
			nextStep : function(){
				uni.navigateTo({
					url : '/pages/my/selectQinlei',
				});
			},
			/* 重置 */
			resetData : function(){
				this.storedb.state.selfCook.listRoulei = [];/* 选择(畜类)肉类,from=3 */
				this.storedb.state.selfCook.listBuwei = [];/* 肉类部位,from=4 */
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
