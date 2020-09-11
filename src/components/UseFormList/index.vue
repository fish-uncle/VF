<template>
  <div>
    <Row type="flex">
      <div :class="['ivu-col',`ivu-col-span-${scale}`]" v-for="(scale,scaleIndex) in scale">
        <div class="fn-flex flex-row" :style="{width:'100%',flexWrap:'wrap'}">
          <v-component :edit="false" :language="language" :value="item" :index="index"
                       v-for="(item,index) in currentList[scaleIndex]"/>
        </div>
      </div>
    </Row>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        data: {},
        currentList: [ [], [] ],
        child: {}
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
      childMounted (obj) {
        this.child[obj.id] = obj
      },
      init () {
        let componentList = [];
        for (let i = 0; i <= this.currentList.length - 1; i++) {
          componentList.push (...this.currentList[i])
        }
        for (let i = 0; i <= componentList.length - 1; i++) {
          this.dataAdd ({ dragItem: componentList[i].dragItem })
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
      verifyRequired () {
        const data = this.data;
        let error = false;
        let errorIndex = 0;
        let componentList = [];
        for (let i = 0; i <= this.currentList.length - 1; i++) {
          componentList.push (...this.currentList[i])
        }
        for (let i = 0; i <= componentList.length - 1; i++) {
          const item = componentList[i];
          if (item.dragItem.required && item.dragItem.componentType === 'base') {
            const d = data[item.dragItem.key]
            if (item.dragItem.dataType === 'TimeRange') {
              const key = item.dragItem.key.split (';');
              key.forEach (child => {
                if ((typeof data[child] === 'string' && data[child] === '') || typeof data[child] === 'undefined' || data[child] === null) {
                  error = true;
                  errorIndex = i;
                }
              })
              if (error) {
                break;
              }
            } else if (item.dragItem.dataType === 'Array') {
              if (d.length <= 0) {
                error = true
                errorIndex = i;
                break;
              }
            } else {
              if ((typeof d === 'string' && d === '') || typeof d === 'undefined' || d === null) {
                error = true;
                errorIndex = i;
                break;
              }
            }
          }
        }
        if (error) {
          const title = `title_${this.language}`;
          const msg = `${componentList[errorIndex].dragItem[title]}${this.$t ('verify_required')}`
          this.$Message.error (msg)
        }
        return error;
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
            data[dragItem.key] = false
            break
          case 'Number':
            data[dragItem.key] = 0
            break
          case 'Null':
            break
          case 'Array':
            data[dragItem.key] = []
            break
          case 'TimeRange':
            data[dragItem.key] = []
            data[dragItem.key.split (';') [0]] = ''
            data[dragItem.key.split (';') [1]] = ''
            break
          case undefined:
            data[dragItem.key] = ''
            break
          default:
            data[dragItem.key] = ''
        }
        this.data = data
      },
      changeSelectList ({ key, value }) {
        const currentList = this.currentList
        currentList.forEach (child => {
          child.forEach (item => {
            if (item.dragItem.key === key) {
              item.dragItem.ajaxList = value
            }
          })
        })
        this.currentList = currentList
      },
    }
  }
</script>
