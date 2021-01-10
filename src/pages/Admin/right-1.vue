<template>
	<div>
		<template v-for="child in list" >
			<component   :key="child" :item="item"
						 :propsVal="propsVal"
						 :is="currentComponent[child]"
						 v-if="item.changeList.indexOf(child)!==-1"/>
		</template>
	</div>
</template>
<script>
	import { mapState } from 'vuex'
	import { obj2Str } from '../../utils'

	export default {
		data () {
			return {
				currentComponent:{},
				list:[
					'title','labelTextAlign','content','amapVersion','amapKey','amapCenter','dashed','labelWidth',
					'widthRatio','width','placeholder','className','props','javascript','html'
				],
			}
		},
		computed: {
			...mapState ([ "center" ]),
			propsVal () {
				return obj2Str (this.item.props)
			},
			item () {
				if (this.center.list.length > 0) {
					return this.center.list[this.center.currentScale][this.center.current] ?
						this.center.list[this.center.currentScale][this.center.current] : { changeList: [] }
				} else {
					return { changeList: [] }
				}
			}
		},
		mounted() {
			const components = require.context(`../../components-func`, true, /\.(vue)$/)
			components.keys().forEach(child=>{
				const name = child.split('/')[1].replace('.vue','')
				this.currentComponent[name]=components(child).default
			})
		}
	}
</script>
<style lang="less">
	@import "../../less/conf";

	.vf-right {
		width: 440px;
		margin-top: 10px;
		padding-right: 10px;
		height: calc(100vh - 130px);
		overflow-y: auto;

		.tenant-select {
			width: 200px;
			top: 0;
			right: 10px;
		}

		h2 {
			font-size: 16px;
			height: 40px;
			margin-right: 10px;
			color: rgba(0, 0, 0, .3);
			user-select: none;

			&:hover, &.active {
				color: rgba(0, 0, 0, .65);
			}
		}

		.vf-control {
			> label {
				display: block;
				font-size: 14px;
				margin-bottom: 10px;
			}
		}


		.ivu-input, .ivu-input-group-append {
			height: 36px;
		}

		.vf-code {
			textarea {
				height: auto;
			}
		}

		.ivu-input-wrapper, .ivu-select {
			margin-bottom: 10px;
		}
	}
</style>
