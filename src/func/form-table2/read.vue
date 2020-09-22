<template>
  <div class="vf-table"
       v-bind="currentVal.props"
       :style="{width:`${currentVal.widthRatio}%`}"
       :class="[currentVal.className,status==='edit'?'vf-table-edit':'']">
    <Button @click="tableCreate">添加</Button>
    <Button @click="tableCreate">添加</Button>
    <v-form ref="form">
      <Table :columns="currentColumns" :data="parent.data[currentVal.key]">
      </Table>
    </v-form>
  </div>
</template>
<script>
  import request from '../../utils/request'
  import {findComponentUpward} from "../../utils";

  export default {
    data() {
      return {
        currentVal: this.value,
        parent: findComponentUpward(this, 'FormList'),
        total: 0,
        page: 1,
        isMounted: false
      }
    },
    props: ['value', 'language', 'status'],
    computed: {
      currentColumns() {
        if (!this.isMounted)
          return []
        if (this.currentVal.columns) {
          const status = this.status
          const columns = JSON.parse(JSON.stringify(this.currentVal.columns))
          const form = this.$refs.form
          columns.forEach(item => {
            item.render = (h, {row, column, index}) => {
              form.changeData({
                key: `${column.key}${index}`,
                value: this.parent.data[this.currentVal.key][index][column.key]
              })
              return h('v-component', {
                props: {
                  status,
                  value: {
                    id: `${column.key}${index}`,
                    key: `${column.key}${index}`,
                    type: 'input',
                    labelWidth: 0,
                    rules: {
                      required: true,
                      pattern: '',
                      message: '该项格式不正确'
                    },
                  }
                }
              })
            }
          })
          return columns
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
      this.update()
      this.isMounted = true
    },
    methods: {
      tableCreate() {
        this.parent.changeData({
          value: [
            {
              test: '111',
            },
            {
              test: '222',
            },
          ],
          key: this.currentVal.key
        })
      },
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
  .vf-table-edit {
    .ivu-table-cell {
      text-overflow: unset;
    }

    .vf-component {
      padding-left: 0;
      padding-right: 0;
    }
  }

</style>
