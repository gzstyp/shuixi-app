<template>
	<view class="active">
		<view class="conteng">
			<block v-for="(item,index) in listData" :key="index">
				<view class="conteng-acticle" @click="localCont()">
					<view class="conteng-img">
						<image :src="item.image" mode="aspectFill"></image>
					</view>
					<!-- 文字介绍 -->
					<view class="active-introduce">
						<view class="active-name">{{item.name}}</view>
						<view class="active-title">{{item.list}}</view>
						<view class="active-label">{{item.label}}</view>
						<view class="purchase>">
							<text class="active-price">￥{{item.price}}</text>
							<text class="active-purchase">{{item.buy || '0'}}人已购</text>
						</view>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default{
		name:"productList",
		props : {
			lists : Array
		},
		data() {
			return {
				listData :[
					{
						"KID" : "20001",
						"image" : "/static/images/index/choiceness1.png",
						"name" : "三亚租车",
						"list" : "我是中国人",
						"label" : "法拉利租车",
						"price" : 80.00,
						"buy" : 102
					},
					{
						"KID" : "20001",
						"image" : "/static/images/index/choiceness2.png",
						"name" : "海1南1岛",
						"list" : "我是中国人，我爱我的祖国",
						"label" : "中国人",
						"price" : "8899",
						"buy" : "88"
					},
					{
						"KID" : "20001",
						"image" : "/static/images/index/choiceness3.png",
						"name" : "海8南8岛",
						"list" : "我是中国人，我爱我的祖国，我爱我的祖国,样式要结合这个来一起使用",
						"label" : "中国人",
						"price" : 108.50,
						"buy" : 150
					},
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
	/* 外边距,上下0，左右10 */
	.active{
		margin: 0 20rpx;
	}
	/* 表示内容在一行排不下时，就换行,即就往下一行排列 */
	.conteng{
		display: flex;/* 并排排列,让每一个view都是并排排列 */
		flex-wrap: wrap;/* 表示内容在一行排不下时，就换行,即就往下一行排列 */
		justify-content: space-between;/* 向两边撑开,也就是往两边排 */
		width:100%;/* 撑满,下面的.conteng-acticle样式要结合这个来一起使用,即100/2=50% */
		-webkit-flex-wrap:wrap;
		overflow: hidden;/* 溢出隐藏 */
	}
	/* 每一个盒子,每个盒子是48%，因为 没一行要排两个view，那100%/2=50%啦 */
	.conteng-acticle{
		width: 48%;
		flex-direction: column;
		display: flex;
		box-sizing: border-box;
	}
	/* 让两个view并排排列 */
	.purchase{
		display: flex;/* 并排排列,让两个view并排排列 */
		align-items: center;/* 让文字居中 */
		padding-bottom: 10rpx;/* 离下面的距离是10 */
	}
	/* 图片用一个view来包裹它 */
	.conteng-img{
		height: 400rpx !important;
		object-fit: cover;
		overflow: hidden;
	}
	.conteng-img image{
		width: 100% !important;
		height: 100% !important;
		object-fit: cover;
		border-radius: 10rpx;
	}
	.active-name{
		font-size: 32rpx;
		color: #d0b083;
		margin: 10rpx 0;
		display: -webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:1;/* 仅在一行显示 */
		overflow: hidden;
	}
	.active-title{
		font-size: 32rpx;
		color: #444444;
		font-weight: bold;
		line-height: 50rpx;
		display: -webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:2;/* 内容再多也仅显示2行显示 */
		text-overflow: ellipsis;/* 多出的则显示省略号 */
		overflow: hidden;
		height: 100rpx !important;
	}
	.active-label{
		font-size: 25rpx;
		color: #d0b083;
		padding: 10rpx 0;
	}
	.active-price{
		font-size: 36rpx;
		color: #ff6b28;
		padding-right: 9rpx;
	}
	.active-purchase{
		font-size: 30rpx;
		color: #cacaca;
	}
	.active-introduce{
		padding-left: 10rpx;
	}
</style>
