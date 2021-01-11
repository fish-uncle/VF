<template>
	<div>
		<div class="vf-control">
			<label>{{$t('admin_right_btn3')}}</label>
			<i-input v-model="center.labelWidth"
					 @on-change="numberChange"><span slot="append">px</span>
			</i-input>
		</div>
		<div class="vf-control">
			<label>{{$t('admin_right_btn2')}}</label>
			<RadioGroup v-model="center.labelTextAlign" type="button" size="large"
						@on-change="checkChange">
				<Radio label="left">{{$t('admin_right_btn2_1')}}</Radio>
				<Radio label="right">{{$t('admin_right_btn2_2')}}</Radio>
			</RadioGroup>
		</div>
		<div class="vf-control">
			<label>{{$t('group1')}}</label>
			<i-switch :value="true" :disabled="true"/>
			<ul class="vf-select-list">
				<li class="fn-flex flex-row">
					<span style="width: 140px">{{$t('group2')}}</span>
					<span style="width: 70px">{{$t('group3')}}</span>
					<span>{{$t('group4')}}</span>
				</li>
				<li class="fn-flex flex-row" v-for="(item ,index) in center.group" :key="item.id">
					<i-input style="width: 130px" v-model="item.id" :disabled="true"/>
					<ColorPicker v-model="item.color"
								 style="margin-left: 10px;"
								 class="vf-color-picker"
								 :alpha="true"/>
					<i-input style="width: 130px;margin-left: 10px;" v-model="item.key"/>
					<span class="vf-select-del text-center pointer"
						  :class="Object.keys(center.group).length===1?'disabled':''"
						  @click="groupDelChange(index)">-</span>
					<span class="vf-select-add text-center pointer"
						  @click="groupAddChange">+</span>
				</li>
			</ul>
		</div>
		<div class="vf-control">
			<label>{{$t('multiform1')}}</label>
			<i-switch v-model="multiFormValue"/>
			<ul class="vf-select-list">
				<li class="fn-flex flex-row">
					<span style="width: 205px">{{$t('multiform2')}}</span>
					<span>{{$t('multiform3')}}</span>
				</li>
				<li class="fn-flex flex-row" v-for="(item ,index) in center.multiForm" :key="item.key">
					<i-input style="width: 165px" v-model="item.key" :disabled="true"/>
					<i-input style="width: 165px;margin-left: 10px;" :value="item.name"
							 @on-change="e=>multiformChange(e,index)"/>
					<span class="vf-select-del text-center pointer"
						  :class="center.multiForm.length===1?'disabled':''"
						  @click="multiformDelChange(index)">-</span>
					<span class="vf-select-add text-center pointer"
						  @click="multiformAddChange">+</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import {mapState} from 'vuex'
	import {uuid} from '../../utils'

	export default {
		computed: {
			...mapState(['center']),
			multiFormValue() {
				return this.center.multiForm.length > 1
			}
		},
		methods: {
			checkChange(value) {
				this.$store.commit('center/labelTextAlignChange', {labelTextAlign: value})
			},
			numberChange(e) {
				this.$store.commit('center/labelWidthChange', {labelWidth: e.target.value})
			},
			multiformDelChange(index) {
				localStorage.removeItem(this.center.multiForm[index].key)
				this.$store.commit('center/multiFormChangeDel', {index})
			},
			multiformAddChange() {
				const key = uuid()
				this.$store.commit('center/multiFormChangeAdd', {key: `form${key}`})
				localStorage.setItem(`form${key}`, JSON.stringify({list: [[], []], viewScale: '12:12'}))
			},
			multiformChange(e, index) {
				const value = e.target.value
				this.$store.commit('center/multiFormChangeName', {index, value})
			},
			groupAddChange() {
				const key = uuid()
				this.$store.commit('center/groupChangeAdd', {key: `group${key}`})
			},
			groupDelChange(index) {
				this.$store.commit('center/groupChangeDel', {index})
			}
		}
	}
</script>
