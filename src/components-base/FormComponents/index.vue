<template>
	<div
		class="fn-clear vf-component pos-r"
		v-show="visible"
		:style="{width:`${currentWidth / 24 * 100}%`,background:currentGroupColor}"
		:class="[index === center.current && edit ? 'active' : '',
			edit ? 'vf-component-edit' : '',
			`vf-${type}-box`]"
		@click="choose(index)"
	>
		<div class="vf-component-model pos-a z-index-9"/>
		<label
			class="fn-fl vf-component-label"
			:class="[currentRequired ? 'has-required' : '',currentLabelWidth === '0px' ? 'fn-hide' : '']"
			:style="{width:`${currentLabelWidth}`,textAlign:currentLabelTextAlign}"
		>
			{{ currentTitle }}:
		</label>
		<div class="vf-component-content" :style="{marginLeft:`${currentLabelWidth}`}">
			<component
				:is="currentComponent"
				:value="currentVal"
				:edit="edit"
				:language="language"
			></component>
		</div>
		<div
			v-if="index === center.current && edit"
			class="z-index-9 pos-a vf-component-del pointer text-center"
			@click="handleDelete"
		>
			<Icon type="md-trash"/>
		</div>
	</div>
</template>
<script>
	import { mapState } from 'vuex'
	import formComponent from '../../mixins/formComponent'

	export default {
		name: 'FormComponents',
		mixins: [formComponent],
		computed: {
			...mapState(['center']),
			currentGroupColor () {
				if (this.currentVal.group) {
					let color = ''
					this.center.group.forEach(item => {
						if (item.id === this.currentVal.group) {
							color = item.color
						}
					})
					return color
				} else {
					return 'rgba(255,255,255,0)'
				}
			}
		},
		props: ['value', 'index', 'edit', 'language', 'labelTextAlign', 'labelWidth'],
		watch: {
			value (val) {
				this.currentVal = val
			}
		},
		methods: {
			handleDelete () {
				this.$store.commit('center/remove', { index: this.index })
				this.$agent.$emit({ type: 'formDataRemove', key: this.currentVal.key })
			},
			choose (index) {
				if (!this.edit) {
					return
				}
				this.$store.commit('center/choose', { index })
			}
		}
	}
</script>
<style lang="less">
	@import "../../less/conf";

	.vf-component-model {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.vf-javascript-box,
	.vf-divider-box,
	.vf-html-box,
	.vf-title-box {
		.vf-component-label {
			display: none;
		}

		.vf-component-content {
			margin-left: 0 !important;
		}
	}

	.vf-javascript-box {
		display: none;

		&.vf-component-edit {
			display: block;
		}
	}

	.vf-component {
		padding: 10px;
		border: 2px solid rgba(0, 0, 0, 0);
		border-radius: 4px;
		transition: all 0.3s;

		&.vf-component-edit {
			&:hover {
				border: 2px solid @themeColor_04;
			}

			&.active {
				border: 2px solid @themeColor;
			}
		}

		&.sortable-ghost {
			width: 100%;
			height: 0;
			padding: 0;
			border: 2px solid @move-color !important;

			span,
			i,
			.vf-component-del,
			label,
			input,
			div {
				display: none;
			}
		}

		.vf-component-label {
			padding-right: 10px;
			font-size: 14px;
			line-height: 32px;
			color: rgba(0, 0, 0, 0.65);

			&.has-required {
				&::before {
					color: red;
					content: '*';
				}
			}
		}
	}

	.vf-component-del {
		right: 0;
		bottom: 0;
		width: 20px;
		height: 20px;
		color: #fff;
		user-select: none;
		background-color: @themeColor;
		border-radius: 2px;

		&:hover {
			background-color: @themeColor_07;
		}
	}
</style>
