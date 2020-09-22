<template>
  <Modal width="780" v-model="model.codeVisible" :closable="false" :footer-hide="true" :scrollable="true">
    <editor :value="html"
            @init="editorInit" lang="html" theme="chrome" width="750" height="700"></editor>
  </Modal>
</template>
<script>
  import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState ([ 'model', 'center', 'language' ]),
      html () {
        const model_preview_submit = this.$t ('model_preview_submit')
        const model_preview_edit = this.$t ('model_preview_edit')
        const model_preview_read = this.$t ('model_preview_read')
        const model_preview_reset = this.$t ('model_preview_reset')
        const lt = '<'
        let list = JSON.parse (JSON.stringify (this.center.list))
        const viewScale = this.center.viewScale
        const group = this.center.group
        const labelWidth = this.center.labelWidth
        const labelTextAlign = this.center.labelTextAlign
        list.forEach (child => {
          child.forEach (item => {
            if (item.labelWidth === labelWidth) {
              delete item.labelWidth
            }
            if (item.labelTextAlign === labelTextAlign) {
              delete item.labelTextAlign
            }
            delete item.version
            delete item.icon
            item.title = item[`title_${this.language.lang}`]
            delete item.title_zh
            delete item.title_en
            delete item.changeList
            delete item.componentType
          })
        })
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
        list: ${JSON.stringify (list)},
        viewScale: '${viewScale}',
        labelWidth: ${labelWidth},
        labelTextAlign: '${labelTextAlign}',
        language: 'zh',
        group: ${JSON.stringify (group)}
      }
    },
    methods: {
      handleSubmit () {
        if (!this.$refs.form.validate ()) {
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
    },
  }
</script>
