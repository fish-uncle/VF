<template>
	<div>
		<i-input
			class="vf-input"
			v-bind="currentVal.props"
			:class="[currentVal.className,error ? 'vf-error' : '']"
			v-model="parent.data[currentVal.key]"
			:disabled="currentVal.disabled"
			:placeholder="currentVal.placeholder"
			:style="{width:`${currentVal.widthRatio}%`}"
			@on-change="inputChange"
		/>
		<i-select
			v-model="parent.data[currentVal.key]"
			v-bind="currentVal.props"
			class="vf-select"
			:class="[currentVal.className,error ? 'vf-error' : '']"
			:placeholder="currentVal.placeholder"
			:disabled="currentVal.disabled"
			:style="{width:`${currentVal.widthRatio}%`}"
			@on-change="clickChange"
			:clearable="currentVal.clearable"
		>
			<template v-if="!currentVal.selectListUrl">
				<i-option
					v-for="item in currentVal.selectList"
					:value="item.value"
					:key="item.value"
				>
					<span>{{ item.label }}</span>
				</i-option>
			</template>
			<template v-if="currentVal.selectListUrl">
				<i-option
					v-for="item in currentVal.ajaxList"
					:value="item.value"
					:key="item.value"
				>
					<span>{{ item.label }}</span>
				</i-option>
			</template>
		</i-select>
	</div>
</template>
<script>
	import func from '../../../mixins/component'

	export default {
		mixins: [func],
		methods: {
			update () {
				this.parent.changeData({
					value: '',
					key: this.currentVal.key
				})
			},
			clickChange (value) {
				if (this.error) {
					this.parent.errorHide(this.currentVal.id)
				}
				if (this.currentVal.controlOthersUpdateTargetKeys.length) {
					if (this.parent) {
						this.parent.controlOthersUpdate(this.currentVal.controlOthersUpdateTargetKeys)
					}
				}
				if (this.currentVal.controlOthersHideTargetKeys) {
					if (this.parent) {
						this.parent.controlOthersHide(this.currentVal.controlOthersHideTargetKeys, value)
					}
				}
			},
			inputChange (e) {
				const _self = this
				if (_self.error) {
					_self.parent.errorHide(this.currentVal.id)
				}
				this.eventsOnChange(e)
			}
		}
	}
</script>
<style lang="less">
	@import "../../../less/conf";

	.vf-input.vf-error {
		input {
			border-color: @error-color;
			outline: 0;
			box-shadow: 0 0 0 2px rgba(237, 64, 20, 0.2);
		}
	}
</style>
