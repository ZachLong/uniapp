<template>
	<view>
		<uni-section type="line" title="消息列表"></uni-section>
		<uni-grid :column="4" :show-border="false" :square="false">
			<uni-grid-item>
				<uni-icons type="eye-filled" color="#da765b">关注</uni-icons>
			</uni-grid-item>
			<uni-grid-item>
				<uni-icons type="hand-thumbsup-filled" color="#FE4C40">点赞</uni-icons>
			</uni-grid-item>
			<uni-grid-item>
				<uni-icons type="chatboxes-filled" color="#2188ff">评论</uni-icons>
			</uni-grid-item>
			<uni-grid-item>
				<uni-icons type="chat-filled" color="#426ab3">通知</uni-icons>
			</uni-grid-item>
			<navigator url="../test/test" hover-class="navigator-hover">
				<button type="default">跳转到新页面</button>
			</navigator>
		</uni-grid>
	</view>
</template>

<script>
	import uniSection from "@/components/uni-section/uni-section.vue"
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		components: {
			uniGrid,
			uniGridItem,
			uniIcons,
			uniSection
		}
	}
</script>

<style>
</style>
