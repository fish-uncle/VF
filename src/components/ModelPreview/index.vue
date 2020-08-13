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

  export default {
    computed: {
      ...mapState(["model", "center", "language"]),
    },
    methods: {
      handleSubmit() {
        if (!this.verifyRequired()) {
          console.log(this.center.data);
        }
      },
      verifyRequired() {
        const list = this.center.list;
        const data = this.center.data;
        let error = false;
        let errorIndex = 0;
        list.forEach((item, index) => {
          if (item.dragItem.required) {
            const d = data[item.dragItem.key]
            if (item.dragItem.dataType === 'Array') {
              if (d.length <= 0) {
                error = true
                errorIndex = index;
              }
            } else {
              if ((typeof d === 'string' && d === '') || typeof d === 'undefined' || d === null) {
                error = true;
                errorIndex = index;
              }
            }
          }
        })
        if (error) {
          const title = `title_${this.language.lang}`;
          const msg = `${list[errorIndex].dragItem[title]}${this.$t('verify-required')}`
          this.$Message.error(msg)
        }
        return error;
      }
    }
  }
</script>
