<template>
	<article-detail title="收入腰斩，余额不够付一个月工资……县级财政“红灯”示警" author="作者名称">{{ content }}</article-detail>
</template>

<script>
	import ArticleDetail from "@/components/article-detail/article-detail.vue"
	export default {
		components:{
			ArticleDetail
		},
		data(){
			return {
				content: '我们的地球是目前已知的唯一一颗存在着生命的星球，在过去的很长一段时间里，人们都认为地球上的生命主要集中地球的表面，而在地球表面以下不远处就应该是一片死寂的“暗黑世界”。原因很简单，在地壳的深处不但没有太阳光的照射，而且还充斥着高温、高压，在这样恶劣的环境中，生命应该是不可能存在的。'
			}
		}
	}
</script>

<style>
</style>
