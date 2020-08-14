<template>
  <div>
    <f-list/>
    <div class="text-center">
      <Button type="primary" @click="handleSubmit">{{$t('model_preview_submit')}}</Button>
    </div>
  </div>
</template>
<script>
  import {verifyRequired} from '../../utils';
  import {mapState} from "vuex";

  export default {
    computed: mapState(["model", "center", "language"]),
    methods: {
      handleSubmit() {
        if (!verifyRequired.bind(this)()) {
          console.log(this.center.data);
        }
      },
    },
  }
</script>