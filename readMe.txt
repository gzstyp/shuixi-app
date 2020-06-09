

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
