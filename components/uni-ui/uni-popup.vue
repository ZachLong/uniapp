<template>
	<view class="uni-mask" v-show="show" :style="{ top: offsetTop + 'px' }" @click="hide" @touchmove.stop.prevent="moveHandle">
		<view class="uni-popup-close-right" v-if="position === 'middle' && mode === 'insert'" @click="closeMask">
			<fa-icon type="times-circle-o" size="40" color="#F00"> </fa-icon>
		</view>

		<view class="uni-popup" :class="['uni-popup-' + position, 'uni-popup-' + mode]" v-show="show">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'uni-popup',
		props: {
			show: {
				/*页面显示*/
				type: Boolean,
				default: false
			},
			position: {
				/*对齐方式*/
				type: String,
				//top - 顶部, middle - 居中, bottom - 底部
				default: 'middle'
			},
			mode: {
				/*显示模式*/
				type: String,
				//fixed - 不显示关闭按钮, insert - 显示关闭按钮
				default: 'insert'
			},
			h5Top: {
				/*h5遮罩是否到顶*/
				type: Boolean,
				default: false
			}
		},
		data() {
			let offsetTop = 0;
			//#ifdef H5
			if (!this.h5Top) {
				offsetTop = 44;
			} else {
				offsetTop = 0;
			}
			//#endif
			return {
				offsetTop: offsetTop
			};
		},
		watch: {
			h5Top(newVal) {
				console.log(newVal);
				if (newVal) {
					this.offsetTop = 44;
				} else {
					this.offsetTop = 0;
				}
			}
		},
		methods: {
			hide: function() {
				if (this.mode === 'insert' && this.position === 'middle') return;
				this.$emit('hidePopup');
			},
			closeMask() {
				if (this.mode === 'insert') {
					this.$emit('hidePopup');
				}
			},
			moveHandle() {}
		}
	};
</script>
<style>
	.uni-mask {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: rgba(30, 35, 30, 0.6);
		top: 0;
		left: 0;
		z-index: 1000;
	}

	.uni-popup {
		position: absolute;
		z-index: 10000;
		background-color: #FEFEFE;
	}

	.uni-popup-middle {
		display: flex;
		align-items: center;
		justify-content: center;
		top: 50%;
		left: 50%;
	}

	.uni-popup-middle.uni-popup-insert {
		transform: translate(-50%, -50%);
	}

	.uni-popup-middle.uni-popup-fixed {
		padding: 30upx;
		border-radius: 10upx;
		transform: translate(-50%, -50%);
	}

	.uni-popup-top,
	.uni-popup-bottom {
		width: 100%;
		min-height: 100upx;
		left: 0;
	}

	.uni-popup-top {
		top: 0;
	}

	.uni-popup-bottom {
		bottom: 0;
	}

	.uni-popup-close-right {
		position: fixed;
		top: 20upx;
		right: 20upx;
	}
</style>
