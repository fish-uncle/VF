<template>
  <div>
    <h2>statusRead</h2>
    <p>{{$t('statusRead')}}</p>
    <pre>
      <code class="html">{{html}}</code>
    </pre>
  </div>
</template>
<script>
  export default {
    data() {
      const lt = '<'
      const model_preview_read = this.$t ('model_preview_read')
      return {
        html: `<template>
  <div>
    <v-list ref="form" :language="language" :view-scale="viewScale" :list="list" :group="group"
    :labelWidth="labelWidth" :labelTextAlign="labelTextAlign">
    </v-list>
    <div class="text-center">
      <Button type="primary" @click="handleRead">${model_preview_read}${lt}/Button>
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
      handleRead () {
        this.$refs.form.statusRead ()
      },
    },
  }
${lt}/script>
`
      }
    }
  }
</script>