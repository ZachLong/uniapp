<template>
	<view class="container999" @touchstart="refreshStart" @touchmove="refreshMove" @touchend="refreshEnd">
		<!-- 刷新组件需搭配scroll-view使用，并在pages.json中添加 "disableScroll":true-->
		<refresh ref="refresh" @isRefresh='isRefresh'></refresh>
		<view class='nav'>
			<!-- #ifdef H5 -->
			<view style="height: 44px;width: 100%;">边距盒子</view>
			<!-- #endif -->
			<view class="head">
				<!-- 搜索 -->
				<view class='searchInput999'>
					<view class='searchBox999'>
						<image src='/static/icon-search.png' class='search999'></image>
					</view>
					<input class='input999' placeholder="输入关键词"></input>
				</view>
				<view class="fa-icon-item">
					<fa-icon class="fa-icon" type="camera"  color="#ffffff"></fa-icon>
					<text class="fa-icon-text">发布</text>
				</view>
			</view>
			<!-- 导航栏 agents导航栏标题 -->
			<navTab ref="navTab" :tabTitle="tabTitle" @changeTab='changeTab'></navTab>
		</view>
		<!-- swiper切换 swiper-item表示一页 scroll-view表示滚动视窗 -->
		<swiper style="min-height: 100vh;" :current="currentTab" @change="swiperTab">
			<swiper-item v-for="(listItem,listIndex) in list" :key="listIndex">
				<scroll-view style="height: 100%;" scroll-y="true" @scrolltolower="lower1" scroll-with-animation :scroll-into-view="toView">
					<view :id="'top'+listIndex" style="width: 100%;height: 180rpx;">边距盒子</view>
					<view class='content'>
						<view class='card' v-for="(item,index) in listItem" v-if="listItem.length > 0" :key="index">
							{{item}}
						</view>
					</view>
					<view class='noCard' v-if="listItem.length===0">
						暂无信息
					</view>
					<view style="width: 100%;height: 100rpx;opacity:0;">底部占位盒子</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	const util = require('@/util/util.js');
	import refresh from '@/components/refresh.vue';
	import navTab from '@/components/navTab.vue';
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		components: {
			refresh,
			navTab,
			uniIcons
		},
		data() {
			return {
				currentPage: 'index',
				toView: '', //回到顶部id
				tabTitle: ['推荐', '问答', '公告', '拼车', '交易', '新闻', '其他'], //导航栏格式 --导航栏组件
				currentTab: 0, //swiper所在页
				pages: [1, 1, 1, 1, 1, 1, 1], //第几个swiper的第几页
				list: [
					[1, 2, 3, 4, 5, 6],
					['a', 'b', 'c', 'd', 'e', 'f'],
					[],
					['2233', '4234', '13144', '324244'],
					[],
					[]
				] //数据格式
			}
		},
		methods: {
			toTop() {
				this.toView = ''
				setTimeout(() => {
					this.toView = 'top' + this.currentTab
				}, 10)
			},
			changeTab(index) {
				this.currentTab = index;
			},
			// 其他请求事件 当然刷新和其他请求可以写一起 多一层判断。
			isRequest() {
				return new Promise((resolve, reject) => {
					this.pages[this.currentTab]++
					var that = this
					setTimeout(() => {
						uni.hideLoading()
						uni.showToast({
							icon: 'none',
							title: `请求第${that.currentTab + 1 }个导航栏的第${that.pages[that.currentTab]}页数据成功`
						})
						let newData = ['新数据1', '新数据2', '新数据3']
						resolve(newData)
					}, 1000)
				})
			},
			// swiper 滑动
			swiperTab: function(e) {
				var index = e.detail.current //获取索引
				this.$refs.navTab.longClick(index);
			},
			// 加载更多 util.throttle为防抖函数
			lower1: util.throttle(function(e) {
				console.log(`加载${this.currentTab}`) //currentTab表示当前所在页数 根据当前所在页数发起请求并带上page页数
				uni.showLoading({
					title: '加载中',
					mask: true
				})
				this.isRequest().then((res) => {
					let tempList = this.list
					tempList[this.currentTab] = tempList[this.currentTab].concat(res)
					console.log(tempList)
					this.list = tempList
					this.$forceUpdate() //二维数组，开启强制渲染
				})
			}, 300),
			// 刷新touch监听
			refreshStart(e) {
				this.$refs.refresh.refreshStart(e);
			},
			refreshMove(e) {
				this.$refs.refresh.refreshMove(e);
			},
			refreshEnd(e) {
				this.$refs.refresh.refreshEnd(e);
			},
			isRefresh() {
				setTimeout(() => {
					uni.showToast({
						icon: 'success',
						title: '刷新成功'
					})
					this.$refs.refresh.endAfter() //刷新结束调用
				}, 1000)
			}
		}

	}
</script>

<style lang="scss">
	.container999 {
		width: 100vw;
		font-size: 28rpx;
		min-height: 100vh;
		overflow: hidden;
		color: #6B8082;
		position: relative;
		background-color: #f6f6f6;
	}

	.content {
		width: 100%;
	}

	.card {
		width: 90%;
		height: 368rpx;
		background-color: white;
		margin: 0 auto 42rpx auto;
		background: #FFFFFF;
		box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.10);
		border-radius: 5px;
		position: relative;
	}

	.noCard {
		width: 90%;
		height: 200rpx;
		margin: auto;
		background-color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #999999;
		box-shadow: 0 0 10rpx 0 rgba(0, 0, 0, 0.10);
		border-radius: 10rpx;
	}


	.nav {
		position: fixed;
		left: 0;
		top: 0;
		color: white;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		font-size: 24rpx;
		background-color: #007AFF;
		z-index: 996;
	}

	.searchInput999 {
		width: 80%;
		margin: 0 auto;
		background: white;
		border-radius: 30rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 80rpx;
	}

	.search999 {
		width: 44rpx;
		height: 44rpx;
	}

	.searchBox999 {
		width: 80rpx;
		height: 80rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.input999 {
		color: #999;
		width: 80%;
	}

	.head {
		display: flex;
		width: 100%;
	}

	.fa-icon-item {
		width: 16%;
		z-index: 999;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.fa-icon {
		margin: 0;
		text-decoration: none;
		align-items:stretch;
		display: flex;
		justify-content: center;
		font-size: 52rpx;
		height: 66%;
	}
	.fa-icon-text {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 14rpx;
		height: 33%;
	}
</style>
