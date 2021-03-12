<template lang="pug">
	div
		h2 changeSelectList
		p {{$t('changeSelectList')}}
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
      <Button type="primary" @click="handleChangeSelectList">${model_preview_change}${lt}/Button>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        list: [[{"width":12,"widthRatio":100,"disabled":false,"className":"","props":{},"required":false,"rules":"{'pattern': '','message': '该项格式不正确'}","events":{"onChange":"","onHide":"","onShow":"","onUpdate":""},"title":"下拉选择","id":"select","key":"select","type":"select","selectList": [{"value": "11","label": "1"},{"value": "22","label": "2"}]}],[]],
        viewScale: '12:12',
        labelWidth: 120,
        labelTextAlign: 'right',
        language: 'zh',
        group: []
      }
    },
    methods: {
      handleChangeSelectList () {
        this.$refs.form.changeSelectList({
            key: 'select',
            value: [
              {value: 'test11',label:'test11'},
              {value: 'test22',label:'test22'}
            ]
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
