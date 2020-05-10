<template>
	<view :class="{ 'article-card-full': isFull === true || isFull === 'true', 'article-card-shadow': isShadow === true || isShadow === 'true' }"
	 class="article-card" @click="onClick">
		<view v-if="mode === 'basic'" class="" >
			<view class="item_detail">
				<h3>{{ title }}</h3>
				<view class="list_image">
					<ul v-if="cover" class="clearfix">
						<li v-for="item in imageList" class="list_img_holder"><img src={{image.path}}></li>
					</ul>
				</view>
				<view class="item_info"><text>{{ author }}</text><text>评论 {{ number }}</text><text>{{ time }}</text></view>
			</view>
			<view class=""></view>
		</view>
	</view>
</template>

<script>
	/**
	 * ArticleCard 图文卡片
	 * @description 卡片视图组件
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=22
	 * @property {String} title 标题文字
	 * @property {String} extra 标题额外信息
	 * @property {String} note 标题左侧缩略图
	 * @property {String} thumbnail 底部信息
	 * @property {String} mode = [basic|style|title] 卡片模式
	 * 	@value basic 基础卡片
	 * 	@value style 图文卡片
	 * 	@value title 标题卡片
	 * @property {Boolean} isFull = [true | false] 卡片内容是否通栏，true 时将去除padding值
	 * @property {Boolean} isShadow = [true | false] 卡片内容是否开启阴影
	 * @event {Function} click 点击 Card 触发事件
	 * @example <uni-card title="标题文字" thumbnail="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" extra="额外信息" note="Tips">内容主体，可自定义内容及样式</uni-card>
	 */
	export default {
		name: 'ArticleCard',
		props: {
			title: {
				type: String,
				default: ''
			}, // 标题
			author: {
				type: String,
				default: ''
			}, // 作者
			number: {
				type: [String,Number],
				default: '0'
			}, // 评论数
			time: {
				type: [String,Number],
				default: '0'
			},// 发布文章的时间
			cover: {
				type: boolean,
				default: false
			},// 是否有封面
			thumbnail: {
				type: String,
				default: ''
			}, // 缩略图
			// 卡片模式 ， 可选值 basic：基础卡片 ；style ：图文卡片 ； title ：标题卡片
			mode: {
				type: String,
				default: 'basic'
			},
			isFull: {
				// 内容区域是否通栏
				type: Boolean,
				default: false
			},
			isShadow: {
				// 是否开启阴影
				type: Boolean,
				default: false
			}
		},
		methods: {
			onClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style scoped>
</style>
