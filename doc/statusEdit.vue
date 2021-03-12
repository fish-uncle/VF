<template lang="pug">
	div
		h2 statusEdit
		p {{$t('statusEdit')}}
		pre
			code.html {{html}}
</template>
<script>
	export default {
		data () {
			const lt = '<'
			const model_preview_edit = this.$t('model_preview_edit')
			return {
				html: `<template>
  <div>
    <v-list ref="form" :language="language" :view-scale="viewScale" :list="list" :group="group"
    :labelWidth="labelWidth" :labelTextAlign="labelTextAlign">
    </v-list>
    <div class="text-center">
      <Button type="primary" @click="handleEdit">${model_preview_edit}${lt}/Button>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        list: [[{"width":12,"widthRatio":100,"disabled":false,"className":"","props":{},"required":false,"rules":"{'pattern': '','message': '该项格式不正确'}","events":{"onChange":"","onHide":"","onShow":"","onUpdate":""},"title":"单行文本","id":"input","key":"input","type":"input","placeholder":""}],[]],
        viewScale: '12:12',
        labelWidth: 120,
        labelTextAlign: 'right',
        language: 'zh',
        group: []
      }
    },
    methods: {
      handleEdit () {
        this.$refs.form.statusEdit ()
      },
    },
  }
${lt}/script>
`
			}
		}
	}
</script>
