<template>
  <div>
    <Row type="flex">
      <div :class="['ivu-col',`ivu-col-span-${scale}`]" v-for="(scale,scaleIndex) in scale">
        <div class="fn-flex flex-row" :style="{width:'100%',flexWrap:'wrap'}">
          <v-component :edit="false" :language="language" :value="item" :index="index"
                       :labelWidth="labelWidth" :labelTextAlign="labelTextAlign"
                       :status="status"
                       v-for="(item,index) in currentList[scaleIndex]"/>
        </div>
      </div>
    </Row>
  </div>
</template>
<script>
  import formList from '../../mixins/formList'

  export default {
    name: 'FormList',
    mixins: [formList],
    data() {
      return {
        currentList: [[], []],
        labelWidth: 120,
        status: 'read',
        labelTextAlign: 'right',
      }
    },
    computed: {
      scale() {
        return this.viewScale.split(':')
      }
    },
    watch: {
      list(val) {
        this.currentList = val
        this.init()
      }
    },
    props: {
      group: {
        type: Array,
        default: []
      },
      list: {
        type: Array,
        default: [[], []]
      },
      viewScale: {
        default: '12:12'
      },
      language: {
        default: 'zh'
      }
    },
    methods: {
      init() {
        this.data = {};
        let componentList = [];
        for (let i = 0; i <= this.currentList.length - 1; i++) {
          componentList.push(...this.currentList[i])
        }
        for (let i = 0; i <= componentList.length - 1; i++) {
          this.handleChangeKeyForDrag({dragItem: componentList[i]})
        }
      },
    },
    mounted() {
      this.init()
    }
  }
</script>
