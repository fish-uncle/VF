<template>
  <Modal width="1000" v-model="model.codeVisible" :closable="false" :footer-hide="true" :scrollable="true">
    <editor :value="html"
            @init="editorInit" lang="html" theme="chrome" width="968" height="380"></editor>
  </Modal>
</template>
<script>
  import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState ([ 'model', 'center' ]),
      html () {
        const model_preview_submit = this.$t ('model_preview_submit')
        const lt = '<'
        const list = this.center.list
        const viewScale = this.center.viewScale
        return `<template>
  <div>
    <v-form ref="form" :view-scale="viewScale" :list="list"></v-form>
    <div class="text-center">
      <Button type="primary" @click="handleSubmit">${model_preview_submit}${lt}/Button>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        list: ${JSON.stringify (list)},
        viewScale: '${viewScale}'
      }
    },
    methods: {
      handleSubmit () {
        if (!this.$refs.form.verifyRequired.bind (this) ()) {
          console.log (this.$refs.form.getData ());
        }
      },
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
