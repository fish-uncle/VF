<template>
  <Modal v-model="model.dataVisible" :closable="false" :footer-hide="true" :scrollable="true">
    <json-viewer
      v-if="model.dataVisible"
      :value="center.data"
      :expand-depth=5
      copyable
      boxed
      sort></json-viewer>
  </Modal>
</template>
<script>
  import {mapState} from 'vuex';

  export default {
    computed: {
      ...mapState(["model", "center"]),
    }
  }
</script>
