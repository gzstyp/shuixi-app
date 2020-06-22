<!-- 选择黄豆样式;from=1 -->
<template>
	<view class="make-menu-container">
		<view class="make-menu-root">
			<view class="view-tips">
				<text>
					选择菜品的烹饪方式
				</text>
			</view>
			<view style="width:100%;">
				<xfl-select
					:list="listCooks"
					:clearable="false"
					:showItemNum="listCooks.length"
					:style_Container="listBoxStyle"
					:placeholder="'选择烹饪方式'"
					:selectHideType="'independent'"
					@change="change"
				></xfl-select>
			</view>
			<view class="view-tips">
				<text>
					选择黄豆样式
				</text>
			</view>
			<view class="item-cook-root">
				<block v-for="(item,index) in listData" :key="index">
					<view class="view-detail-container">
						<itemSelected :item="item" :from="1"></itemSelected>
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
	import xflSelect from '../../components/xfl-select.vue';
	import itemSelected from './item/itemSelected.vue';
	import minModal from '../../components/min-modal/min-modal.vue';
	var indexSrc = 0;
	export default{
		components: {
			xflSelect,
			itemSelected,
			minModal
		},
		props : {},
		data() {
			return {
				listBoxStyle: `height: 38px; font-size: 16px;padding-left:10rpx;`,
				selectKey : null,
				listCooks : [
					{
						"KID" : "100101",
						"value" : "凉拌"
					},
					{
						"KID" : "100102",
						"value" : "炒（煎、炸）"
					},
					{
						"KID" : "100103",
						"value" : "煮（炖）"
					},
					{
						"KID" : "100104",
						"value" : "烙（烤）"
					}
				],
				listData : [
					{
						"KID":"10011",
						"NAME":"毛豆",
						"IMAGE":"/static/my/maodou.png"
					},
					{
						"KID":"10012",
						"NAME":"干黄豆",
						"IMAGE":"/static/my/ganhuangdou.png"
					},
					{
						"KID":"10013",
						"NAME":"水泡黄豆",
						"IMAGE":"/static/my/shuipaohuangdou.png"
					},
					{
						"KID":"10014",
						"NAME":"豆面",
						"IMAGE":"/static/my/doumian.png"
					},
					{
						"KID":"10015",
						"NAME":"豆浆",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"10016",
						"NAME":"豆腐脑",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"10017",
						"NAME":"水豆腐",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"10018",
						"NAME":"白豆腐",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"10019",
						"NAME":"黄豆腐干",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"10020",
						"NAME":"豆腐颗",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"10021",
						"NAME":"豆豉",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"10022",
						"NAME":"豆腐乳",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"10023",
						"NAME":"豆腐丝",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"10024",
						"NAME":"豆腐皮",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"10025",
						"NAME":"豆芽",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"10026",
						"NAME":"豆渣",
						"IMAGE":"/static/icon/icon_image.svg"
					},
					{
						"KID":"10027",
						"NAME":"豆棒",
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
			change({ newVal, oldVal, index, orignItem }) {
				this.selectKey = orignItem.KID;
				this.storedb.state.selfCook.cookType = orignItem.KID;
			},
			nextStep : function(){
				if(this.selectKey == null || this.selectKey.length <= 0){
					this.dialog('请选择烹饪方式');
					return;
				}
				uni.navigateTo({
					url : '/pages/my/selectShucai',
				});
			}
		},
		onLoad(){
			/* 重置 */
			this.storedb.state.selfCook = {
				cookType : null,/* 选择菜品的烹饪方式 */
				listStyle : [],/* 选择黄豆样式,from=1 */
				listShucai : [],/* 选择蔬菜,from=2 */
				listRoulei : [],/* 选择(畜类)肉类,from=3 */
				listBuwei : [],/* 肉类部位,from=4 */
				listQinlei : [],/* 选择禽类,from=5 */
				listHaixian : [],/* 选择海鲜,from=6 */
				listPeiliao : [],/* 选择配料,from=7 */
			}
		}
	}
</script>

<style scoped>
	.make-menu-container{

	}
	.make-menu-root{
		margin: 0 13rpx;
		padding: 0;
	}
	.view-tips{
		margin-left: 10rpx;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		font-size: 35rpx;
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
