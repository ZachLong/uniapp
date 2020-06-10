<template>
	<view>
		<uni-section type="line" title="常用功能"></uni-section>
		<uni-grid :column="4">
			<zach-grid type="qq" color="#2188ff">学习资料</zach-grid>
			<zach-grid type="qq" color="#2188ff">经验分享</zach-grid>
			<zach-grid type="qq" color="#2188ff">岗位职责</zach-grid>
			<zach-grid type="qq" color="#2188ff">违章公示</zach-grid>
			<zach-grid type="qq" color="#2188ff">规章制度</zach-grid>
			<zach-grid type="qq" color="#2188ff">设备使用</zach-grid>
			<zach-grid type="qq" color="#2188ff">审批流程</zach-grid>
			<zach-grid type="qq" color="#2188ff">学习资料</zach-grid>
			<zach-grid type="qq" color="#2188ff">学习资料</zach-grid>
		</uni-grid>
		<image src="http://www.jinshenglan.com/img/logo.png"></image>
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

<style lang="scss" scoped>
</style>
