<!-- 选择蔬菜;from=2 -->
<template>
	<view class="make-menu-root">
		<view class="make-menu-container">
			<view class="item-cook-root">
				<block v-for="(item,index) in listData" :key="index">
					<view class="view-detail-container">
						<itemSelected :item="item" :from="2"></itemSelected>
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
						"KID":"201111",
						"NAME":"包心菜",
						"IMAGE":"/static/my/shucai/shucai01.png"
					},
					{
						"KID":"201112",
						"NAME":"大白菜",
						"IMAGE":"/static/my/shucai/shucai02.png"
					},
					{
						"KID":"201113",
						"NAME":"西洋菜",
						"IMAGE":"/static/my/shucai/shucai03.png"
					},
					{
						"KID":"201114",
						"NAME":"小白菜",
						"IMAGE":"/static/my/shucai/shucai04.png"
					},
					{
						"KID":"201115",
						"NAME":"甘蓝菜",
						"IMAGE":"/static/my/shucai/shucai05.png"
					},
					{
						"KID":"201116",
						"NAME":"莴笋",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"201117",
						"NAME":"蕹菜",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"201118",
						"NAME":"菊芋",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"201119",
						"NAME":"黄花菜",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"201120",
						"NAME":"茴香",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"201121",
						"NAME":"扁豆",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"201122",
						"NAME":"山药",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"201123",
						"NAME":"朝鲜蓟",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"201124",
						"NAME":"笋瓜",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"201125",
						"NAME":"芫荽",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"201126",
						"NAME":"潺菜",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"201128",
						"NAME":"花椰菜",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"201129",
						"NAME":"西兰花",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"201130",
						"NAME":"金针菜",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"201131",
						"NAME":"芥菜",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"201132",
						"NAME":"白木耳",
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
			nextStep : function(){
				uni.navigateTo({
					url : '/pages/my/selectRoulei',
				});
			}
		},
		onLoad(){
			/* 重置 */
			this.storedb.state.selfCook.listShucai = [];/* 选择蔬菜,from=2 */
			this.storedb.state.selfCook.listRoulei = [];/* 选择(畜类)肉类,from=3 */
			this.storedb.state.selfCook.listBuwei = [];/* 肉类部位,from=4 */
			this.storedb.state.selfCook.listQinlei = [];/* 选择禽类,from=5 */
			this.storedb.state.selfCook.listHaixian = [];/* 选择海鲜,from=6 */
			this.storedb.state.selfCook.listPeiliao = [];/* 选择配料,from=7 */
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
