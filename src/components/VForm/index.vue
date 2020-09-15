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
      verifyRequired () {
        const data = this.data;
        let error = false;
        let errorObj = {};
        let componentList = [];
        for (let i = 0; i <= this.currentList.length - 1; i++) {
          componentList.push (...this.currentList[i])
        }
        for (let i = 0; i <= componentList.length - 1; i++) {
          const item = componentList[i];
          if (item.componentType === 'base' && this.child[item.id].visibleStatus ()) {
            if (item.required) {
              const d = data[item.key]
              if (item.dataType === 'TimeRange') {
                const key = item.key.split (';');
                key.forEach (child => {
                  if ((typeof data[child] === 'string' && data[child] === '') || typeof data[child] === 'undefined' || data[child] === null) {
                    error = true;
                    errorObj[item.id] = 'required'
                  }
                })
                if (error) {
                  break;
                }
              } else if (item.dataType === 'Array') {
                if (d.length <= 0) {
                  error = true
                  errorObj[item.id] = 'required'
                  break;
                }
              } else {
                if ((typeof d === 'string' && d === '') || typeof d === 'undefined' || d === null) {
                  error = true;
                  errorObj[item.id] = 'required'
                  break;
                }
              }
            }
            if (item.reg && item.regular) {
              const d = data[item.key]
              if (!new RegExp (item.regular).test (d)) {
                error = true;
                errorObj[item.id] = 'reg'
              }
            }
          }
        }
        if (error) {
          for (let key in errorObj) {
            this.child[key].errorShow (errorObj[key]);
          }
        }
        return error
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
            if (item.key === key) {
              item.ajaxList = value
            }
          })
        })
        this.currentList = currentList
      },
    }
  }
</script>
