<template>
  <Modal v-model="model.previewVisible" :closable="false" :footer-hide="true" :scrollable="true">
    <f-list v-if="model.previewVisible"/>
    <div class="text-center">
      <Button type="primary" @click="handleSubmit">{{$t('model_preview_submit')}}</Button>
    </div>
  </Modal>
</template>
<script>
  import {mapState} from 'vuex';
  import {verifyRequired} from '../../utils';

  export default {
    computed: mapState(["model", "center", "language"]),
    methods: {
      handleSubmit() {
        if (!verifyRequired.bind(this)()) {
          console.log(this.center.data);
        }
      },
    }
  }
</script>
