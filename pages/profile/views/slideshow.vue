<template>
	<view>
		<swiper 
			:indicator-dots="true" 
			:autoplay="true" 
			:interval="3000" 
			:duration="1000" 
			:circular="true" 
			indicator-color="rgba(255,255,255,5)" 
			indicator-active-color="#00ff00">
			<block v-for="(item,index) in slideList" :key="index">
				<swiper-item>
					<view class="swiper-item" @click="localCont()">
						<image :src="item.IMAGE" mode="aspectFill" class="imageurl"></image>
					</view>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				slideList : [
					{
						"KID" : "100001",
						"NAME" : "水西公园夜景",
						"IMAGE" : "/static/images/profile/banner1.png"
					},
					{
						"KID" : "100002",
						"NAME" : "人间仙境",
						"IMAGE" : "/static/images/profile/banner2.png"
					},
					{
						"KID" : "100003",
						"NAME" : "美翻了,我的水西",
						"IMAGE" : "/static/images/profile/banner3.png"
					}
				]
			}
		},
		methods:{
			localCont : function(){
				
			}
		}
	}
</script>

<style scoped>
	.imageurl{
		width: 100%;
		height: 320rpx !important;/* 提高层级 */
	}
	.swiper{
		height: 320rpx !important;
	}
</style>
