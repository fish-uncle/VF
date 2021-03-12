<template>
	<RadioGroup
		class="vf-radio fn-flex flex-row"
		v-model="parent.data[currentVal.key]"
		v-bind="currentVal.props"
		:class="[currentVal.className,error ? 'vf-error' : '']"
		@on-change="clickChange"
	>
		<template v-if="!currentVal.selectListUrl">
			<Radio
				v-for="item in currentVal.selectList"
				:disabled="currentVal.disabled"
				:label="item.value"
				:key="item.value"
			>
				{{ item.label }}
			</Radio>
		</template>
		<template v-if="currentVal.selectListUrl">
			<Radio
				v-for="item in currentVal.ajaxList"
				:label="item.value"
				:disabled="currentVal.disabled"
				:key="item.value"
			>
				{{ item.label }}
			</Radio>
		</template>
	</RadioGroup>
</template>
<script>
	import request from '../../../utils/request'
	import func from '../../../mixins/component'

	export default {
		mixins: [func],
		methods: {
			update () {
				if (this.currentVal.selectListUrl) {
					const data = { ...this.parent.data, ...this.currentVal.customAjaxParams }
					request.post(this.currentVal.selectListUrl, data).then(res => {
						if (this.edit) {
							this.$store.commit('center/changeSelectList', {
								value: res,
								key: this.currentVal.key
							})
						} else {
							this.parent.changeSelectList({
								value: res,
								key: this.currentVal.key
							})
						}
					})
				}
				this.parent.changeData({
					value: '',
					key: this.currentVal.key
				})
				if (this.currentVal.controlOthersUpdateTargetKeys) {
					if (this.currentVal.controlOthersUpdateTargetKeys.length) {
						if (this.parent) {
							this.parent.controlOthersUpdate(this.currentVal.controlOthersUpdateTargetKeys)
						}
					}
				}
				if (this.currentVal.controlOthersHideTargetKeys) {
					if (this.parent) {
						this.parent.controlOthersHide(this.currentVal.controlOthersHideTargetKeys, '')
					}
				}
			},
			clickChange (value) {
				this.parent.changeData({
					value,
					key: this.currentVal.key
				})
				if (this.error) {
					this.parent.errorHide(this.currentVal.id)
				}
				if (this.currentVal.controlOthersUpdateTargetKeys) {
					if (this.currentVal.controlOthersUpdateTargetKeys.length) {
						if (this.parent) {
							this.parent.controlOthersUpdate(this.currentVal.controlOthersUpdateTargetKeys)
						}
					}
				}
				if (this.currentVal.controlOthersHideTargetKeys) {
					if (this.parent) {
						this.parent.controlOthersHide(this.currentVal.controlOthersHideTargetKeys, value)
					}
				}
				this.eventsOnChange()
			}
		}
	}
</script>
<style lang="less">
  @import "../../../less/conf";

  .vf-radio {
    height: 32px;
    align-items: center;
    display: flex !important;
    display: -webkit-flex !important;

    &.vf-error {
      .ivu-radio-inner {
        border-color: @error-color;
        outline: 0;
        box-shadow: 0 0 0 2px rgba(237, 64, 20, .2);
      }
    }
  }

</style>
