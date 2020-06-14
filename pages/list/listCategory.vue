<!--菜品类别列表-->
<template>
	<view></view>
</template>

<script>
	export default{
		props : {},
		data() {
			return {
				id : null
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
</style>
