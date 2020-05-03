<template>
	<view>
		<!-- 包含图片 -->
		<uni-list>
		    <uni-list-item title="我的作品" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png"></uni-list-item>
		</uni-list>
		<uni-list>
		    <uni-list-item title="我的评论" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png"></uni-list-item>
		</uni-list>
		<!-- 包含图片 -->
		<uni-list>
		    <uni-list-item title="我的收藏" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png"></uni-list-item>
		</uni-list>
		<!-- 包含图片 -->
		<uni-list>
		    <uni-list-item title="最近浏览" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png"></uni-list-item>
		</uni-list>
		<!-- 包含图片 -->
		<uni-list>
		    <uni-list-item title="设置" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	export default {
	    components: {uniList,uniListItem}
	}
</script>

<style>
</style>
