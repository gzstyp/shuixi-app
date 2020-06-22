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
		<view class="view-bottom-next" hover-class="view-bottom-next-hover" @click="nextStep()">
			<text>下一步</text>
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
			nextStep : function(){				
				uni.navigateTo({
					url : '/pages/my/selectPeiliao',
				});
			}
		},
		onLoad(){
			/* 重置 */
			this.storedb.state.selfCook.listHaixian = [];/* 选择海鲜,from=6 */
			this.storedb.state.selfCook.listPeiliao = [];/* 配料选择,from=7 */
		}
	}
</script>

<style scoped>
	.make-menu-root{
		padding-top: 20rpx;
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
	.view-bottom-next{
		font-size:34rpx;
		height:80rpx;
		line-height: 80rpx;
		width: 100%;
		background:#F19149;
		justify-content: center;
		text-align: center;
	}
	.view-bottom-next-hover{
		color: #ffffff;
	}
</style>
