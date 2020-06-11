
 图片文件夹static下的可以这样直接 /static/images/index/choiceness2.png 访问

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