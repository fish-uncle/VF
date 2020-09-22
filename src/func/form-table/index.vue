<template>
  <div class="vf-table"
       v-bind="currentVal.props"
       :style="{width:`${currentVal.widthRatio}%`}"
       :class="[currentVal.className]">
    <Table :columns="currentColumns" :data="data">
    </Table>
  </div>
</template>
<script>
  import request from '../../utils/request'
  import func from '../../mixins/func'

  export default {
    mixins: [func],
    data() {
      return {
        data: [],
        total: 0,
        page: 1
      }
    },
    computed: {
      currentColumns() {
        if (this.currentVal.columns) {
          return this.currentVal.columns
        } else {
          return []
        }
      }
    },
    mounted() {
      this.update();
    },
    methods: {
      update() {
        if (this.currentVal.tableAjaxUrl) {
          request.post(this.currentVal.tableAjaxUrl).then(res => {
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
