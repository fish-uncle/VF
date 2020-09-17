<template>
  <div class="vf-table"
       v-bind="currentVal.props"
       :style="{width:`${currentVal.widthRatio}%`}"
       :class="[currentVal.className]">
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
    props: ['value','language'],
    computed: {
      columns() {
        if (this.currentVal.columns) {
          return require(`../../columns/${this.currentVal.columns}`);
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
