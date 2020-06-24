<!-- 菜谱上传 -->
<template>
	<view class="menu-upload-root">
		<view class="label-tips-description">
			<text>菜谱名称</text>
		</view>
		<view class="label-description-input">
			<input type="text" maxlength="20" placeholder="输入菜的名称(限制20个字符)"/>
		</view>
		<view class="label-tips-description">
			<text>营养价值介绍</text>
		</view>
		<view class="menu-upload-cate-name">
			<textarea type="text" rows="15" maxlength="512" placeholder="输入菜品的营养价值,菜品特色(限制512个字符)"/>
		</view>
		<view class="label-tips-description">
			<text>添加菜品图片</text>
		</view>
		<view class="menu-upload-image">
			<image src="/static/icon/icon_plus_normal.svg"></image>
		</view>
		<view class="label-tips-description">
			<view class="peiliao-tips-container">
				<text>选择食材配料、用量、单位</text>
				<text class="peiliao-tips-btn" @click="rowAdd()">添加食材</text>
			</view>	
		</view>
		<view class="cells">
			<view class="cell">
				<view class="cell_line">
					<text class="cell-row percent-left">食材配料</text>
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
		<view class="label-tips-description">
			<text>
				烹饪方式
			</text>
		</view>
		<view style="width:100%;">
			<xfl-select
				:list="listCooks"
				:clearable="false"
				:showItemNum="listCooks.length"
				:style_Container="listBoxStyle"
				:placeholder="'选择方式'"
				:selectHideType="'independent'"
				@change="changeCooks"
			></xfl-select>
		</view>
		<view class="label-tips-description">
			<text>
				辣味程度
			</text>
		</view>
		<view style="width:100%;">
			<xfl-select
				:list="listDegree"
				:clearable="false"
				:showItemNum="listDegree.length"
				:style_Container="listBoxStyle"
				:placeholder="'选择程度'"
				:selectHideType="'independent'"
				@change="changeDegree"
			></xfl-select>
		</view>
		<view class="label-tips-description">
			<text>烹饪小贴士</text>
		</view>
		<view class="menu-upload-cate-name">
			<textarea type="text" rows="15" maxlength="512" placeholder="输入烹饪小贴士,注意事项,说明……(限制512个字符)"/>
		</view>
		<view class="bottom-submit" hover-class="bottom-submit-hover">
			<text>提交上传</text>
		</view>
		<min-modal ref="modal"></min-modal>
	</view>
</template>

<script>
	import xflSelect from '../../components/xfl-select.vue';
	import minModal from '../../components/min-modal/min-modal.vue';
	export default{
		components: {
			xflSelect,
			minModal
		},
		props : {},
		data() {
			return {
				listBoxStyle: `height: 38px; font-size: 16px;padding-left:10rpx;`,
				cookKey : null,
				listCooks : [
					{
						"KID" : "100101",
						"value" : "凉拌"
					},
					{
						"KID" : "100102",
						"value" : "炒(煎|炸)"
					},
					{
						"KID" : "100103",
						"value" : "煮(炖)"
					},
					{
						"KID" : "100104",
						"value" : "烙(烤)"
					},
					{
						"KID" : "100105",
						"value" : "卤(焖)"
					}
				],
				degreeKey : null,
				listDegree : [
					{
						"KID" : "100101",
						"value" : "青椒"
					},
					{
						"KID" : "100102",
						"value" : "麻辣"
					},
					{
						"KID" : "100103",
						"value" : "酸辣"
					},
					{
						"KID" : "100104",
						"value" : "超辣"
					}
				],
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
		methods:{
			dialog : function(msg){
				this.$refs.modal.handleShow({
					title: '系统提示',
					content: msg,
					showCancel : false
				});
			},
			changeCooks({ newVal, oldVal, index, orignItem }) {
				this.cookKey = orignItem.KID;
			},
			changeDegree({ newVal, oldVal, index, orignItem }) {
				this.degreeKey = orignItem.KID;
			},
			/* 提交 */
			submit : function(){
				
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
		}
	}
</script>

<style scoped>
	.menu-upload-root{
		margin: 0 10rpx;
		padding: 0;
	}
	.peiliao-tips-btn{
		color: #4CA2FF;
		margin-left: 20rpx;
	}
	.cells {
		background: #ffffff;
		margin-right:4rpx;
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
	.menu-upload-cate-name input{
		border: 1px solid rgba(0, 0, 0, 0.1);
		height: 70rpx;
		line-height: 70rpx;
		padding: 0 4rpx;
		border-radius: 10rpx;
	}
	.menu-upload-cate-name textarea{
		border: 1px solid rgba(0, 0, 0, 0.1);
		padding: 8rpx;
		width: 97.8%;
		height: 280rpx;
		font-size: 35rpx;
		line-height: 35rpx;
		border-radius: 10rpx;
		margin-right: 10rpx;
	}
	.menu-upload-image{
		height: 260rpx;
		margin-left:10rpx;
		margin-right:10rpx;
	}
	.menu-upload-image image{
		height: 250rpx;
		width: 250rpx;
	}
	.bottom-submit{
		margin-top: 20rpx;
		margin-bottom: 2rpx;
		height: 80rpx;
		width: 100%;
		font-size:35rpx;
		background: #FEB82B;
		text-align: center;
		line-height: 80rpx;
		border-radius: 12rpx;
		color: #000000;
	}
	.bottom-submit-hover{
		color: #ffffff;
	}
</style>
