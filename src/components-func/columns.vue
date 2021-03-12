<template>
	<div class="vf-control">
		<label>{{ $t('admin_right_btn30') }}</label>
		<ul class="vf-select-list">
			<li class="fn-flex flex-row">
				<span style="width: 125px">title</span>
				<span style="width: 125px">key</span>
				<span>type</span>
			</li>
			<li class="fn-flex flex-row" v-for="(child,index) in item.columns" :key="child.key">
				<i-input
					style="width: 125px"
					v-model="child.title"
					@on-change="e=>columnsTitleChange(e,index)"
				/>
				<i-input
					style="width: 125px;margin-left: 10px;"
					v-model="child.key"
					@on-change="e=>columnsKeyChange(e,index)"
				/>
				<i-select
					style="width: 125px;margin-left: 10px;"
					v-model="child.type"
					@on-change="e=>columnsValueChange(e,index)"
				>
					<i-option value="input">input</i-option>
					<i-option value="select">select</i-option>
					<i-option value="text">text</i-option>
				</i-select>
				<span
					:class="item.columns.length > 1 ? '' : 'disabled'"
					class="vf-select-del text-center pointer"
					@click="columnsDelChange(index)"
				>-</span>
				<span class="vf-select-add text-center pointer" @click="columnsAddChange(index)">+</span>
			</li>
		</ul>
	</div>
</template>
<script>
	import func from '../mixins/func'
	export default {
		mixins: [func]
	}
</script>
