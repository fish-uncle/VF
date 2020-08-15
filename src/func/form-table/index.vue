<template>
  <div class="f-table" :style="{width:`${currentVal.dragItem.widthRatio}%`}" :class="[currentVal.dragItem.className]">
    <Table :columns="columns" :data="data">
    </Table>
  </div>
</template>
<script>
  import request from '../../utils/request'

  export default {
    data() {
      return {
        currentVal: this.value,
        data: [],
        total: 0,
        page: 1
      }
    },
    props: ["value"],
    computed: {
      columns() {
        if (this.currentVal.dragItem.columns) {
          return require(`../../columns/${this.currentVal.dragItem.columns}`);
        } else {
          return []
        }
      }
    },
    watch: {
      value(val) {
        this.currentVal = val;
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        if (this.currentVal.dragItem.tableAjaxUrl) {
          request.post(this.currentVal.dragItem.tableAjaxUrl).then(res => {
            if (res) {
              this.data = res.list
              this.total = res.total
            }
          })
        }
      },
    }
  }
</script>
<style lang="less">
</style>
