<template>
	<Tabs
		  v-bind="currentVal.props"
		  class="vf-tab"
		  :class="[currentVal.className,error?'vf-error':'']"
		  :disabled="currentVal.disabled"
		  :style="{width:`${currentVal.widthRatio}%`}"
		  @on-click="clickChange" :clearable="currentVal.clearable">
		<template v-if="!currentVal.selectListUrl">
			<TabPane v-for="item in currentVal.selectList"
					 :name="item.value" :label="item.label" :key="item.value">
			</TabPane>
		</template>
		<template v-if="currentVal.selectListUrl">
			<TabPane v-for="item in currentVal.ajaxList"
					 :name="item.value" :label="item.label" :key="item.value">
			</TabPane>
		</template>
	</Tabs>
</template>
<script>
	import request from '../../../utils/request'
	import func from '../../../mixins/component'
	import {findComponentUpward} from '../../../utils'

	export default {
		data () {
			return {
				currentVal: this.value,
				parent: findComponentUpward (this, 'FormList')
			}
		},
		mixins: [func],
		mounted() {
			this.init()
		},
		props: [ 'value' ],
		watch: {
			value (val) {
				this.currentVal = val;
			}
		},
		methods: {
			update () {
				this.parent.changeData ({
					value: '',
					key: this.currentVal.key
				})
			},
			init() {
				if (this.currentVal.selectListUrl) {
					const data = {...this.parent.data, ...this.currentVal.customAjaxParams};
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
			clickChange(value) {
				if (this.error) {
					this.parent.errorHide(this.currentVal.id);
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
		},
	}
</script>
<style lang="less">
	@import "../../../less/conf";
</style>
