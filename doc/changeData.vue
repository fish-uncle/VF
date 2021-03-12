<template lang="pug">
	div
		h2 changeData
		p {{$t('changeData')}}
		pre
			code.html {{html}}
</template>
<script>
	export default {
		data () {
			const lt = '<'
			const model_preview_change = this.$t('model_preview_change')
			return {
				html: `<template>
  <div>
    <v-list ref="form" :language="language" :view-scale="viewScale" :list="list" :group="group"
    :labelWidth="labelWidth" :labelTextAlign="labelTextAlign">
    </v-list>
    <div class="text-center">
      <Button type="primary" @click="handleChangeData">${model_preview_change}${lt}/Button>
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
      handleChangeData () {
        this.$refs.form.changeData({
            key: 'input',
            value: '123'
        })
      },
    },
  }
${lt}/script>
`
			}
		}
	}
</script>
