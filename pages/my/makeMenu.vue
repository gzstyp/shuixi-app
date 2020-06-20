<template>
	<view class="make-menu-root">
		<view class="view-tips">
			<text>
				请选择你的菜品的烹饪方式
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
				请选择黄豆样式
			</text>
		</view>
		<view>
			<image :src="src" style="width: 50rpx;height: 50rpx;" @click="changeSrc()"></image>
		</view>
		<view class="view-bottom-next" hover-class="view-bottom-next-hover">
			<text>下一步</text>
		</view>
	</view>
</template>

<script>
	import xflSelect from '../../components/xfl-select.vue';
	var indexSrc = 0;
	export default{
		components: {
			xflSelect
		},
		props : {},
		data() {
			return {
				listBoxStyle: `height: 38px; font-size: 16px;`,
				selectKey : null,
				src : '/static/icon/icon_check_normal.svg',
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
				listStyles : [
					{
						"KID":"10011",
						"NAME":"毛豆",
						"IMAGE":"/static/my/maodou.png",
						"COUNT":0
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
						"IMAGE":"/static/my/maodou.png"
					},
					{
						"KID":"10015",
						"NAME":"豆浆",
						"IMAGE":"/static/icon/image_placeholder.svg"
					},
					{
						"KID":"10016",
						"NAME":"豆腐脑",
						"IMAGE":"/static/icon/image_placeholder.svg"
					},
					{
						"KID":"10017",
						"NAME":"水豆腐",
						"IMAGE":"/static/icon/image_placeholder.svg"
					},
					{
						"KID":"10018",
						"NAME":"白豆腐",
						"IMAGE":"/static/icon/image_placeholder.svg"
					},
					{
						"KID":"10019",
						"NAME":"黄豆腐干",
						"IMAGE":"/static/icon/image_placeholder.svg"
					},
					{
						"KID":"10020",
						"NAME":"豆腐颗",
						"IMAGE":"/static/icon/image_placeholder.svg"
					},
					{
						"KID":"10021",
						"NAME":"豆豉",
						"IMAGE":"/static/icon/image_placeholder.svg"
					},
					{
						"KID":"10022",
						"NAME":"豆腐乳",
						"IMAGE":"/static/icon/image_placeholder.svg"
					},
					{
						"KID":"10023",
						"NAME":"豆腐丝",
						"IMAGE":"/static/icon/image_placeholder.svg"
					},
					{
						"KID":"10024",
						"NAME":"豆腐皮",
						"IMAGE":"/static/icon/image_placeholder.svg"
					},
					{
						"KID":"10025",
						"NAME":"豆芽",
						"IMAGE":"/static/icon/image_placeholder.svg"
					},
					{
						"KID":"10026",
						"NAME":"豆渣",
						"IMAGE":"/static/icon/image_placeholder.svg"
					},
					{
						"KID":"10027",
						"NAME":"豆棒",
						"IMAGE":"/static/icon/image_placeholder.svg"
					}
				]
			}
		},
		methods:{
			change({ newVal, oldVal, index, orignItem }) {
				this.selectKey = orignItem.KID;
				console.info(this.selectKey);
			},
			changeSrc : function(){
				indexSrc++;
				var result = indexSrc % 2;
				if(result == 0){
					this.src = '/static/icon/icon_check_normal.svg';
				}else{
					this.src = '/static/icon/icon_check_selected.svg';
				}
			}
		}
	}
</script>

<style scoped>
	.make-menu-root{
		margin: 0 2rpx;
		padding: 0;
	}
	.view-tips{
		margin-left: 10rpx;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		font-size: 35x;
	}
	.view-bottom-next{
		font-size:34rpx;
		height:80rpx;
		line-height: 80rpx;
		width: 100%;
		background:#F19149;
		position: fixed;
		justify-content: center;
		text-align: center;
		left: 0px;
		bottom: 0px;
	}
	.view-bottom-next-hover{
		color: #ffffff;
	}
</style>
