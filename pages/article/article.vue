<template>
	<view class="content">
		<scroll-view>
			<article-detail :title="detailData.title" :author="detailData.author"></article-detail>
			<rich-text :nodes="detailData.flow"></rich-text>
			<rich-text :nodes="detailData.flow"></rich-text>
			<rich-text :nodes="detailData.flow"></rich-text>
			<rich-text :nodes="detailData.flow"></rich-text>
			<rich-text :nodes="detailData.flow"></rich-text>
			<rich-text :nodes="detailData.flow"></rich-text>
			<rich-text :nodes="detailData.flow"></rich-text>
			<uni-section type="line" title="网络评论"></uni-section>
			<article-comment :evaList="evaList"></article-comment>
		</scroll-view>
	</view>
</template>

<script>
	import ArticleDetail from "@/components/article-detail/article-detail.vue"
	import ArticleComment from "@/components/article-comment/article-comment.vue"
	export default {
		components: {
			ArticleDetail,
			ArticleComment
		},
		data() {
			return {
				detailData: {
					title: '收入腰斩，余额不够付一个月工资……县级财政“红灯”示警',
					author: '作者名称',
					flow: '1111我们的地球是目前已知的唯一一颗存在着生命的星球，在过去的很长一段时间里，人们都认为地球上的生命主要集中地球的表面，而在地球表面以下不远处就应该是一片死寂的“暗黑世界”。原因很简单，在地壳的深处不但没有太阳光的照射，而且还充斥着高温、高压，在这样恶劣的环境中，生命应该是不可能存在的。'
				},
				evaList: [{
						src: 'http://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/77c6a7efce1b9d1663174705fbdeb48f8d546486.jpg',
						nickname: 'Ranth Allngal',
						time: '09-20 12:54',
						zan: '54',
						content: '评论不要太苛刻，不管什么产品都会有瑕疵，客服也说了可以退货并且商家承担运费，我觉得至少态度就可以给五星。'
					},
					{
						src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg',
						nickname: 'Ranth Allngal',
						time: '09-20 12:54',
						zan: '54',
						content: '楼上说的好有道理。'
					}
				]
			}
		}
	}
</script>
<style>
	.content {
		display: flex;
		flex-direction: column;
		height: 100%;
		background: #fff;
	}
</style>
