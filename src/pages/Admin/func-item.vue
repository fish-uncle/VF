<template lang="pug">
	li.pos-r.z-index-9.fn-flex.vf-func-item(:title="item.title")
		Icon(:type="item.icon" v-if="item.icon" color="#333" size="18")
		span {{item[`title_${language.lang}`]}}
</template>
<script lang="ts">
	import { Component, Vue, Prop } from 'vue-property-decorator'
	import language from '../../store/language'

	@Component
	export default class FuncItem extends Vue {
		@Prop(Object) item: any

		language=language.store
	}
</script>
<style lang="less">
	@import "../../less/conf";

	.vf-func-item {
		align-items: center;
		width: 108px;
		height: 30px;
		padding-left: 8px;
		margin-right: 10px;
		font-size: 14px;
		line-height: 30px;
		cursor: move;
		user-select: none;
		background: #f4f6fc;
		border: 1px solid #f4f6fc;
		border-radius: 4px;
		transition: all 0.3s;

		span {
			margin-left: 5px;
		}

		&:hover {
			color: @themeColor;
			border: 1px dashed @themeColor;
		}
	}

	.vf-drag-box {
		.vf-func-item {
			&.sortable-ghost {
				width: 100%;
				height: 0;
				border: 2px solid @move-color;

				span,
				i {
					display: none;
				}
			}
		}
	}
</style>
