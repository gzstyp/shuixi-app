
details,item,list,-container,detail-describe

category-list-container
category-item-container,

页面跳转时 type =1是优选套餐;2是厨师精选;3实时新品;4热门菜系;5菜品分类列表

统一灰色：
color: #808080;

line-height(行高) x -webkit-line-clamp(行数) = height(高度);行高推荐为字体大小的基础上加2数据值

font-size(字体大小) x -webkit-line-clamp(行数) = height(高度) √

******************************跟font-size有关,待调试调整******************************
(1)、
.detail-info{
	font-size: 34rpx;
	height: 108rpx;
	line-height: 36rpx;
	-webkit-line-clamp:3;
}
******************************跟font-size有关,待调试调整******************************

1、将两个view元素分左右对齐　　

　　(1) display: flex;justify-content: space-between;

　　(2) display: flex;flex-direction: row;然后通过width(%)，text-align:center/right等进行调节

2、垂直居中　

　　父元素：display: flex;  子元素：align-self: center;

	display: flex;
	justify-content:center;
	align-items:Center;

3、水平居中　

　　text-align: center; 子元素是文本（非块元素）

　　margin: 0px auto; 子元素为块元素（div，view）

4、头部导航栏、底部导航栏

　　可以通过 position: fixed;z-index: 100;left: 0px;top: 0px;width: 100%;height: 60px;background-color: white;自定义

　　头部导航栏：下一个块元素需要用margin-top进行上下分开，否则导航栏会将其覆盖

/* 转发的文字 */
.bottom-transpond-text{
	font-size:34rpx;
	height:80rpx;
	margin-top: -4rpx;
	line-height: 80rpx;
}

5、
display: flex;/* 并排排列,让每一个view都是并排排列 */
flex-wrap: wrap;/* 表示内容在一行排不下时，就换行,即就往下一行排列 */
justify-content: space-between;/* 向两边撑开,也就是往两边排 */
-webkit-line-clamp:1;/* 仅在一行显示 */
-webkit-line-clamp:2;/* 内容再多也仅显示2行显示 */
text-overflow: ellipsis;/* 多出的则显示省略号 */

justify-content: flex-end;往右边排列
text-align: right;往右边排列
text-align: end;往右边排列
左右两个时，使用百分比

6、
.logo-name-pv image{
	width:64rpx;
	height:64rpx;
	vertical-align:middle;/* 控制图片和文字在同一行对齐显示 */
}

7、图片和文字垂直居中对齐
---------------------------------------------------------
.container-left{
	width: 65%;
	height:64rpx;
}
.comment-head{
	width:64rpx;
	height:64rpx;
	vertical-align:middle;/* 关键点 */
}
.comment-username{
	font-size: 30rpx;
	color: #808080;
	overflow: hidden;/* 多于的隐藏 */
}
---------------------------------------------------------

*********************************************************
.container-line{
    width:50%;
    height:64rpx;
}
.line-image{
    margin-top: 7rpx;/* (64-50)/2=7 除以2*/
    width:50rpx;
    height:50rpx;
    vertical-align:middle;
}
*********************************************************
8、

align-items: center;
justify-content: center;

vertical-align: middle;/* 垂直居中 */
text-align: center;/* 水平居中 */

-----限制显示几行并在多于的省略号(方式1),需要注意的是line-height行间距,而line-height是跟font-size大小有关,其值肯定要大于它-----
	font-size:30rpx;
	height:103rpx;/* 字体大小 x 行数 */
	line-height:34rpx;/* 行间距 */
	display: -webkit-box;/* 必须,少了这个不会出现… */
	-webkit-box-orient:vertical;/* 必须,少了这个不会出现… */
	-webkit-line-clamp:1;/* 必须 */
	text-overflow: ellipsis;/* 必须 */
	overflow: hidden;/* 必须 */
-----限制显示几行并在多于的省略号,需要注意的是line-height行间距,而line-height是跟font-size大小有关,其值肯定要大于它-----

9、
-------------------------------------让文字绝对的居中且多余的字数出现省略号-------------------------------------
view:
<view class="pv-container">
	<image class="left-icon" src="/static/images/eye_normal.svg"></image>
	<view class="view-pv">
		<text class="pv-text">{{item.PVTOTAL || '1'}}浏览</text>
	</view>
</view>
css:
.pv-container{
	background: #9dcc94;
	width: 35%;
	display: flex;
	justify-content: flex-start;
}
.left-icon{
	width: 36rpx;
	height: 36rpx;
	margin-top: 15rpx;
}
.view-pv{
	height: 68rpx;
	line-height: 68rpx;
	vertical-align: middle;
}
.pv-text{
	color: #808080;
	font-size: 28rpx;
	display: -webkit-box;
	-webkit-box-orient:vertical;
	-webkit-line-clamp:1;
	text-overflow: ellipsis;
	overflow: hidden;
}
-------------------------------------让文字绝对的居中且多余的字数出现省略号-------------------------------------
10、
左右两边
*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
<view class="container-left-right">
	<view class="container-view-left"></view>
	<view class="container-view-right">125</view>
</view>

.container-left-right{
   width: 100%;
   height: 100rpx;
   display: flex;
   justify-content: space-between;
}
.container-view-left{
   height: 100rpx;
   line-height:100rpx;
   align-self: center;
   background: #C0C0C0;
   width: 70%;
}
.container-view-right{
   height: 100rpx;
   line-height:100rpx;
   background: #c0a7ba;
   width: 30%;
}
***********************************华丽的分隔线***********************************
view:
<view class="container-left-right">
<view class="container-view-left">
	<image :src="infoData.PHOTO"></image>
	<view class="show-label">
		<text>{{infoData.AUTHOR}}</text>
	</view>
</view>
<view class="container-view-right">
	<view class="right-label">
		<text>全部评论({{infoData.COMMENT_TOTAL || '0'}})</text>
	</view>
	<view class="next-more">
		<image src="/static/icon/icon_more_normal.svg"></image>
	</view>
</view>
</view>
css:
/* 左右两边布局的容器 */
.container-left-right{
   width: 100%;
   height: 100rpx;
   display: flex;
   justify-content: space-between;
}
/* 左右两边-左边 */
.container-view-left{
   height: 100rpx;
   line-height:100rpx;
   background: #C0C0C0;
   width: 60%;
   display: flex;
   justify-content: flex-start;
}
/* 左右两边-左边->图标|图片 */
.container-view-left image{
   height: 100rpx;
   width: 100rpx;
   text-align: center;
}
/* 左右两边-左边->文字内容 */
.show-label{
   font-size: 35rpx;
   display: -webkit-box;
   -webkit-box-orient:vertical;
   -webkit-line-clamp:1;
   text-overflow: ellipsis;
   overflow: hidden;
}
/* 左右两边-右边 */
.container-view-right{
   height: 100rpx;
   line-height:100rpx;
   background: #c0a7ba;
   width: 40%;
   display: flex;
   justify-content: flex-end;
}
/* 左右两边-右边->文字内容 */
.container-view-right text{
   font-size:35rpx;
   color: #bfbfbf;
}
/* 左右两边-右边->(图标图片)-容器 */
.next-more{
	height: 100rpx;
	line-height:100rpx;
	background: #92ff79;
	vertical-align: middle;
}
/* 左右两边-右边->图标图片*/
.next-more image{
   width: 50rpx;
   height: 50rpx;
   vertical-align: middle;
}
/* 左右两边-右边->文字内容*/
.right-label{
   font-size: 35rpx;
   display: -webkit-box;
   -webkit-box-orient:vertical;
   -webkit-line-clamp:1;
   text-overflow: ellipsis;
   overflow: hidden;
}
***********************************华丽的分隔线***********************************
*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
****************************************布局思路****************************************
<view class="left-title">
	<view class="view-text-container">
		<text class="text-title">{{item.TITLE}}</text>
	</view>
	<view class="pv-container">
		<image class="left-icon" src="/static/images/eye_normal.svg"></image>
		<view class="view-pv">
			<text class="pv-text">{{item.PVTOTAL || '1'}}浏览</text>
		</view>
	</view>
</view>
****************************************布局思路****************************************
12、
.button-container{
	text-align: center;/* 让文字水平居中 */
	display: flex;/* 弹性布局 */
	justify-content: center;/* 让容器水平居中 */
}

13、
/* 底部操作菜单 */
width: 100%;
position:fixed;
bottom:0rpx;
z-index: 66;

.page-bottom{
	position:fixed;
	left: 30rpx;
	bottom:0rpx;
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	/* width: 690rpx;
	height: 100rpx;
	background: rgba(255,255,255,.9);
	box-shadow: 0 0 20rpx 0 rgba(0,0,0,.5);
	border-radius: 16rpx; */
}
.action-btn-group{
	display: flex;
	height: 76rpx;
	border-radius: 20rpx;
	overflow: hidden;
	/* box-shadow: 0 20rpx 40rpx -16rpx #fa436a;
	box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	background: linear-gradient(to right, #ffac30,#fa436a,#F56C6C);
	margin-left: 20rpx; */
	position:relative;
}

//1.导入子组件
import search from './views/search.vue';
//2.注册组件
components:{
	search
},
<template>
	<view class="contenting">
		<!-- 3.渲染 -->
		 <search></search>
	</view>
</template>

父组件定义值(父组件传值及值类型):
data () {
	return {
		imgsrc : "/static/images/icon_realtime.png",
		label : "实时新品",
		objects : {
			"kid":"2048"
		}
	}
},
传值(item-head的vue文件是itemHead.vue):
<item-head ref="itemViewHead" :imgsrc="imgsrc" :label="label" :objects="objects"></item-head>,其中imgsrc是不能随便取随呢!!!

子组件获取值
props : {
	imgsrc:null,
	label:null,
	objects : {
		type : Object,
		default : null
	}
},
调用方法:
methods : {
	headMore : function(){
		hints.info(this.object.kid);
	}
}

调用并显示值
<view class="view-head-root">
	<image class="view-head-left" :src="imgsrc"/>
	<text class="view-head-label">{{label}}</text>
	<image src="/static/images/next_normal.svg" mode="widthFix" class="view-head-right" @click="headMore()"/>
</view>

#### ②全局引入
```javascript
    //全局引入 （main.js
    import wsLoadMore from './components/wsure-load-more/load-more.vue';
    Vue.component('wsLoadMore',wsLoadMore)

```
样式
.cell {
	position: relative;
	display: flex;
	padding: 30rpx 70rpx 30rpx 30rpx;
	transition: background-color 0.3s;
	font-size: 32rpx;
}
.cell:not(:last-child):before {
	content: '';
	position: absolute;
	bottom: 0;
	left: 30rpx;
	right: 0;
	border-bottom: 1px solid #ebedf0;
	transform-origin: 0% 100%;
	transform: scaleY(0.5);
}
.cell:after {
	content: ' ';
	display: inline-block;
	height: 12rpx;
	width: 12rpx;
	border-width: 4rpx 4rpx 0 0;
	border-color: #c6c6c6;
	border-style: solid;
	-webkit-transform: rotate(45deg);
	transform: rotate(45deg);
	position: absolute;
	top: 50%;
	right: 45rpx;
	margin-top: -8rpx;
}
.cell.hover {
	background-color: #eeeeee;
}

水平拆分:
.info-bottom-collect{
	width: 50%;
	background: #333334;
	color: #FFFFFF;
	text-align: center;
}
.info-bottom-transpond{
	width: 50%;
	background:#F19149;
	color: #FFFFFF;
	text-align: center;
}

带变量:
uni.showToast({
	title: `点击第${index+1}个宫格`,
	icon: 'none'
});
methods: {
	getHeight : function(){
		var _this = this;
		var diffHeight = 0;
		let view = uni.createSelectorQuery().select(".content");
		view.boundingClientRect(data => {
			console.info(data);
			diffHeight = data.top;
		}).exec();	
	},
	bottomView : function(){
		var _this = this;
		let view = uni.createSelectorQuery().select(".bottom-view");
		view.boundingClientRect(data => {
			console.info(data);
		}).exec();	
	}
},
onLoad() {
	uni.getSystemInfo({
		success: function (res){
			var windowHeight = res.windowHeight;
			var windowWidth = res.windowWidth;
			console.info(windowWidth)
		}
	});
	this.bottomView();
}

changeSrc : function(){
	indexSrc++;
	var result = indexSrc % 2;
	if(result == 0){
		this.src = '/static/icon/icon_check_normal.svg';
	}else{
		this.src = '/static/icon/icon_check_selected.svg';
	}
},

vuex|数组的操作：
赋值
this.storedb.state.nickName = _username;
取值console.info(this.storedb.state.nickName);
handler : function(kid,bl){
	var _of = this.storedb.state.listStyle.indexOf(kid);
	if(bl){
		if(_of == -1){
			this.storedb.state.listStyle.push(kid);
		}else{
			this.storedb.state.listStyle.splice(_of,1);
		}
	}else{
		this.storedb.state.listStyle.splice(_of,1);
	}
	console.info(this.storedb.state.listStyle);
}