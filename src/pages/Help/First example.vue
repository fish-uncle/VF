<template>
  <div>
    <h2>{{$t('help_left_1_3')}}</h2>
    <editor :value="html"
            @init="editorInit" lang="html" theme="chrome" width="968" height="580"></editor>
  </div>
</template>
<script>
  import { mapState } from "vuex"

  export default {
    computed: {
      ...mapState ([ 'component' ]),
      html () {
        const model_preview_submit = this.$t ('model_preview_submit')
        const model_preview_edit = this.$t ('model_preview_edit')
        const model_preview_read = this.$t ('model_preview_read')
        const model_preview_reset = this.$t ('model_preview_reset')
        const lt = '<'
        const test = JSON.parse (JSON.stringify (this.component.list[0]))
        delete test.changeList
        delete test.version
        delete test.icon
        delete test.labelWidth
        delete test.componentType
        delete test.labelTextAlign
        const list = [ [ test ], [] ]
        const viewScale = '12:12'
        const labelWidth = 120
        const labelTextAlign = 'right'
        return `<template>
  <div>
    <v-form ref="form" :view-scale="viewScale" :list="list" :labelWidth="labelWidth" :labelTextAlign="labelTextAlign"></v-form>
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
        list: ${JSON.stringify (list)},
        viewScale: '${viewScale}',
        labelWidth: ${labelWidth},
        labelTextAlign: '${labelTextAlign}'
      }
    },
    methods: {
      handleSubmit () {
        if (!this.$refs.form.validate.bind (this) ()) {
          console.log (this.$refs.form.getData ());
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
    },
  }
</script>