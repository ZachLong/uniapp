<template>
	<view class="article-comment">
		<view v-for="(item, index) in evaList" :key="index" class="article-comment__item">
			<image :src="item.src" mode="aspectFill" class="article-comment__image"></image>
			<view class="article-comment__right">
				<text>{{ item.nickname }}</text>
				<text>{{ item.time }}</text>
				<view class="article-comment__zan">
					<text>{{ item.zan }}</text>
					<uni-icons type="hand-thumbsup-filled" class="article-comment__icon" color="#8f8f94"  size="16"></uni-icons>
				</view>
				<text class="article-comment__content">{{ item.content }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		name: 'ArticleComment',
		components: {
			uniIcons
		},
		props: {
			evaList: {
				type: Array,
				default: ''
			}
		}
	}
</script>

<style lang="scss" scoped>
	/* 评论 */
	.article-comment {
		display: flex;
		flex-direction: column;
		background: #fff;
		padding: 20rpx 0;
	}

	.article-comment__item {
		display: flex;
		padding: 20rpx 30rpx;
		position: relative;
	}

	.article-comment__item:after {
		content: '';
		position: absolute;
		left: 30rpx;
		bottom: 0;
		right: 0;
		height: 0;
		border-bottom: 1px solid #eee;
		transform: translateY(50%);
	}

	.article-comment__item:last-child:after {
		border: 0;
	}

	.article-comment__image {
		width: 60rpx;
		height: 60rpx;
		border-radius: 50px;
		flex-shrink: 0;
		margin-right: 24rpx;
	}

	.article-comment__right {
		display: flex;
		flex-direction: column;
		flex: 1;
		font-size: 26rpx;
		color: #909399;
		position: relative;
	}

	.article-comment__zan {
		display: flex;
		align-items: base-line;
		position: absolute;
		top: 10rpx;
		right: 10rpx;
	}

	.article-comment__icon {
		margin-left: 8rpx;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
	}

	.article-comment__content {
		font-size: 28rpx;
		color: #333;
		padding-top: 20rpx;
	}
</style>
