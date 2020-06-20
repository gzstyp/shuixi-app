<!-- 帮助中心 -->
<template>
	<view class="help-root">
		<empty v-if='listData.length === 0'></empty>
	</view>
</template>

<script>
	import empty from '../../components/empty.vue'
	export default{
		components: {
			empty
		},
		props : {},
		data() {
			return {
				listData : []
			}
		},
		methods:{}
	}
</script>

<style scoped>
	.help-root{
		margin: 0 2rpx;
		padding: 0;
	}
</style>
