<template>
	<view>
		<uni-section type="line" title="消息列表"></uni-section>
		<uni-grid :column="4" :show-border="false" :square="false">
			<zach-grid type="eye-filled" color="#da765b">关注</zach-grid>
			<zach-grid type="hand-thumbsup-filled" color="#FE4C40">点赞</zach-grid>
			<zach-grid type="chatboxes-filled" color="#2188ff">评论</zach-grid>
			<zach-grid type="chat-filled" color="#426ab3">通知</zach-grid>
		</uni-grid>
		<navigator url="../test/test" hover-class="navigator-hover">
			<button type="default">跳转到新页面</button>
		</navigator>
		<navigator url="../test/test" open-type="redirect" hover-class="other-navigator-hover">
			<button type="default">在当前页打开</button>
		</navigator>
		<navigator url="../test/test" open-type="switchTab" hover-class="other-navigator-hover">
			<button type="default">跳转tab页面</button>
		</navigator>
	</view>
</template>

<script>
	import uniSection from "@/components/uni-section/uni-section.vue"
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	import zachGrid from "@/components/zach-grid/zach-grid.vue"
	export default {
		components: {
			uniSection,
			uniGrid,
			zachGrid
		}
	}
</script>

<style>
</style>
