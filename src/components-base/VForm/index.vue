<template>
  <div class="vf-form">
    <slot/>
  </div>
</template>
<script>
  import formList from '../../mixins/formList'

  export default {
    name: 'FormList',
    mixins: [formList],
    data() {
      return {
        status: 'read',
      }
    },
    methods: {
      // init () {
      //   this.data = {};
      //   let componentList = [];
      //   for (let i = 0; i <= this.currentList.length - 1; i++) {
      //     componentList.push (...this.currentList[i])
      //   }
      //   for (let i = 0; i <= componentList.length - 1; i++) {
      //     this.handleChangeKeyForDrag ({ dragItem: componentList[i] })
      //   }
      // },
    },
    // mounted () {
    //   this.init ()
    // }
  }
</script>
