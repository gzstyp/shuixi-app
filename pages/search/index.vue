<template>
    <view style="padding-top:6rpx;">
		<view class="search-container">
			<view style="width:18%;">
				<xfl-select
					:list="list"
					:clearable="false"
					:showItemNum="3"
					:style_Container="listBoxStyle"
					:placeholder="'菜品'"
					:selectHideType="'independent'"
				></xfl-select>
			</view>
			<input class="search-input" type="text" placeholder="请输入关键字" />
			<button class="search-btn">搜索</button>
		</view>
	</view>
</template>

<script>
	import xflSelect from '../../components/xfl-select.vue';
    export default{
        props : {},
		components: {
			xflSelect
		},
        data() {
            return {
				listBoxStyle: `height: 40px; font-size: 16px;`,
				list: ['菜品','店铺', '商家']
			}
        },
        methods:{
			visibleChange(isShow) {
				// 列表框的显示隐藏事件
				console.log('isShow::', isShow);
			},
			change({ newVal, oldVal, index, orignItem }) {
				console.log(newVal, oldVal, index, orignItem);
			}
		},
		onLoad(option){
			//console.info(option);//option是json格式
			uni.setNavigationBarTitle({title: "搜索内容"})
		}
    }
</script>

<style scoped>
	.search-container{
		display: flex;
	}
	.search-input{
		width:64%;
		height:80rpx;
		line-height: 80rpx;
		border:1px solid #c0c4cc;
		padding: 0 6rpx;
		margin-left:2rpx;
		margin-right:2rpx;
	}
	.search-btn{
		width: 18%;
		height:85rpx;
		line-height: 85rpx;
		font-size: 30rpx;
		text-align: center;
	}
</style>
