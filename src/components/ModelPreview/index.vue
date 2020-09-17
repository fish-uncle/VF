<template>
  <Modal width="1000" v-model="model.previewVisible" :closable="false" :footer-hide="true" :scrollable="true">
    <v-form ref="form" :view-scale="center.viewScale" :list="center.list"/>
    <div class="text-center">
      <Button type="primary" @click="handleSubmit">{{$t('model_preview_submit')}}</Button>
      <Button type="primary" @click="handleEdit">{{$t('model_preview_edit')}}</Button>
      <Button type="primary" @click="handleRead">{{$t('model_preview_read')}}</Button>
    </div>
  </Modal>
</template>
<script>
  import { mapState } from 'vuex';

  export default {
    computed: mapState ([ 'model', 'center' ]),
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
    }
  }
</script>
