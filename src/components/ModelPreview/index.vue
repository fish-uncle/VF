<template>
  <Modal width="1000" v-model="model.previewVisible" :closable="false" :footer-hide="true" :scrollable="true">
    <v-form ref="form" :view-scale="center.viewScale" :list="center.list"
            :labelTextAlign="center.labelTextAlign"
            :language="language.lang"
            :labelWidth="center.labelWidth"/>
    <div class="text-center">
      <Button type="primary" @click="handleAdd">{{$t('model_preview_add')}}</Button>
      <Button type="primary" @click="handleSubmit">{{$t('model_preview_submit')}}</Button>
      <Button type="primary" @click="handleReset">{{$t('model_preview_reset')}}</Button>
      <Button type="primary" @click="handleEdit">{{$t('model_preview_edit')}}</Button>
      <Button type="primary" @click="handleRead">{{$t('model_preview_read')}}</Button>
    </div>
  </Modal>
</template>
<script>
  import { mapState } from 'vuex'

  export default {
    data () {
      return {
        show: false
      }
    },
    computed: mapState ([ 'model', 'center', 'language', 'component' ]),
    watch: {
      "$store.state.model.previewVisible" (newVal) {
        if (newVal) {
          this.$refs.form.reset ()
        }
      },
    },
    methods: {
      handleAdd () {
        const list = this.center.list
        const dragItem = JSON.parse (JSON.stringify (this.component.list[0]))
        const id = Math.random (5).toString (32).replace ('0.', '')
        dragItem.id = id
        dragItem.key = id
        dragItem.labelWidth = this.center.labelWidth
        dragItem.labelTextAlign = this.center.labelTextAlign
        list[0].push (dragItem)
        const viewScale = this.center.viewScale
        this.$store.commit ('center/set', { list, viewScale })
      },
      handleSubmit () {
        if (!this.$refs.form.validate.bind (this) ()) {
          console.log (this.$refs.form.getData ());
        }
      },
      handleReset () {
        this.$refs.form.reset ()
      },
      handleEdit () {
        this.$refs.form.statusEdit ()
      },
      handleRead () {
        this.$refs.form.statusRead ()
      }
    }
  }
</script>
