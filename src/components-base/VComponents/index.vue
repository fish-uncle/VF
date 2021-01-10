<template>
	<div class="fn-clear vf-component pos-r"
		 v-show="visible"
		 :class="[`vf-${type}-box`]"
		 :style="{width:`${currentWidth/24*100}%`}">
		<label class="fn-fl vf-component-label"
			   :class="[currentRequired?'has-required':'',currentLabelWidth==='0px'?'fn-hide':'']"
			   :style="{width:`${currentLabelWidth}`,textAlign:currentLabelTextAlign}">
			{{currentTitle}}:
		</label>
		<div class="vf-component-content" :style="{marginLeft:`${currentLabelWidth}`}">
			<component v-if="status==='edit'" :is="currentComponent" :value="currentVal" :language="language"
					   :status="status"
					   :error="error">
				<slot name="table_hover"/>
			</component>
			<component v-if="status==='read'" :is="readComponent" :value="currentVal" :language="language"
					   :status="status"></component>
		</div>
		<div v-if="error && status==='edit' " class="pos-a vf-component-error-msg"
			 :style="{left:`${currentVal.labelWidth+10}px`}">
			{{errorMsg}}
		</div>
	</div>
</template>
<script>
	import formComponent from '../../mixins/formComponent'

	export default {
		name: 'FormComponents',
		mixins: [formComponent],
		watch: {
			value(val) {
				this.currentVal = val
				this.id = this.currentVal.id
				const type = this.currentVal.type
				const componentType = this.currentVal.componentType
				this.type = type
				this.currentComponent = () => import(`../../components/${componentType}/${type}`)
				this.readComponent = () => import(`../../components/${componentType}/${type}/read`)
				if (this.parent) {
					this.parent.childMounted({
						key: this.currentVal.key,
						errorHide: this.errorHide,
						errorShow: this.errorShow,
						visibleStatus: this.visibleStatus,
						show: this.show, hide: this.hide, update: this.update, id: this.id
					})
				}
			}
		},
	}
</script>
<style lang="less">
	@import "../../less/conf";

	.vf-component-error-msg {
		color: @error-color;
	}

	.vf-component-read {
		font-size: 14px;
		line-height: 32px;
		word-break: break-all;
	}

	.vf-javascript-box, .vf-divider-box, .vf-html-box, .vf-title-box {
		.vf-component-label {
			display: none;
		}

		.vf-component-content {
			margin-left: 0 !important;
		}
	}

	.vf-javascript-box {
		display: none;
	}

	.vf-component {
		border: 2px solid rgba(0, 0, 0, 0);
		border-radius: 4px;
		padding: 10px;
		transition: all .3s;

		&.vf-component-error {

		}

		.vf-component-label {
			font-size: 14px;
			padding-right: 10px;
			color: rgba(0, 0, 0, .65);
			line-height: 32px;

			&.has-required {
				&:before {
					content: '*';
					color: @error-color;
				}
			}
		}
	}
</style>
