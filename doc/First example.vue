<template lang="pug">
	div
		h2 {{$t('help_left_1_3')}}
		pre
			code.html {{html}}
</template>
<script>
	import component from '../src/store/component'

	export default {
		data () {
			return {
				component: component.state
			}
		},
		computed: {
			html () {
				const model_preview_submit = this.$t('model_preview_submit')
				const model_preview_edit = this.$t('model_preview_edit')
				const model_preview_read = this.$t('model_preview_read')
				const model_preview_reset = this.$t('model_preview_reset')
				const lt = '<'
				const test = JSON.parse(JSON.stringify(this.component.list[0]))
				delete test.changeList
				delete test.version
				delete test.icon
				delete test.labelWidth
				delete test.labelTextAlign
				delete test.title_en
				test.key = 'input'
				test.title = test.title_zh
				delete test.title_zh
				test.id = 'input'
				const list = [[test], []]
				const viewScale = '12:12'
				const labelWidth = 120
				const labelTextAlign = 'right'
				const group = []
				return `<template>
  <div>
    <v-list ref="form" :language="language" :view-scale="viewScale" :list="list" :group="group"
    :labelWidth="labelWidth" :labelTextAlign="labelTextAlign">
    </v-list>
    <div class="text-center">
      <Button type="primary" @click="handleSubmit">${model_preview_submit}${lt}/Button>
      <Button type="primary" @click="handleReset">${model_preview_reset}${lt}/Button>
      <Button type="primary" @click="handleEdit">${model_preview_edit}${lt}/Button>
      <Button type="primary" @click="handleRead">${model_preview_read}${lt}/Button>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        list: ${JSON.stringify(list)},
        viewScale: '${viewScale}',
        labelWidth: ${labelWidth},
        labelTextAlign: '${labelTextAlign}',
        language: 'zh',
        group: ${JSON.stringify(group)}
      }
    },
    methods: {
      handleSubmit () {
        if (!this.$refs.form.validate.bind (this) ()) {
          console.log (this.$refs.form.getData ());
          console.log (this.$refs.form.getDataByGroup ());
        }
      },
      handleReset(){
        this.$refs.form.reset ()
      },
      handleEdit () {
        this.$refs.form.statusEdit ()
      },
      handleRead () {
        this.$refs.form.statusRead ()
      }
    },
  }
${lt}/script>`
			}
		}
	}
</script>
