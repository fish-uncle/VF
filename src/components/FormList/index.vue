<template>
  <div>
    <div v-for="(item,index) in center.list">
      <f-component :value="item" :index="index"/>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex';

  export default {
    name: 'FormList',
    computed: {
      ...mapState(["center"]),
    },
    methods: {
      controlOthersHide(controlOthersHideTargetKeys, value) {
        if (this.$children) {
          this.$children.forEach(child => {
            for (let key in controlOthersHideTargetKeys) {
              const k = key.toString();
              if (controlOthersHideTargetKeys[key].indexOf(child.id) !== -1) {
                if (Array.isArray(value)) {
                  const v = value.map(item => item.toString());
                  if (v.indexOf(k) !== -1) {
                    child.hide();
                  } else {
                    child.show();
                  }
                } else {
                  const v = value.toString();
                  if (k === v) {
                    child.hide();
                  } else {
                    child.show();
                  }
                }
              }
            }
          });
        }
      },
      controlOthersUpdate(controlOthersUpdateTargetKeys) {
        if (this.$children) {
          this.$children.forEach(child => {
            if (controlOthersUpdateTargetKeys.indexOf(child.id) !== -1) {
              child.init();
            }
          });
        }
      },
    },
  }
</script>
