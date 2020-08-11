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
              console.log(2)
              if (controlOthersHideTargetKeys[key].indexOf(child.id) !== -1) {
                if (key == value) {
                  child.hide();
                } else {
                  child.show();
                }
              }
            }
          });
        }
      },
      controlOthersUpdate(controlOthersUpdateTargetKeys) {
        if (this.$children) {
          this.$children.forEach(child => {
            console.log(1)
            if (controlOthersUpdateTargetKeys.indexOf(child.id) !== -1) {
              child.init();
            }
          });
        }
      },
    },
  }
</script>
