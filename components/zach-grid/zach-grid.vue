<template>
	<uni-grid-item>
		<view class="zach-grid-item">
			<uni-icons :type="type" :color="color" :size="size"></uni-icons>
			<text :style="{ color: textColor, 'font-size' : textSize+'px'}" class="zach-grid-item-text">
				<slot />
			</text>
		</view>
	</uni-grid-item>
</template>
<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
	/**
	 * Icons 图标
	 * @description 用于展示 icons 图标
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=28
	 * @property {Number} size 图标大小
	 * @property {String} type 图标图案，参考示例
	 * @property {String} color 图标颜色
	 * @event {Function} click 点击 Icon 触发事件
	 */
	export default {
		components: {
			uniIcons,
			uniGridItem
		},
		name: 'ZachGrid',
		props: {
			type: {
				type: String,
				default: ''
			},
			color: {
				type: String,
				default: '#333333'
			},
			size: {
				type: [Number, String],
				default: ''
			},
			textColor: {
				type: String,
				default: 'rgb(143, 143, 148)'
			},
			textSize: {
				type: [Number, String],
				default: ''
			}
		}
	}
</script>

<style scoped>
	.zach-grid-item {
		display: flex;
		box-sizing: border-box;
		padding: 14% 0 14% 0;
		flex-direction: column;
		height: 100%;
	}

	.zach-grid-item-text {
		text-align: center;
		margin-top: 0;
		font-size: calc(100vw/25);
	}

	::v-deep .uni-icons {
		font-family: uniicons;
		text-decoration: none;
		text-align: center;
		font-size: calc(100vw/10);
	}
</style>
