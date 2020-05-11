<template>
	<view>
		<article-card title="收入腰斩，余额不够付一个月工资……县级财政“红灯”示警" author="作者龙泽权" ></article-card>
		<article-card title="这是一段很长的标题1,这是一段很长的标题12,这是一段很长的标题3,这是一段很长的标题4" author="作者龙泽权" mode="large" path="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg"></article-card>
		<article-card title="这是一段很长的标题1,这是一段很长的标题12,这是一段很长的标题3,这是一段很长的标题4" author="作者龙泽权" mode="triple" :imageList="imageList"></article-card>
		<article-card title="这是一段很长的标题1,这是一段很长的标题12,这是一段很长的标题3,这是一段很长的标题4" author="作者龙泽权" mode="single" path="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg"></article-card>
		
	</view>
</template>

<script>
	import ArticleCard from "@/components/article-card/article-card.vue"
	export default {
		components: {
			ArticleCard
		},
		data() {
			return {
				imageList: [
					{path: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg'},
					{path: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg'},
					{path: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg'}
				]
			}
		}
	}
</script>

<style>
</style>
