<template>
  <Modal width="1000" v-model="model.codeVisible" :closable="false" :footer-hide="true" :scrollable="true">
    <editor :value="html"
            @init="editorInit" lang="html" theme="chrome" width="968" height="550"></editor>
  </Modal>
</template>
<script>
  import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState ([ 'model', 'center' ]),
      html () {
        const model_preview_submit = this.$t ('model_preview_submit')
        const model_preview_edit = this.$t ('model_preview_edit')
        const model_preview_read = this.$t ('model_preview_read')
        const lt = '<'
        let list = JSON.parse (JSON.stringify (this.center.list))
        const viewScale = this.center.viewScale
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
            delete item.changeList
          })
        })

        return `<template>
  <div>
    <v-form ref="form" :view-scale="viewScale" :list="list" :labelWidth="labelWidth" :labelTextAlign="labelTextAlign"></v-form>
    <div class="text-center">
      <Button type="primary" @click="handleSubmit">${model_preview_submit}${lt}/Button>
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
        if (!this.$refs.form.verifyRequired.bind (this) ()) {
          console.log (this.$refs.form.getData ());
        }
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
    methods: {
      editorInit: function () {
        require ('brace/ext/language_tools') //language extension prerequsite...
        require ('brace/mode/html')
        require ('brace/mode/javascript')    //language
        require ('brace/mode/less')
        require ('brace/theme/chrome')
        require ('brace/snippets/javascript') //snippet
      },
    }
  }
</script>
