<template>
	<view class="profile-info-root">
		<image class="profile-image" :src="params.image"></image>
		<view class="profile-container">
			<view class="title-pv-follow">
				<view class="left-title">
					<view class="view-text-container">
						<text class="text-title">{{params.title}}</text>
					</view>
					<view class="pv-container">
						<image class="left-icon" src="/static/images/eye_normal.svg"></image>
						<view class="view-pv">
							<text class="pv-text">{{infoData.BROWSE || '1'}}浏览</text>
						</view>
					</view>
					<view class="browse-container">
						<image class="browse-icon" src="/static/icon/follow_normal.svg"></image>
						<view class="browse-text">
							<text class="follow-total">{{infoData.FOLLOW || '0'}}关注</text>
						</view>
					</view>
				</view>
				<view class="right-follow" hover-class="follow-text-hover"><text class="follow-text">关注</text></view>
			</view>
			<view class="view-details">
				{{infoData.DETAILS}}
			</view>
			<view class="horizontal-line"></view>
			<view class="container-left-right">
				<view class="container-view-left"></view>
				<view class="container-view-right"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props : {},
		data(){
			return {
				params : {
					"kid" : null,
					"title" : null,
					"image":null
				},
				infoData : {
					"BROWSE":"101",
					"FOLLOW":"2w",
					"DETAILS":"总体规划的原则是：依山就势、因地制宜；城随水转、水绕城流；户户养花、人人嬉水，实现古城建设与自然环境的完美结合。同时确保古城具备文化展示、商务会展、旅游接待、观光娱乐、商业贸易、文艺展演等功能，使之成为涵盖吃、住、行，游、购、娱为一体的综合旅游风景区。在设计风格上，做到古代水西古建风格、以彝族建筑为主的民族建筑风格、黔西北民居建筑风格三种风格相结合，同时镶嵌独树一帜的古城门楼、四蛙神鼓、牌坊、寨门、彝族十月太阳历广场、水西传奇实景舞台、木结构旅游小品房等，形成“十步一个故事，百步一段历史”的民族文化旅游古镇。"
				}
			}
		},
		methods:{},
		onLoad(options){
			this.params = options;
		}
	}
</script>

<style scoped>
	/* 最外层 */
	.profile-info-root{
		margin-bottom: 10rpx;
	}
	/* 顶部的图片 */
	.profile-image{
		width: 100%;
		height: 360rpx;
		margin-bottom: 10rpx;
	}
	/* 具体内容区域 */
	.profile-container{
		margin-left: 6rpx;
		margin-right: 8rpx;
	}
	.title-pv-follow{
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 68rpx;
	}
	.left-title{
		width: 85%;
		height: 68rpx;
		line-height:68rpx;
		display: flex;
		justify-content: space-between;
		vertical-align: middle;
	}
	.view-text-container{
		width: 65%;
	}
	.text-title{
		font-weight: 600;
		font-size: 35rpx;
		margin-left: 6rpx;
		height: 68rpx;
		line-height: 68rpx;
		display: -webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:1;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.pv-container,.browse-container{
		width: 35%;
		display: flex;
		justify-content: flex-start;
	}
	.left-icon{
		width: 36rpx;
		height: 36rpx;
		margin-top: 15rpx;
	}
	.browse-icon{
		width: 33rpx;
		height: 33rpx;
		margin-top: 15rpx;
	}
	.right-follow{
		width: 15%;
		height: 68rpx;
		line-height:68rpx;
		vertical-align: middle;/* 垂直居中 */
		text-align: center;/* 水平居中 */
		color: #FEB82B;
	}
	.view-pv{
		height: 68rpx;
		line-height: 68rpx;
		vertical-align: middle;
	}
	.browse-text{
		height: 68rpx;
		line-height: 68rpx;
		vertical-align: middle;
		text-align: left;
	}
	.pv-text,.follow-total{
		color: #808080;
		font-size: 28rpx;
		display: -webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:1;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.follow-text{
		border: 2rpx solid #FEB82B;
		padding: 8rpx 12rpx;
		font-size: 30rpx;
	}
	.follow-text-hover{
		color: #000000;
	}
	.view-details{
		font-size: 32rpx;
		line-height: 33rpx;
		padding-left: 10rpx;
	}
	.horizontal-line{
		width: 100%;
		border-bottom: 1px solid #a6a6a6;
		margin-top: 18rpx;
		margin-bottom: 20rpx;
	}
   .container-left-right{
	   width: 100%;
	   height: 80rpx;
	   display: flex;
	   justify-content: space-between;
   }
   .container-view-left{
	   height: 80rpx;
	   background: #C0C0C0;
	   width: 70%;
   }
   .container-view-right{
	   height: 80rpx;
	   line-height:80rpx;
	   background: #c0a7ba;
	   width: 30%;
   }
</style>
