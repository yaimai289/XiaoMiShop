# 问题&方案

## 前端

> * div块之间出现空隙
> * 解决方法：设置div padding: 0.1px

<br>

> * 分隔线位置位于最后
> * 解决方法：将span提到li内

<br>

> * 导航栏列表不垂直居中
> * 设置ul属性margin为0

<br>

> * 如何获取字体图标
> * 通过request url获取数据发送路径，再获取css文件以及iconfont，提取css文件中font-face部分

<br>

> * 下载APP下方箭头制作
> * CSS边框

<br>

> * cart内的a标签垂直不居中
> * 转成inline-block，为iconfont单独设置行高与坐标

<br>

> * 简中网站logo显示异常
> * 从台湾官网页面源码下载svg标签，提取到.svg，最后剪裁并转.png，或者直接用svg

<br>

> * 文字遮挡图片
> * 图片所在块级元素的z-index

## 后端

> * 无法通过https协议访问
> * 通过acme申请SSL证书

> * 外网无法访问虚拟机
> * 通过Cpolar搭建隧道实现内网穿透

> * 访问时域名不固定且不符合网站需求
> * 申请域名并托管至cloudfalre，用CNAME转发
