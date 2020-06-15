
details,item,list,-container,detail-describe

category-list-container
category-item-container,

统一灰色：
color: #808080;

8a8a8a


1、将两个view元素分左右对齐　　

　　(1) display: flex;justify-content: space-between;

　　(2) display: flex;flex-direction: row;然后通过width(%)，text-align:center/right等进行调节

2、垂直居中　

　　父元素：display: flex;  子元素：align-self: center;

3、水平居中　

　　text-align: center; 子元素是文本（非块元素）

　　margin: 0px auto; 子元素为块元素（div，view）

4、头部导航栏、底部导航栏

　　可以通过 position: fixed;z-index: 100;left: 0px;top: 0px;width: 100%;height: 60px;background-color: white;自定义

　　头部导航栏：下一个块元素需要用margin-top进行上下分开，否则导航栏会将其覆盖

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

-----限制显示几行并在多于的省略号(方式1),需要注意的是line-height行间距,而line-height是跟font-size大小有关,其值肯定要大于它-----
	font-size:30rpx;
	height:103rpx;
	line-height:34rpx;/* 行间距 */
	display: -webkit-box;/* 必须,少了这个不会出现… */
	-webkit-box-orient:vertical;/* 必须,少了这个不会出现… */
	-webkit-line-clamp:3;/* 必须 */
	text-overflow: ellipsis;/* 必须 */
	overflow: hidden;/* 必须 */
-----限制显示几行并在多于的省略号,需要注意的是line-height行间距,而line-height是跟font-size大小有关,其值肯定要大于它-----
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
页面跳转时 type =1是优选套餐;2是厨师精选;3实时新品;4热门菜系
