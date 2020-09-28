<template>
	<div class="vf-table"
		 v-bind="currentVal.props"
		 :style="{width:`${currentVal.widthRatio}%`}"
		 :class="[currentVal.className,status==='edit'?'vf-table-edit':'']">
		<v-form ref="form">
			<vxe-table :data.sync="parent.tableData[currentVal.key]" @cell-mouseenter="handleMouseenter"
					   @cell-mouseleave="handleMouseleave">
				<vxe-table-column :field="item.key" :title="item.title" v-for="(item) in currentVal.columns"
								  :key="item.key">
					<template slot-scope="{ row,rowIndex }">
						<div class="vxe-cell--label pos-r">{{row[item.key]}}
							<div class="pos-a vf-table-hover-row"
								 v-if="hover&&hoverIndex===rowIndex && currentVal.tableHover">
								<slot-render slotName="table2_hover" :row="row" :rowIndex="rowIndex"/>
							</div>
						</div>
					</template>
				</vxe-table-column>
			</vxe-table>
		</v-form>
	</div>
</template>
<script>
	import request from '../../utils/request'
	import func from '../../mixins/func'
	import SlotRender from '../../components/SlotRender'

	export default {
		mixins: [func],
		components: {
			SlotRender
		},
		data() {
			return {
				total: 0,
				page: 1,
				hover: false,
				hoverIndex: 0
			}
		},
		mounted() {
			const form = this.$refs.form
			this.update()
			this.parent.tableData[this.currentVal.key].forEach((item, index) => {
				for (let key in item) {
					if (key !== '_XID') {
						form.changeData({
							key: `${key}${index}`,
							value: item[key]
						})
					}
				}
			})
		},
		methods: {
			handleMouseleave() {
				this.hover = false
			},
			handleMouseenter({row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, $event}) {
				this.hover = true
				this.hoverIndex = rowIndex
			},
			update() {
				if (this.currentVal.tableAjaxUrl) {
					request.post(this.currentVal.tableAjaxUrl).then(res => {
						if (res) {
							this.parent.changeTableData({
								value: res.list,
								key: this.currentVal.key
							})
							this.data = res.list
							this.total = res.total
						}
					})
				}
			},
		}
	}
</script>
<style lang="less">
	.vf-table-hover-row {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

</style>
