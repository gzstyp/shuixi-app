<template>
	<view>
		<view class="add-combo-root">
			<view class="label-tips-description">
				<text>套餐名称</text>
			</view>
			<view class="label-description-input">
				<input type="text" maxlength="20" v-model="formData.comboName" placeholder="输入套餐名称(限制20个字符)"/>
			</view>
			<view class="label-tips-description">
				<text>适用人数</text>
			</view>
			<view class="label-description-input">
				<input type="text" maxlength="20" v-model="formData.comboCount" placeholder="输入适用人数(如:3-5)"/>
			</view>
			<view class="label-tips-description">
				<text>套餐介绍</text>
			</view>
			<textarea type="text" maxlength="512" class="textarea-view-self" v-model="formData.comboDesc" placeholder="套餐介绍说明(限制512个字符)"/>
			<view class="label-tips-description">
				<text>选择菜品组合</text>
			</view>
			<view class="item-cook-root">
				<block v-for="(item,index) in listData" :key="index">
					<view class="view-detail-container">
						<itemCombo :item="item" :from="1"></itemCombo>
					</view>
				</block>
			</view>
			<view class="label-tips-description">
				<text>赠送菜品</text>
			</view>
			<view class="item-cook-root">
				<block v-for="(item,index) in listPresented" :key="index">
					<view class="view-detail-container">
						<itemCombo :item="item" :from="2"></itemCombo>
					</view>
				</block>
			</view>
			<min-modal ref="modal"></min-modal>
		</view>
		<view style="margin-bottom:10rpx;height:1rpx;width:100%;"></view>
		<view class="bottom-btn-container">
			<view class="bottom-btn-left" hover-class="view-bottom-hover" @click="previous()">
				<text>返回</text>
			</view>
			<view class="bottom-btn-right" hover-class="view-bottom-hover" @click="submit()">
				<text>提交</text>
			</view>
		</view>
	</view>
</template>

<script>
	import minModal from '../../components/min-modal/min-modal.vue';
	import itemCombo from '../item/itemCombo.vue';
	export default{
		props : {},
		components: {
			itemCombo,
			minModal
		},
		data() {
			return {
				formData : {
					comboName : '',
					comboCount : '',
					comboDesc : '',
					listSelect : [],
					listPresented : []
				},
				listData : [
					 {
						"KID":"100011",
						"CATE_IMAGE":"/static/images/realtime01.png",
						"CATENAME":"草莓水果奶油蛋糕"
					 },
					 {
						"KID":"100012",
						"CATE_IMAGE":"/static/images/realtime02.png",
						"CATENAME":"清蒸金针鱼"
					 },
					 {
						"KID":"100113",
						"CATE_IMAGE":"/static/images/realtime03.png",
						"CATENAME":"山楂银耳汤草莓"
					 },
					 {
						"KID":"100014",
						"CATE_IMAGE":"/static/images/realtime02.png",
						"CATENAME":"清蒸金针鱼"
					 },
					 {
						"KID":"100115",
						"CATE_IMAGE":"/static/images/realtime03.png",
						"CATENAME":"山楂银耳汤"
					 }
				],
				listPresented : [
					 {
						"KID":"200011",
						"CATE_IMAGE":"/static/images/realtime01.png",
						"CATENAME":"草莓水果奶油蛋糕"
					 },
					 {
						"KID":"200012",
						"CATE_IMAGE":"/static/images/realtime02.png",
						"CATENAME":"清蒸金针鱼"
					 },
					 {
						"KID":"200113",
						"CATE_IMAGE":"/static/images/realtime03.png",
						"CATENAME":"山楂银耳汤草莓"
					 }
				],
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
			/* 返回 */
			previous : function(){
				uni.navigateBack();
			},
			/* 提交 */
			submit : function(){
				var _comboName = this.formData.comboName;
				var _comboCount = this.formData.comboCount;
				var _comboDesc = this.formData.comboDesc;
				var _listSelect = this.storedb.state.comboAdd.listSelect;
				var _listPresented = this.storedb.state.comboAdd.listPresented;
				this.formData.listSelect = _listSelect;
				this.formData.listPresented = _listPresented;
				if(_comboName == null || _comboName.length <= 0){
					this.dialog('请输入套餐名称');
					return;
				}
				if(_comboCount == null || _comboCount.length <= 0){
					this.dialog('请输入适用人数');
					return;
				}if(_comboDesc == null || _comboDesc.length <= 0){
					this.dialog('请输入套餐介绍');
					return;
				}if(_listSelect == null || _listSelect.length <= 0){
					this.dialog('请选择套餐的菜品');
					return;
				}
			},
			/* 重置 */
			resetData : function(){
				this.storedb.state.comboAdd.listSelect = [];
			}
		},
		onLoad() {
			this.resetData();
		}
	}
</script>

<style scoped>
	.add-combo-root{
		margin: 0 10rpx 80rpx 10rpx;
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
		width:29.9%;
		flex-direction: column;
		display: flex;
		box-sizing: border-box;
		margin-bottom:12rpx;
		margin-left:18rpx;
		height: 240rpx;
	}
</style>
