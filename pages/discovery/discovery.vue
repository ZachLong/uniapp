<template>
	<view>
		<uni-section type="line" title="一级设置"></uni-section>
		<uni-grid :column="4">
		    <uni-grid-item>
		        <uni-icons type="qq" size="40" color="#2188ff"></uni-icons>
				<text>入职指导</text>
		    </uni-grid-item >
		    <uni-grid-item>
		        <uni-icons type="qq" size="40" color="#2188ff"></uni-icons>
				<text>学习资料</text>
		    </uni-grid-item>
		    <uni-grid-item>
		        <uni-icons type="qq" size="40" color="#2188ff"></uni-icons>
				<text>经验分享</text>
		    </uni-grid-item>
			<uni-grid-item>
			    <uni-icons type="qq" size="40" color="#2188ff"></uni-icons>
				<text>岗位职责</text>
			</uni-grid-item>
		</uni-grid>
	</view>
</template>

<script>
	import uniSection from "@/components/uni-section/uni-section.vue"
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		components:{
			uniGrid,
			uniGridItem,
			uniIcons,
			uniSection
		}
	}
</script>

<style>
text{
	text-align: center;
	margin-bottom: 3rpx;
}
</style>
