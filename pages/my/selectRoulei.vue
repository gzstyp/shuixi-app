<!-- 选择畜类 -->
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
				var lists = this.storedb.state.selfCook.listRoulei;
				if(lists == null || lists.length <= 0){
					this.dialog('请选择肉类');
					return;
				}
				console.info(this.storedb.state.selfCook.listShucai);
				console.info(lists);
			}
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
