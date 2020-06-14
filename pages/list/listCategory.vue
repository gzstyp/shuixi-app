<!--菜品类别列表-->
<template>
	<view class="category-list-container">
		<block v-for="(item,index) in listData" :key="index">
			<item-category :item="item"></item-category>
		</block>
	</view>
</template>

<script>
	import itemCategory from './items/itemCategory.vue';
	export default{
		components:{
			itemCategory
		},
		data() {
			return {
				id : null,
				listData : [
					{
						"KID":"1000001",
						"CATE_IMAGE":"/static/list/category/category01.png",
						"CATENAME":"凉拌黄瓜凉拌黄瓜凉拌黄瓜",
						"PVTOTAL":"1022w",
						"ENSHRINE_TOTAL":"30w",
						"SHOP_NAME":"湘掌门",
						"LOGO":"/static/list/category/pro_photo1.png",
						"STARS":"/static/icon/star2.svg"
					},
					{
						"KID":"1000002",
						"CATE_IMAGE":"/static/list/category/category02.png",
						"CATENAME":"麻辣凉皮",
						"PVTOTAL":"906w",
						"ENSHRINE_TOTAL":"120w",
						"SHOP_NAME":"新天地",
						"LOGO":"/static/list/category/pro_photo2.png",
						"STARS":"/static/icon/star1.svg"
					},
					{
						"KID":"1000003",
						"CATE_IMAGE":"/static/list/category/category03.png",
						"CATENAME":"魔芋丝冷饼",
						"PVTOTAL":"160w",
						"ENSHRINE_TOTAL":"230w",
						"SHOP_NAME":"江南沙城",
						"LOGO":"/static/list/category/pro_photo2.png",
						"STARS":"/static/icon/star1.svg"
					},
					{
						"KID":"1000004",
						"CATE_IMAGE":"/static/list/category/category04.png",
						"CATENAME":"凉拌皮蛋",
						"PVTOTAL":"252w",
						"ENSHRINE_TOTAL":"102w",
						"SHOP_NAME":"喜来登菜馆",
						"LOGO":"/static/list/category/pro_photo1.png",
						"STARS":"/static/icon/star3.svg"
					}
				]
			}
		},
		methods:{},
		created : function(){
			//请求数据
		},
		onLoad(option){
			//console.info(option);//接收才参数option是json格式
			this.id = option.kid;
		}
	}
</script>

<style scoped>
	.category-list-container{
		margin-left: 15rpx;
		margin-right: 15rpx;
	}
</style>
