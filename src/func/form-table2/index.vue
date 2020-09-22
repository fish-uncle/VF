<template>
  <div class="vf-table"
       v-bind="currentVal.props"
       :style="{width:`${currentVal.widthRatio}%`}"
       :class="[currentVal.className,status==='edit'?'vf-table-edit':'']">
    <Button @click="tableCreate">添加</Button>
    <Button @click="tableSave">保存</Button>
    <v-form ref="form">
      <Table :columns="currentColumns" :data="parent.tableData[currentVal.key]">
      </Table>
    </v-form>
  </div>
</template>
<script>
  import request from '../../utils/request'
  import func from '../../mixins/func'

  export default {
    mixins: [func],
    data() {
      return {
        total: 0,
        page: 1,
      }
    },
    computed: {
      currentColumns() {
        if (!this.isMounted)
          return []
        if (this.currentVal.columns) {
          const status = this.status
          const columns = JSON.parse(JSON.stringify(this.currentVal.columns))
          const form = this.$refs.form
          const parent = this.parent
          const key = this.currentVal.key
          columns.forEach(item => {
            item.render = (h, {row, column, index}) => {
              form.changeData({
                key: `${column.key}${index}`,
                value: this.parent.tableData[this.currentVal.key][index][column.key]
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
                    events: {
                      onChange: (value) => {
                        form.changeData({
                          key: `${column.key}${index}`,
                          value: value
                        })
                        let val = JSON.parse(JSON.stringify(parent.data))
                        val[key][index][column.key] = value
                        parent.changeData({
                          key,
                          value: val[key]
                        })
                      }
                    }
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
    mounted() {
      this.update()
    },
    methods: {
      tableSave() {
        // console.log(this.$refs.form.validate())
      },
      tableCreate() {
        this.parent.changeTableData({
          value: [
            {
              test: '111',
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
