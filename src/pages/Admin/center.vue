<template>
	<div class="vf-center">
		<div class="vf-fn">
			<h2>{{ $t('admin_center_title1') }}</h2>
			<ul class="fn-flex flex-row vf-fn-btn-box">
				<li class="pointer vf-fn-btn" @click="handleClear">
					<Icon type="ios-trash-outline" size="18" />
					{{ $t('admin_center_btn1') }}
				</li>
				<Dropdown @on-click="handlePreview">
					<a>
						<Icon type="ios-eye-outline" size="18" />
						{{ $t('admin_center_btn2') }}
						<Icon type="ios-arrow-down"></Icon>
					</a>
					<DropdownMenu slot="list">
						<DropdownItem name="data">
							{{ $t('admin_center_btn2_1') }}
						</DropdownItem>
						<DropdownItem name="preview">
							{{ $t('admin_center_btn2_2') }}
						</DropdownItem>
						<DropdownItem name="code">
							{{ $t('admin_center_btn2_3') }}
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<li class="pointer vf-fn-btn" @click="handleRead">
					<Icon type="ios-paper-outline" size="18" />
					{{ $t('admin_center_btn3') }}
				</li>
				<li class="pointer vf-fn-btn" :style="{ marginLeft: 'auto' }">
					<i-select
						v-model="center.viewScale"
						@on-change="handleViewScale"
					>
						<i-option value="24:0">1:0</i-option>
						<i-option value="12:12">1:1</i-option>
						<i-option value="16:8">2:1</i-option>
						<i-option value="8:16">1:2</i-option>
					</i-select>
				</li>
				<li class="pointer vf-fn-btn">
					<i-select
						v-model="center.multiFormId"
						@on-change="handleFormChange"
					>
						<i-option
							:value="item.key"
							:key="item.key"
							v-for="item in center.multiForm"
						>
							{{ item.name }}
						</i-option>
					</i-select>
				</li>
			</ul>
		</div>
		<div class="vf-drag-box fn-flex">
			<f-list>
				<div
					class="fn-flex pos-r"
					:class="[
						'vf-drag',
						'ivu-col',
						`ivu-col-span-${item}`,
						scaleIndex === center.currentScale
							? 'vf-drag-active'
							: '',
					]"
					v-for="(item, scaleIndex) in viewScale"
					:key="scaleIndex"
					@click="() => handleCurrentScale(scaleIndex)"
				>
					<draggable
						class="vf-drag-content fn-flex flex-row"
						v-model="center.list[scaleIndex]"
						group="people"
						@change="handleCenterChange"
					>
						<f-component
							:value="item"
							:index="index"
							:edit="scaleIndex === center.currentScale"
							:key="item.id"
							status="edit"
							:labelWidth="center.labelWidth"
							:labelTextAlign="center.labelTextAlign"
							:language="language.lang"
							v-for="(item, index) in center.list[scaleIndex]"
						/>
					</draggable>
					<div
						class="vf-center-empty pos-a text-center"
						v-if="!center.list[scaleIndex].length"
					>
						{{ $t('admin_center') }}
					</div>
				</div>
			</f-list>
		</div>
	</div>
</template>
<script>
import { mapState } from 'vuex'
import language from '../../store/language'
import component from '../../store/component'

export default {
	data() {
		return {
			language: language.state,
			component: component.state,
		}
	},
	computed: {
		...mapState(['center']),
		viewScale() {
			return this.center.viewScale.split(':')
		},
	},
	methods: {
		handleRead() {
			this.$store.commit('model/readShow')
		},
		handleCenterChange() {
			localStorage.setItem(
				`${this.center.multiFormId}`,
				JSON.stringify({
					list: this.center.list,
					viewScale: this.center.viewScale,
				}),
			)
		},
		handleFormChange(value) {
			const form = JSON.parse(localStorage.getItem(value))
			this.$store.commit('center/set', {
				viewScale: form.viewScale,
				list: form.list,
			})
		},
		handleCurrentScale(currentScale) {
			this.$store.commit('center/currentScaleChange', { currentScale })
		},
		handleViewScale(viewScale) {
			this.$store.commit('center/viewScaleChange', { viewScale })
		},
		handlePreview(name) {
			if (name === 'preview') {
				this.$store.commit('model/previewShow')
			}
			if (name === 'data') {
				this.$store.commit('model/dataShow')
			}
			if (name === 'code') {
				this.$store.commit('model/codeShow')
			}
		},
		handleClear() {
			this.$store.commit('center/clear')
		},
	},
}
</script>
<style lang="less">
@import '../../less/conf';

.vf-center-empty {
	top: 50%;
	justify-content: center;
	width: 100%;
	margin-top: -15px;
	font-size: 20px;
	color: #ccc;
}

.vf-center {
	margin-top: 10px;
	margin-right: 450px;
	margin-left: 260px;
}

.vf-drag-box {
	min-height: calc(100vh - 220px);
	border: 1px dashed #ddd;
	border-radius: 4px;

	.vf-component {
		cursor: move;
	}

	> div {
		transition: all 0.3s;
	}
}

.vf-drag-active {
	background-color: rgba(18, 120, 246, 0.05);
}

.vf-drag-content {
	flex-wrap: wrap;
	width: 100%;
	min-height: 52px;
}

.vue-grid-item {
	width: 100% !important;
}

.ivu-dropdown {
	margin-right: 10px;

	&.disabled {
		a {
			color: #ddd;
		}
	}
}

.vf-fn-btn-box {
	align-items: center;
}

.vf-fn-btn {
	margin-right: 10px;
	font-size: 14px;
	color: @themeColor;
	user-select: none;

	&:hover {
		color: @themeColor_08;
	}
}

.vf-fn {
	height: 90px;

	h2 {
		margin-bottom: 15px;
		font-size: 16px;
	}
}
</style>
