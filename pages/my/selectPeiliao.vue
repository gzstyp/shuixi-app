<!-- 选择配料;from=7 -->
<template>
	<view class="make-menu-root">
		<view class="make-menu-container">
			<view class="view-tips">
				<view class="peiliao-tips-container">
					<text>选择配料名称、用量、单位</text>
					<text class="peiliao-tips-btn" @click="rowAdd()">添加配料</text>
				</view>	
			</view>
			<view class="cells">
				<view class="cell">
					<view class="cell_line">
						<text class="cell-row percent-left">配料名称</text>
						<text class="cell-row percent-center">用量</text>
						<text class="cell-row percent-right">配料单位</text>
						<text class="cell-row percent-handler">操作</text>
					</view>
				</view>
			</view>
			<view class="cells">
				<block v-for="(item,index) in listInputs" :key="index">
					<view class="cell">
						<view class="cell_line">
							<view style="width:28%;">
								<xfl-select
									:list="listNames"
									:clearable="false"
									:showItemNum="listNames.length"
									:style_Container="listNamesBoxStyle"
									:placeholder="'选择名称'"
									@change="changeNames"
								></xfl-select>
							</view>
							<input class="cell-row percent-center percent-center-input" type="number" placeholder="输入数量"/>
							<view style="width:28%;">
								<xfl-select
									:list="listUnits"
									:clearable="false"
									:showItemNum="listUnits.length"
									:style_Container="listNamesBoxStyle"
									:placeholder="'选择单位'"
									@change="changeUnits"
								></xfl-select>
							</view>
							<view class="cell-row percent-handler" @click="rowRemove(index)">
								<view class="percent-handler-plus">
									<view class="percent-handler-delete">删除</view>
								</view>
							</view>
						</view>
					</view>
				</block>
			</view>
		</view>
		<view class="view-tips">
			<text>菜品名称</text>
		</view>
		<view class="peiliao-cate-name">
			<input type="text" maxlength="20" placeholder="取一个高大上的菜品名称(限制20个字符)"/>
		</view>
		<view class="view-tips">
			<text>烹饪小贴士</text>
		</view>
		<view class="peiliao-cate-name">
			<textarea type="text" rows="15" maxlength="256" placeholder="输入介绍菜品、注意事项、菜品特色(限制256个字符)"/>
		</view>
		<view class="view-tips">
			<text>添加菜品图片</text>
		</view>
		<view class="peiliao-upload-image">
			<image src="/static/icon/icon_plus_normal.svg"></image>
		</view>
		<view class="bottom-btn-container">
			<view class="bottom-btn-left" hover-class="view-bottom-hover" @click="previous()">
				<text>上一步</text>
			</view>
			<view class="bottom-btn-right" hover-class="view-bottom-hover" @click="submit()">
				<text>提交</text>
			</view>
		</view>
		<min-modal ref="modal"></min-modal>
	</view>
</template>

<script>
	import xflSelect from '../../components/xfl-select.vue';
	import minModal from '../../components/min-modal/min-modal.vue';
	var indexSrc = 0;
	export default{
		components: {
			xflSelect,
			minModal
		},
		props : {},
		data() {
			return {
				listNamesBoxStyle: `height:30px; font-size: 16px;padding-left:10rpx;`,
				listUnits : [
					{
						"KID":"10001",
						"value":"克"
					},
					{
						"KID":"10002",
						"value":"个"
					},
					{
						"KID":"10003",
						"value":"毫升"
					},
					{
						"KID":"10004",
						"value":"颗"
					}
				],
				listNames : [
					{
						"KID":"20001",
						"value":"低筋面粉"
					},
					{
						"KID":"20002",
						"value":"淡奶油"
					},
					{
						"KID":"30003",
						"value":"鸡蛋"
					},
					{
						"KID":"40004",
						"value":"芒果"
					},
					{
						"KID":"30005",
						"value":"草莓"
					},
					{
						"KID":"40006",
						"value":"牛奶"
					},
					{
						"KID":"30007",
						"value":"玉米油"
					},
					{
						"KID":"40008",
						"value":"白糖"
					}
				],
				listInputs : [{}]
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
			/* 提交 */
			submit : function(){
				console.info('选择菜品的烹饪方式:'+this.storedb.state.selfCook.cookType);
				console.info('选择黄豆样式:'+this.storedb.state.selfCook.listStyle);
				console.info('选择蔬菜:'+this.storedb.state.selfCook.listShucai);
				console.info('选择(畜类)肉类:'+this.storedb.state.selfCook.listRoulei);
				console.info('肉类部位:'+this.storedb.state.selfCook.listBuwei);
				console.info('选择禽类:'+this.storedb.state.selfCook.listQinlei);
				console.info('选择海鲜:'+this.storedb.state.selfCook.listHaixian);
				console.info('选择配料:'+this.storedb.state.selfCook.listPeiliao);
			},
			/* 重置 */
			resetData : function(){
				this.storedb.state.selfCook.listPeiliao = [];/* 选择配料,from=7 */
			},
			rowAdd : function(){
				this.listInputs.push({});
			},
			rowRemove : function(index){
				var _len = this.listInputs.length;
				if(_len != 1){
					this.listInputs.splice(index,1);
				}
			},
			changeNames : function({ newVal, oldVal, index, orignItem }) {
				console.info(orignItem.KID);
			},
			changeUnits : function({ newVal, oldVal, index, orignItem }) {
				console.info(orignItem.KID);
			}
		},
		onLoad(){
			this.resetData();
		}
	}
</script>

<style scoped>
	.make-menu-root{
		margin-bottom: 80rpx;
	}
	.make-menu-container{
		margin: 0 4rpx;
		padding: 0;
	}
	.view-tips{
		margin-left: 10rpx;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		font-size: 35rpx;
	}
	.peiliao-tips-container{
		display: flex;
		justify-content: flex-start;
	}
	.peiliao-tips-btn{
		color: #4CA2FF;
		margin-left: 20rpx;
	}
	.cells {
		background: #ffffff;
		margin-left:10rpx;
		margin-right:10rpx;
		position: relative;
		box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.3);
	}
	/* 除了第一行的之外 */
	.cell:not(:last-child):before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0rpx;
		right: 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		transform-origin: 0% 100%;
		transform: scaleY(0.5);
	}
	.cell {
		position: relative;
		display: flex;
		padding:20rpx 10rpx 20rpx 0rpx;
		font-size: 32rpx;
	}
	.cell_line {
		flex: 1;
		justify-content: space-between;
		display: flex;
		height: 60rpx;
		line-height: 60rpx;
	}
	.cell-row{
		height:60rpx;
		display: -webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:1;
		text-overflow: ellipsis;
		overflow: hidden;
		vertical-align: middle;
	}
	.percent-left{
		width: 30%;
		padding-left: 10rpx;
	}
	.percent-center{
		width: 25%;
		padding-left: 10rpx;
	}
	.percent-center-input{
		align-items: center;
		vertical-align: middle;
		border-bottom: 1rpx solid #d9d9d9;
	}
	.percent-right{
		width: 30%;
	}
	.percent-handler{
		width: 15%;
		display:flex;
		justify-content: space-between;
	}
	.percent-handler-plus{
		height:60rpx;
		margin: 0px auto;
	}
	.percent-handler-delete{
		height: 60rpx;
		line-height: 60rpx;
		color: #ff6a6a;
		font-size: 30rpx;
	}
	.peiliao-cate-name{
		margin-top: 20rpx;
		margin-left: 10rpx;
		margin-right: 10rpx;
	}
	.peiliao-cate-name input{
		border: 1px solid rgba(0, 0, 0, 0.1);
		height: 70rpx;
		line-height: 70rpx;
		padding: 0 4rpx;
		border-radius: 10rpx;
	}
	.peiliao-cate-name textarea{
		border: 1px solid rgba(0, 0, 0, 0.1);
		padding: 8rpx;
		width: 97.8%;
		height: 280rpx;
		font-size: 30rpx;
		border-radius: 10rpx;
		margin-right: 10rpx;
	}
	.peiliao-upload-image{
		height: 260rpx;
		margin-left:10rpx;
		margin-right:10rpx;
	}
	.peiliao-upload-image image{
		height: 250rpx;
		width: 250rpx;
	}
</style>
