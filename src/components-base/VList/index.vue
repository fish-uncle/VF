<template>
	<div>
		<Row type="flex">
			<div :class="['ivu-col',`ivu-col-span-${scale}`]" v-for="(scale,scaleIndex) in scale" :key="scaleIndex">
				<div class="fn-flex flex-row" :style="{width:'100%',flexWrap:'wrap'}">
					<v-component
						:edit="false"
						:language="language"
						:value="item"
						:index="index"
						:labelWidth="labelWidth"
						:labelTextAlign="labelTextAlign"
						:status="status"
						:key="item.id"
						v-for="(item,index) in currentList[scaleIndex]"
					/>
					<slot
						name="component"
						:status="status"
						:labelWidth="labelWidth"
						:labelTextAlign="labelTextAlign"
						:language="language"
					/>
				</div>
			</div>
		</Row>
	</div>
</template>
<script>
	import formList from '../../mixins/formList'
	import FormComponentUse from '../VComponents'
	import { Row } from 'view-design'

	export default {
		name: 'FormList',
		mixins: [formList],
		components: {
			'v-component': FormComponentUse,
			Row
		},
		data () {
			return {
				currentList: [[], []],
				labelWidth: 120,
				status: 'read',
				labelTextAlign: 'right'
			}
		},
		computed: {
			scale () {
				return this.viewScale.split(':')
			}
		},
		watch: {
			list (val) {
				this.currentList = val
				this.init()
			}
		},
		props: {
			group: {
				type: Array,
				default: function () {
					return []
				}
			},
			list: {
				type: Array,
				default: function () {
					return [[], []]
				}
			},
			viewScale: {
				type: String,
				default: '12:12'
			},
			language: {
				type: String,
				default: 'zh'
			}
		},
		methods: {
			init () {
				this.data = {}
				const componentList = []
				this.currentList = this.list
				for (let i = 0; i <= this.currentList.length - 1; i++) {
					componentList.push(...this.currentList[i])
				}
				for (let i = 0; i <= componentList.length - 1; i++) {
					this.handleChangeKeyForDrag({ dragItem: componentList[i] })
				}
			}
		},
		mounted () {
			this.init()
		}
	}
</script>
