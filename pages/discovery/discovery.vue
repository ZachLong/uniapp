<template>
	<view>
		<uni-section type="line" title="常用功能"></uni-section>
		<uni-grid :column="4">
		    <uni-grid-item>
		        <uni-icons type="qq" color="#2188ff">入职指导</uni-icons>
		    </uni-grid-item >
		    <uni-grid-item>
		        <uni-icons type="qq" color="#2188ff">学习资料</uni-icons>			
		    </uni-grid-item>
		    <uni-grid-item>
		        <uni-icons type="qq" color="#2188ff">经验分享</uni-icons>			
		    </uni-grid-item>
			<uni-grid-item>
			    <uni-icons type="qq" color="#2188ff">岗位职责</uni-icons>
			</uni-grid-item>
			<uni-grid-item>
			    <uni-icons type="qq" color="#2188ff">违章公示</uni-icons>
			</uni-grid-item>
			<uni-grid-item>
			    <uni-icons type="qq" color="#2188ff">规章制度</uni-icons>
			</uni-grid-item>
			<uni-grid-item>
			    <uni-icons type="qq" color="#2188ff">设备使用</uni-icons>
			</uni-grid-item>
			<uni-grid-item>
			    <uni-icons type="qq" color="#2188ff">审批流程</uni-icons>
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

</style>
