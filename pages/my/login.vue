<!-- 登录页面 -->
<template>
	<view class="login-root">
		<view class="login-container">
			<view class="top-text">
				<view class="jilu">记录生活点点滴滴</view>
				<view class="kaiqi">开启美食生活</view>
				<view class="yuanni">愿你每一餐都有美味相伴</view>
			</view>
			<view class="image-container">
				<image class="login-image" src="/static/my/login.png"></image>
			</view>
			<view class="login-box-username">
				<view class="login-box-container">
					<view class="username-label">登录账号</view>
					<view class="username-input"><input type="text" v-model="formLogin.username" maxlength="20"/></view>
				</view>
			</view>
			<view class="login-box-password" style="margin-top: 10rpx;">
				<view class="login-box-container">
					<view class="password-label">登录密码</view>
					<view class="username-input"><input type="password" v-model="formLogin.password" maxlength="20"/></view>
				</view>
			</view>
			<view class="button-container" @click="loginDefault()">
				<view class="login-button" hover-class="login-button-hover">登录</view>
			</view>
			<view class="weChat-container" @click="loginWeChat()">
				<view class="weChat-button" hover-class="weChat-button-hover">微信登录</view>
			</view>
		</view>
		<min-modal ref="modal"></min-modal>
	</view>
</template>

<script>
	import minModal from '../../components/min-modal/min-modal.vue';
	export default{
		components: {
			minModal
		},
		props : {},
		data() {
			return {
				formLogin : {
					username : null,
					password : null
				}
			}
		},
		methods : {
			dialog : function(msg){
				this.$refs.modal.handleShow({
					title: '系统提示',
					content: msg,
					showCancel : false
				});
			},
			loginDefault : function(){
				var _username = this.formLogin.username;
				var _password = this.formLogin.password;
				if(_username == null || _username.length <= 0){
					this.dialog('请输入登录账号');
					return;
				}
				if(_password == null || _password.length <= 0){
					this.dialog('请输入登录密码');
					return;
				}
				//this.storedb.state.userInfo.avatarUrl;
				this.storedb.state.userInfo.nickName = _username;
				if(_username == 'sj'){
					this.storedb.state.userInfo.shops = true;
				}else{
					this.storedb.state.userInfo.shops = false;
				}
				this.storedb.state.userInfo.login = true;
				uni.reLaunch({
				    url: '/pages/my/my'
				});
			},
			loginWeChat : function(){
				
			}
		},
		created(){}
	}
</script>

<style scoped>
	.login-root{
		margin: 0 2rpx;
		padding: 0;
	}
	.login-container{
		margin-top: 50rpx;
	}
	.top-text{
		width: 100%;
		text-align: center;
	}
	.jilu{
		font-size: 40rpx;
		font-weight: bold;
	}
	.kaiqi{
		font-size: 35rpx;
		color: #808080;
		margin-top: 20rpx;
	}
	.yuanni{
		font-size: 35rpx;
		color: #808080;
		margin-top: 6rpx;
	}
	.image-container{
		margin-top: 20rpx;
		text-align: center;
	}
	.login-image{
		width: 75%;
	}
	.login-box-username,.login-box-password{
		margin-top:40rpx;
		height: 80rpx;
		text-align: center;
		display: flex;
		justify-content: center;
	}
	.login-box-container{
		height: 80rpx;
		width: 80%;
		display: flex;
		justify-content: start;
	}
	.username-label,.password-label{
		height: 80rpx;
		line-height: 80rpx;
		width: 30%;
	}
	.username-input{
		width: 70%;
		text-align: left;
	}
	.username-input input{
		vertical-align: middle;
		height: 78rpx;/* 76rpx */
		padding: 0 3rpx;
		border-bottom: 1rpx solid #808080;
	}
	.button-container{
		text-align: center;/* 让文字水平居中 */
		display: flex;/* 弹性布局 */
		justify-content: center;/* 让容器水平居中 */
	}
	.login-button{
		margin-top: 66rpx;
		font-size: 45rpx;
		background: #FEB82B;
		height: 45rpx;
		line-height: 45rpx;
		padding: 16rpx 0;
		width: 80%;
		border-radius: 20rpx;
	}
	.login-button-hover{
		background: #fe9a27;
	}
	.weChat-container{
		text-align: center;
		display: flex;
		justify-content: center;
	}
	.weChat-button{
		margin-top: 50rpx;
		font-size: 40rpx;
		height: 40rpx;
		color: #808080;
	}
	.weChat-button-hover{
		color: #FEB82B;
	}
</style>
