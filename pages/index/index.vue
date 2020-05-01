<template>
<scroll-view scroll-y="true" class="container" bindscrolltoupper="upper" >
	<view class="search flex-wrp">
	  <view class="search-left flex-item">
		  <image src="static/image/search.png"></image>
		  <input placeholder="搜索话题, 问题或人" placeholder-class="search-placeholder"/>
	  </view>
	  <view class="search-right flex-item" bindtap="upper">
		  <image src="static/image/lighting.png"></image>
	  </view>
	  <!-- 文字滚动 -->
	  <uni-notice-bar showClose="true" scrollable="true" single="true" text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
	  
	  <!-- 查看更多 -->
	   <uni-notice-bar @getmore="getMore" :showGetMore="true" moreText="查看更多" single="true" text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
	  <uni-card title="这是一段非常长的标题文字,这是一段极度长的标题文字,这是一段极端长的标题文字" thumbnail="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" extra="额外信息" note="Tips">
	      内容主体，可自定义内容及样式
	  </uni-card>
	  <uni-card is-full=true title="这是一段非常长的标题文字,这是一段极度长的标题文字,这是一段极端长的标题文字" thumbnail="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" extra="2018.12.12" >
	      <image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" style="width: 100%;"></image>
	  </uni-card>
	<uni-card 
	    title="Dcloud" 
	    mode="title" 
	    :is-shadow="true" 
	    thumbnail="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg" 
	    extra="技术没有上限" 
	    note="Tips"
	>那是一个秋意盎然、金风送爽的日子,我和父母一起来到了位于上师大旁的康健园.一踏进公园,一股浓郁的桂香扑鼻而来,泌人心脾,让我心旷神怡,只见一朵朵开得正烈的金色桂花,迎风而立,仿佛在向我招手.我们追着这桂香,走进了清幽的公园.
	</uni-card>
	<uni-card
	    title="标题文字"
	    mode="style"
	    :is-shadow="true"
	    thumbnail="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg"
	    extra="Dcloud 2019-05-20 12:32:19"
	    note="Tips"
	>
	        那是一个秋意盎然、金风送爽的日子，我和父母一起来到了位于上师大旁的康健园。一踏进公园，一股浓郁的桂香扑鼻而来，泌人心脾,让我心旷神怡，只见一朵朵开得正烈的金色桂花，迎风而立，仿佛在向我招手。我们追着这桂香，走进了清幽的公园。
	</uni-card>
	<uni-card title="Dcloud" note="true">
	    默认内容
	    <template v-slot:footer>
	        <view class="footer-box">
	            <view>喜欢</view>
	            <view>评论</view>
	            <view>分享</view>
	        </view>
	    </template>
	</uni-card>
	</view>
</scroll-view>
</template>
<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.container{
	  height: 1500rpx;
	}
	.container .search{
	  width: 735rpx;
	  height: 65rpx;
	  padding: 12.5rpx 0 12.5rpx 15rpx;
	  background: #2A8CE5;
	}
	.container .search-left{
	  flex: 8;
	  background: #4EA3E7;
	  text-align: left;
	}
	.container .search-left input{
	  display: inline-block;
	  height: 65rpx;
	  font-size: 26rpx;
	}
	.search-placeholder{
	  color: #8CCEFD;
	  line-height: 20rpx;
	}
	.container .search .search-left image{
	  display: inline-block;
	  width: 35rpx;
	  height: 35rpx;
	  padding: 15rpx 15rpx 15rpx 20rpx;
	}
	.container .search .search-right{
	  flex: 1;
	}
	.container .search .search-right image{
	  width: 45rpx;
	  height: 45rpx;
	  padding: 10rpx;
	}
	
	.container{
	  padding: 0;
	  font-size: 14rpx;
	  background: #F0F4F3;
	  color: #000;
	}
</style>
