<!-- 程序入口 -->
<script>
	export default {
		onLaunch: function() {
			console.log('启动监听');
		},
		onShow: function() {
			console.log('onShow前台运行');
		},
		onHide: function() {
			console.log('onHide后台运行');
		}
	}
</script>

<style>
	/* 猜你喜欢|热门推荐 */
   .block-label-container{
		display: flex;
		justify-content: flex-start;
   }
   /* (猜你喜欢|热门推荐)左边的方块 */
   .container-block{
		height: 40rpx;
		width: 14rpx;
		background: #FEB82B;
   }
   /* (猜你喜欢|热门推荐)左边的文字提示 */
   .container-label{
		height: 40rpx;
		line-height: 40rpx;
		font-size: 36rpx;
		margin-left: 20rpx;
		font-weight: bold;
		display: block;
   }
   /* 仅显示1行多余的省略号替换*/
   .horizontal-line{
		display: -webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:1;
		text-overflow: ellipsis;
		overflow: hidden;
   }
   /* 自制菜品-容器*/
   .bottom-btn-container{
   	display: flex;
   	justify-content: space-between;
   	font-size:34rpx;
   	color: #ffffff;
   	width: 100%;
	position:fixed;
	bottom:0rpx;
	z-index: 66;
	align-items: center;
   }
   /* 自制菜品-左边-上一步*/
   .bottom-btn-left{
   	height:80rpx;
   	line-height: 80rpx;
   	width: 50%;
   	background: #333334;
   	text-align: center;
   }
   /* 自制菜品-右边-下一步|提交*/
   .bottom-btn-right{
   	height:80rpx;
   	line-height: 80rpx;
   	width: 50%;
   	background:#F19149;
   	text-align: center;
   }
   /* 自制菜品-左边|右边-点击时的样式*/
   .view-bottom-hover{
   	color: #FEB82B;
   }
   /* 提示文字说明*/
   .label-tips-description{
	   margin-left: 10rpx;
	   margin-top: 20rpx;
	   margin-bottom: 20rpx;
	   font-size: 35rpx;
   }
   /* 提示文字说明-输入框*/
   .label-description-input input{
   	   border: 1px solid rgba(0, 0, 0, 0.1);
   	   height: 70rpx;
   	   line-height: 70rpx;
   	   padding: 0 4rpx;
   	   border-radius: 10rpx;
   }
   /* 提示文字说明-文本域*/
   .label-description-textarea textarea{
   	   border: 1px solid rgba(0, 0, 0, 0.1);
   	   padding: 8rpx;
   	   width: 97.8%;
   	   height: 280rpx;
   	   font-size: 35rpx;
	   line-height: 35rpx;
   	   border-radius: 10rpx;
   	   margin-right: 10rpx;
   }
   /* 文本域本身-不带 margin-right [若最外层的 margin 0 10rpx 时使用]*/
   .textarea-view-self{
	   border: 1px solid rgba(0, 0, 0, 0.1);
	   height: 280rpx;
	   font-size: 35rpx;
	   line-height: 35rpx;
	   padding: 8rpx;
	   width: 97.8%;
	   border-radius: 10rpx;
   }
   /* 底部的返回*/
   .botton-backtrack{
	   height:80rpx;
	   line-height: 80rpx;
	   width: 100%;
	   text-align: center;
	   background: #F19149;
	   color: #ffffff;
	   display: flex;
	   justify-content: center;
	   position:fixed;
	   bottom:0rpx;
	   z-index: 10;
   }
   .botton-backtrack-hover{
	   color: #FEB82B;
   }
</style>
