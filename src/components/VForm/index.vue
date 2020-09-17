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
  import Schema from 'async-validator'

  export default {
    data () {
      return {
        data: {},
        currentList: [ [], [] ],
        child: {},
        labelWidth: 120,
        status: 'edit', // edit 编辑 ，read 只读
        labelTextAlign: 'right',
      }
    },
    computed: {
      scale () {
        return this.viewScale.split (':')
      }
    },
    name: 'FormList',
    watch: {
      list (val) {
        this.currentList = val
        this.init ()
      }
    },
    props: {
      list: {
        type: Array,
        default: [ [], [] ]
      },
      viewScale: {
        default: '12:12'
      },
      language: {
        default: 'zh'
      }
    },
    methods: {
      statusEdit () {
        this.status = 'edit'
      },
      statusRead () {
        this.status = 'read'
      },
      errorHide (id) {
        this.child[id].errorHide ()
      },
      childMounted (obj) {
        this.child[obj.id] = obj
      },
      init () {
        this.data = {};
        let componentList = [];
        for (let i = 0; i <= this.currentList.length - 1; i++) {
          componentList.push (...this.currentList[i])
        }
        for (let i = 0; i <= componentList.length - 1; i++) {
          this.dataAdd ({ dragItem: componentList[i] })
        }
      },
      controlOthersHide (controlOthersHideTargetKeys, value) {
        for (let key in controlOthersHideTargetKeys) {
          for (let id in this.child) {
            if (controlOthersHideTargetKeys[key].indexOf (id) !== -1) {
              const k = key.toString ()
              if (Array.isArray (value)) {
                const v = value.map (item => item.toString ());
                if (v.indexOf (k) !== -1) {
                  this.child[id].hide ();
                } else {
                  this.child[id].show ();
                }
              } else {
                const v = value ? value.toString () : value;
                if (k === v) {
                  this.child[id].hide ();
                } else {
                  this.child[id].show ();
                }
              }
            }
          }
        }
      },
      controlOthersUpdate (controlOthersUpdateTargetKeys) {
        controlOthersUpdateTargetKeys.forEach (item => {
          this.child[item].init ()
        })
      },
      reset () {
        this.init ()
      },
      validate () {
        const data = this.data
        let componentList = [], descriptor = {};
        for (let i = 0; i <= this.currentList.length - 1; i++) {
          componentList.push (...this.currentList[i])
        }
        for (let i = 0; i <= componentList.length - 1; i++) {
          const item = componentList[i];
          if (item.dataType !== 'Null' && this.child[item.id].visibleStatus ()) {
            descriptor[item.key] = {
              ...item.rules,
              id: item.id,
              pattern: new RegExp (item.rules.pattern)
            }
          }
        }
        const validator = new Schema (descriptor);
        validator.validate (data, (errors) => {
          if (errors) {
            errors.forEach (item => {
              this.child[descriptor[item.field].id].errorShow (item.message);
            })
          }
        });
      },
      changeData ({ key, value }) {
        this.data[key] = value
      },
      getData () {
        return this.data
      },
      dataAdd ({ dragItem }) {
        const data = this.data
        switch (dragItem.dataType) {
          case 'Boolean':
            this.$set (data, dragItem.key, false)
            break
          case 'Number':
            this.$set (data, dragItem.key, 0)
            break
          case 'Null':
            break
          case 'Array':
            this.$set (data, dragItem.key, [])
            break
          case 'TimeRange':
            this.$set (data, dragItem.key, [])
            this.$set (data, dragItem.key.split (';') [0], '')
            this.$set (data, dragItem.key.split (';') [1], '')
            break
          case undefined:
            this.$set (data, dragItem.key, '')
            break
          default:
            this.$set (data, dragItem.key, '')
        }
        this.data = data
      },
      changeSelectList ({ key, value }) {
        const currentList = this.currentList
        currentList.forEach (child => {
          child.forEach (item => {
            if (item.key === key) {
              item.ajaxList = value
            }
          })
        })
        this.currentList = currentList
      },
    },
    mounted () {
      this.init ()
    }
  }
</script>
