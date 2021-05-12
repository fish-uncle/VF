<template>
	<div class="pos-r">
		<div class="vf-func fn-fl pos-r vf-scrollbar" id="func">
			<h2>
				{{ $t('admin_left_title1') }}
			</h2>
			<draggable
				tag="ul"
				class="fn-flex flex-row"
				v-model="component.obj.Base"
				:clone="handleClone"
				:move="handleMove"
				:group="{ name: 'people', pull: 'clone', put: false }"
			>
				<func-item
					v-for="(item, key) in component.obj.Base"
					:item="item"
					:key="key"
				/>
			</draggable>
			<h2>
				{{ $t('admin_left_title2') }}
			</h2>
			<draggable
				tag="ul"
				class="fn-flex flex-row"
				v-model="component.obj.Modification"
				:clone="handleClone"
				:move="handleMove"
				:group="{ name: 'people', pull: 'clone', put: false }"
			>
				<func-item
					v-for="(item, key) in component.obj.Modification"
					:item="item"
					:key="key"
				/>
			</draggable>
			<h2>
				{{ $t('admin_left_title3') }}
			</h2>
			<draggable
				tag="ul"
				class="fn-flex flex-row"
				v-model="component.obj.Senior"
				:clone="handleClone"
				:move="handleMove"
				:group="{ name: 'people', pull: 'clone', put: false }"
			>
				<func-item
					v-for="(item, key) in component.obj.Senior"
					:item="item"
					:key="key"
				/>
			</draggable>
		</div>
	</div>
</template>
<script>
import FuncItem from './func-item'
import { mapState } from 'vuex'
import { uuid } from '../../utils'
import language from '../../store/language'
import component from '../../store/component'

export default {
	data() {
		return {
			language: language.state,
			component: component.state,
		}
	},
	components: {
		FuncItem,
	},
	computed: mapState(['center']),
	methods: {
		handleMove: function (evt) {
			if (evt.to.className === 'vf-drag-content fn-flex flex-row') {
				return true
			} else {
				return false
			}
		},
		handleClone: function (evt) {
			let dragItem = evt
			const i = uuid()
			const l = uuid()
			let key = `${dragItem.type}_${i}`
			if (dragItem.dataType === 'TimeRange') {
				key += `;${l}`
			}
			dragItem.key = key
			dragItem.id = key
			dragItem = JSON.parse(JSON.stringify(dragItem))
			dragItem.labelWidth = this.center.labelWidth
			dragItem.labelTextAlign = this.center.labelTextAlign
			this.$agent.$emit({ type: 'formDataAdd', dragItem })
			return dragItem
		},
	},
}
</script>
<style lang="less">
@import '../../less/conf';

.vf-func-disabled {
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.6);
}

.vf-func {
	width: 250px;
	height: calc(100vh - 130px);
	padding: 10px;
	overflow-x: hidden;
	overflow-y: auto;

	h2 {
		height: 40px;
		font-size: 16px;
	}

	ul {
		flex-wrap: wrap;
	}

	li {
		margin-bottom: 10px;
		overflow: hidden;
		text-overflow: ellipsis;
		word-break: break-all;
		white-space: nowrap;

		&:nth-child(2n) {
			margin-right: 0;
		}
	}
}
</style>
