<template>
	<view>
		<view class="header">
			<view class="bg">
				<view class="box">
					<view class="box-hd">
						<view class="avator" @click="goLogin" :hover-class="!storedb.state.userInfo.login ? 'logo-hover' : ''">
							<image :src="userInfo.photo"></image>
						</view>
						<view class="nick-name">{{userInfo.nickName}}</view>
					</view>
					<view class="box-bd">
						<view class="item" hover-class="my-hover-class">
							<view class="icon"><image src="/static/icon/icon_message.svg"/></view>
							<view class="text">消息</view>
						</view>
						<view class="item" hover-class="my-hover-class">
							<view class="icon"><image src="/static/icon/icon_favorite.svg"/></view>
							<view class="text">收藏</view>
						</view>
						<view class="item" hover-class="my-hover-class">
							<view class="icon"><image src="/static/icon/fans_selected.svg"/></view>
							<view class="text">粉丝</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="list-content">
			<view class="list">
				<view class="li noborder" @click="goLogin">
					<view class="icon"><image src="/static/icon/icon_card.svg"></image></view>
					<view class="text">编辑资料</view>
					<image class="to" src="/static/icon/icon_to_normal.svg"></image>
				</view>
			</view>
			<view class="list">
				<view class="li">
					<view class="icon"><image src="/static/icon/icon_issue.svg"></image></view>
					<view class="text">常见问题</view>
					<image class="to" src="/static/icon/icon_to_normal.svg"></image>
				</view>
				<view class="li">
					<view class="icon"><image src="/static/icon/icon_customer_center.svg"></image></view>
					<view class="text">客户中心</view>
					<image class="to" src="/static/icon/icon_to_normal.svg"></image>
				</view>
				<view class="li">
					<view class="icon"><image src="/static/icon/icon_share_selected.svg"></image></view>
					<view class="text">分享小程序</view>
					<image class="to" src="/static/icon/icon_to_normal.svg"></image>
				</view>
				<view class="li" v-if="userInfo.shops" @click="regsiter()">
					<view class="icon"><image src="/static/icon/icon_regsiter.svg"></image></view>
					<view class="text">商家入驻</view>
					<image class="to" src="/static/icon/icon_to_normal.svg"></image>
				</view>
				<view class="li" v-if="userInfo.shops" @click="menuUpload()">
					<view class="icon"><image src="/static/icon/icon_cate_upload.svg"></image></view>
					<view class="text">菜谱上传</view>
					<image class="to" src="/static/icon/icon_to_normal.svg"></image>
				</view>
				<view class="li" v-if="userInfo.shops" @click="selfControlMenu()">
					<view class="icon"><image src="/static/icon/icon_self_control_menu.svg"></image></view>
					<view class="text">自制菜品</view>
					<image class="to" src="/static/icon/icon_to_normal.svg"></image>
				</view>
				<view class="li" v-if="userInfo.shops" @click="taoCanManager()">
					<view class="icon"><image src="/static/icon/icon_youxuan.svg"></image></view>
					<view class="text">套餐管理</view>
					<image class="to" src="/static/icon/icon_to_normal.svg"></image>
				</view>
				<view class="li" @click="help()">
					<view class="icon"><image src="/static/icon/icon_help.svg"></image></view>
					<view class="text">帮助中心</view>
					<image class="to" src="/static/icon/icon_to_normal.svg"></image>
				</view>
				<view class="li">
					<view class="icon"><image src="/static/icon/icon_setting.svg"></image></view>
					<view class="text">系统设置</view>
					<image class="to" src="/static/icon/icon_to_normal.svg"></image>
				</view>
				<view class="li">
					<view class="icon"><image src="/static/icon/icon_opinion.svg"></image></view>
					<view class="text">意见反馈</view>
					<image class="to" src="/static/icon/icon_to_normal.svg"></image>
				</view>
				<view class="li">
					<view class="icon"><image src="/static/icon/icon_about.svg"></image></view>
					<view class="text">关于我们</view>
					<image class="to" src="/static/icon/icon_to_normal.svg"></image>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				userInfo : {
					photo : null,
					nickName : null,
					shops : false
				}
			}
		},
		onLoad(options){
			this.userInfo.photo = this.storedb.state.userInfo.avatarUrl;
			this.userInfo.nickName = this.storedb.state.userInfo.nickName;
			this.userInfo.shops = this.storedb.state.userInfo.shops;
		},
		methods: {
			navTo : function(url){
				uni.navigateTo({
					url : url
				});
			},
			goLogin(){
				var _login = this.storedb.state.userInfo.login;
				if(!_login){
					this.login();
				}else{
					this.editInfo();
				}
			},
			editInfo : function(){
				this.navTo('/pages/my/editInfo?type=1');
			},
			login : function(){
				this.navTo('/pages/my/login?type=1');
			},
			help : function(){
				this.navTo('/pages/my/help');
			},
			/* 商家入住 */
			regsiter : function(){
				this.navTo('/pages/my/regsiter');
			},
			/* 菜谱上传 */
			menuUpload : function(){
				this.navTo('/pages/my/menuUpload');
			},
			/* 自制菜品 */
			selfControlMenu : function(){
				this.navTo('/pages/my/makeMenu');
			},
			/* 套餐管理 */
			taoCanManager : function(){
				this.navTo('/pages/my/listCombo?from=1');
			}
		}
	}
</script>

<style lang="scss">
	.my-hover-class{
		color:#FEB82B;
	}
	page{
		background-color:#f1f1f1;
		font-size: 30rpx;
	}
	.header{
		background: #fff;
		height: 290rpx;
		padding-bottom: 110rpx;
		.bg{
			width: 100%;
			height:200rpx;
			padding-top:100rpx;
			background-color:#FEB82B;
		}
	}
	.box{
		width: 650rpx;
		height: 280rpx;
		border-radius: 20rpx;
		margin: 0 auto;
		background: #fff;
		box-shadow: 0 5rpx 20rpx 0rpx rgba(0, 0, 150, .2);
		.box-hd{
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			justify-content: center;
			.avator{
				width: 160rpx;
				height: 160rpx;
				background: #fff;
				border: 5rpx solid #fff;
				border-radius: 50%;
				margin-top: -80rpx;
				overflow: hidden;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.nick-name{
				width: 100%;
				text-align: center;
			}
		}
		.box-bd{
			display: flex;
			flex-wrap: nowrap;
			flex-direction: row;
			justify-content: center;
			.item{
				flex: 1 1 auto;
				display: flex;
				flex-wrap: wrap;
				flex-direction: row;
				justify-content: center;
				border-right: 1px solid #f1f1f1;
				margin: 15rpx 0;
				&:last-child{
					border: none;
				}
				.icon{
					width: 80rpx;
					height: 80rpx;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.text{
					width: 100%;
					text-align: center;
					margin-top: 10rpx;
				}
			}
		}
	}
	.list-content{
		background: #ffffff;
	}
	.list{
		width:100%;
		border-bottom:15rpx solid  #f1f1f1;
		background: #ffffff;
		&:last-child{
			border: none;
		}
		.li{
			width:92%;
			height:100rpx;
			padding:0 4%;
			border-bottom:1px solid rgb(243,243,243);
			display:flex;
			align-items:center;
		&.noborder{
			border-bottom:0
			}
			.icon{
				flex-shrink:0;
				width:50rpx;
				height:50rpx;
				image{
					width:50rpx;
					height:50rpx;
				}
			}
			.text{
				padding-left:20rpx;
				width:100%;
				color:#666;
			}
			.to{
				flex-shrink:0;
				width:40rpx;
				height:40rpx;
			}
		}
	}
</style>
