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
</style>
