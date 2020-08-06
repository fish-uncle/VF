<template>
  <Modal v-model="model.previewVisible" :closable="false" :footer-hide="true" :scrollable="true">
    <f-list v-if="model.previewVisible"/>
  </Modal>
</template>
<script>
  import {mapState} from 'vuex';

  export default {
    computed: {
      ...mapState(["model"]),
    }
  }
</script>
