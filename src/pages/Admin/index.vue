<template>
	<div>
		<div class="fn-clear">
			<div class="fn-fl">
				<func />
			</div>
			<div class="fn-fr">
				<div class="vf-right vf-scrollbar">
					<div class="fn-flex flex-row">
						<h2
							class="pointer"
							v-for="(item, index) in list"
							:class="tabIndex === index + 1 ? 'active' : ''"
							@click="changeTab(index + 1)"
						>
							{{ item.title }}
						</h2>
						<h2
							class="pointer"
							:class="tabIndex === 5 ? 'active' : ''"
							@click="changeTab(5)"
						>
							{{ $t('admin_right_title5') }}
						</h2>
					</div>
					<template v-for="(item, index) in list">
						<right
							:list="item.list"
							v-if="tabIndex === index + 1"
						/>
					</template>
					<setting v-if="tabIndex === 5" />
				</div>
			</div>
			<center />
			<modelPreview />
			<modelCode />
			<modelRead />
		</div>
	</div>
</template>
<script>
import Center from './center'
import Func from './func'
import Right from './right'
import Setting from './setting'
import ModelCode from '../../components-base/ModelCode'
import ModelPreview from '../../components-base/ModelPreview'
import ModelRead from '../../components-base/ModelRead'

import { mapState } from 'vuex'
import platform from "@/store/platform";
export default {
	data() {
		return {
			tabIndex: 1,
			list: [
				{
					title: this.$t('admin_right_title1'),
					list: [
						'title',
						'labelTextAlign',
						'content',
						'amapVersion',
						'amapKey',
						'amapCenter',
						'dashed',
						'labelWidth',
						'widthRatio',
						'width',
						'placeholder',
						'className',
						'props',
						'javascript',
						'html',
					],
				},
				{
					title: this.$t('admin_right_title2'),
					list: [
						'id',
						'key',
						'group',
						'fileFormat',
						'fileAccept',
						'timeFormat',
						'datetime',
						'maxSize',
						'action',
						'disabled',
						'alpha',
						'showText',
						'tableHover',
						'columns',
						'character',
						'step',
						'max',
						'min',
						'tableAjaxUrl',
						'selectList',
						'showOthers',
						'controlOthersUpdate',
						'controlOthersHide',
					],
				},
				{
					title: this.$t('admin_right_title3'),
					list: ['rules', 'clearable'],
				},
				{
					title: this.$t('admin_right_title4'),
					list: [
						'events.onChange',
						'events.onHide',
						'events.onShow',
						'events.onUpdate',
					],
				},
			],
		}
	},
	computed: {
		...mapState(['center']),
		item() {
			if (this.center.list.length > 0) {
				return this.center.list[this.center.currentScale][
					this.center.current
				]
					? this.center.list[this.center.currentScale][
							this.center.current
					  ]
					: { changeList: [] }
			} else {
				return { changeList: [] }
			}
		},
	},
	components: {
		Center,
		ModelPreview,
		ModelCode,
		ModelRead,
		Func,
		Right,
		Setting,
	},
	methods: {
		changeTab(tabIndex) {
			this.tabIndex = tabIndex
		},
	},
	mounted() {
		platform.actions.changeTop(1)
		this.$store.commit('center/clear')
	},
}
</script>
