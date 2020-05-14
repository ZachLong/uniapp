<template>
	<view>
		<article>
			<header class="article_header">
				<h1 class="article_title">{{ title }}</h1>
				<view class="article_author">
					<view class="header-left">
						<view class="avatar">
							<image :src="avatar"></image>
						</view>
						<view class="author-info">
							<text class="author-name">{{ author }}</text>
							<text class="v-info v-0"></text>
						</view>
					</view>
					<view class="header-right">
						<text class="article-publish-time">{{ publishTime }}</text>
						<text class="dot"></text>
						<text class="article-comment">{{ comment }}评论</text>
					</view>
				</view>
			</header>
			<view class="article_content">
				<slot></slot>
			</view>
		</article>
	</view>
</template>

<script>
	/**
	 * ArticleCard 图文卡片
	 * @description 卡片视图组件
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=22
	 * @property {String} title 文章标题
	 * @property {String} author 文章作者名称
	 * @property {String, Number} number 文章评论数
	 * @property {String, Number} time 文章发布时间
	 * @property {Array} imageList 三图图片列表
	 * @property {String} path 图片路径 
	 * @property {String} mode = [basic|single|triple|large] 卡片模式
	 * 	@value basic 基础卡片
	 * 	@value single 单图卡片
	 * 	@value triple 三图卡片
	 *  @value large 大图卡片
	 * @event {Function} click 点击 Card 触发事件
	 * @example <uni-card title="标题文字" thumbnail="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" extra="额外信息" note="Tips">内容主体，可自定义内容及样式</uni-card>
	 */
	export default {
		name: 'ArticleDetail',
		props: {
			title: {
				type: String,
				default: ''
			}, // 标题
			author: {
				type: String,
				default: ''
			}, // 作者
			comment: {
				type: [String, Number],
				default: '0'
			}, // 评论数
			publishTime: {
				type: [String, Number],
				default: '0'
			}, // 发布文章的时间
			avatar: {
				type: String,
				default: 'https://p3.pstatp.com/thumb/ffd9000007bba30d31d0'
			} //路径
		}
	}
</script>

<style>
	@media screen and (min-width: 375px) .article_header .article_title {
		font-size: 24px;
		line-height: 34px;
	}

	@media screen and (min-width: 360px) .article_header .article_title {
		font-size: 23px;
		line-height: 31px;
	}

	@media screen and (min-width: 320px) .article_header .article_title {
		font-size: 21px;
		line-height: 30px;
	}

	.article_header .article_title {
		font-family: 'PingFangSC-Medium';
		line-height: 1.36;
		font-weight: 500;
		color: #222222;
		font-size: 22px;
	}

	.article_header .article_author {
		position: relative;
		margin-top: 12px;
		display: flex;
		justify-content: space-between;
	}

	.article_header .article_author .header-left {
		display: flex;
		align-items: center;
	}

	.article_header .article_author .avatar {
		width: 24px;
		height: 24px;
		border-radius: 24px;
		margin: auto;
		display: inline-block;
	}

	.article_header .article_author .avatar image {
		width: 100%;
		height: 100%;
		border-radius: inherit;
	}

	.article_header .article_author .author-info {
		margin-left: 6px;
		display: flex;
		align-items: center;
	}

	.article_header .article_author .author-info .author-name {
		font-size: 14px;
		color: #222;
		font-weight: 700;
		margin-right: 6px;
	}
	.article_header .article_author .author-info .v-info {
	    width: 14px;
	    height: 14px;
	    background-size: 100% 100%;
	    display: inline-block;
	    margin-right: 10px;
	    vertical-align: -2px;
	}
	.article_header .article_author .author-info .v-info.v-0 {
	    background-image: url(//s1.pstatp.com/growth/mobile_detail/image/v-0.tl0z9x5L.png);
	}

	.article_header .article_author .header-right {
		align-self: center;
		color: #999999;
	}

	.article_header .article_author .header-right text {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 16px;
	}

	.article_header .article_author .header-right .dot {
		display: inline-block;
		width: 2px;
		height: 2px;
		border-radius: 1px;
		background-color: #999;
		margin: 0 4px;
		vertical-align: middle;
	}
</style>
