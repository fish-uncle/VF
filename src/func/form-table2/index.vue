<template>
  <div class="vf-table"
       v-bind="currentVal.props"
       :style="{width:`${currentVal.widthRatio}%`}"
       :class="[currentVal.className,status==='edit'?'vf-table-edit':'']">
    <Button @click="tableCreate">添加</Button>
    <v-form ref="form">
      <vxe-table :data.sync="parent.tableData[currentVal.key]">
        <vxe-table-column :field="item.key" :title="item.title" v-for="(item) in currentVal.columns">
          <template slot-scope="{ row,rowIndex }">
            <v-component :type="item.type" :status="status"
                         :value="rowValue(item,row,rowIndex)"
            ></v-component>
          </template>
        </vxe-table-column>
      </vxe-table>
    </v-form>
  </div>
</template>
<script>
  import request from '../../utils/request'
  import func from '../../mixins/func'
  import VForm from '../../components/VForm'

  export default {
    mixins: [func],
    components: {VForm},
    data() {
      return {
        total: 0,
        page: 1,
      }
    },
    mounted() {
      const form = this.$refs.form
      this.update()
      this.parent.tableData[this.currentVal.key].forEach((item, index) => {
        for (let key in item) {
          if (key !== '_XID') {
            form.changeData({
              key: `${key}${index}`,
              value: item[key]
            })
          }
        }
      })
    },
    methods: {
      rowValue(item, row, index) {
        const form = this.$refs.form
        const parent = this.parent
        const key = this.currentVal.key
        return {
          id: `${item.key}${index}`, key: `${item.key}${index}`,
          labelWidth: 0,
          type: item.type,
          required: false,
          width: 24,
          widthRatio: 100,
          rules: "{'pattern': '','message': '该项格式不正确'}",
          selectList: item.selectList || [],
          events: {
            onChange: (value) => {
              form.changeData({
                key: `${item.key}${index}`,
                value: value
              })
              let val = JSON.parse(JSON.stringify(parent.tableData))
              val[key][index][item.key] = value
              parent.changeTableData({
                key,
                value: val[key]
              })
            }
          }
        }
      },
      tableCreate() {
        const value = {}
        this.currentVal.columns.forEach(item => {
          value[item.key] = ''
        })
        const tableData = JSON.parse(JSON.stringify(this.parent.tableData[this.currentVal.key]))
        tableData.push(value)
        this.parent.changeTableData({
          value: tableData,
          key: this.currentVal.key
        })
      },
      update() {
        if (this.currentVal.tableAjaxUrl) {
          request.post(this.currentVal.tableAjaxUrl).then(res => {
            if (res) {
              this.parent.changeTableData({
                value: res.list,
                key: this.currentVal.key
              })
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
