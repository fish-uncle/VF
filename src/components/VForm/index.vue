<template>
  <div class="vf-form">
    <slot/>
  </div>
</template>
<script>
  import Schema from 'async-validator'

  export default {
    data () {
      return {
        data: {},
        // currentList: [ [], [] ],
        child: {},
        // labelWidth: 120,
        status: 'read',
        // labelTextAlign: 'right',
      }
    },
    // computed: {
    //   scale () {
    //     return this.viewScale.split (':')
    //   }
    // },
    name: 'FormList',
    // watch: {
    //   list (val) {
    //     this.currentList = val
    //     this.init ()
    //   }
    // },
    // props: {
    //   group: {
    //     type: Array,
    //     default: []
    //   },
    //   list: {
    //     type: Array,
    //     default: [ [], [] ]
    //   },
    //   viewScale: {
    //     default: '12:12'
    //   },
    //   language: {
    //     default: 'zh'
    //   }
    // },
    methods: {
      // 编辑状态
      statusEdit () {
        this.status = 'edit'
      },
      // 只读状态
      statusRead () {
        this.status = 'read'
      },
      // 隐藏错误信息
      errorHide (id) {
        this.child[id].errorHide ()
      },
      childMounted (obj) {
        this.child[obj.id] = obj
      },
      // init () {
      //   this.data = {};
      //   let componentList = [];
      //   for (let i = 0; i <= this.currentList.length - 1; i++) {
      //     componentList.push (...this.currentList[i])
      //   }
      //   for (let i = 0; i <= componentList.length - 1; i++) {
      //     this.handleChangeKeyForDrag ({ dragItem: componentList[i] })
      //   }
      // },
      // 控制其他隐藏
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
      // 控制其他更新
      controlOthersUpdate (controlOthersUpdateTargetKeys) {
        controlOthersUpdateTargetKeys.forEach (item => {
          this.child[item].update ()
        })
      },
      // 重置
      reset () {
        this.init ()
        for (let key in this.child) {
          this.errorHide (key)
        }
      },
      // 校验 form
      // validate () {
      //   const data = this.data
      //   let error = false
      //   let componentList = [], descriptor = {};
      //   for (let i = 0; i <= this.currentList.length - 1; i++) {
      //     componentList.push (...this.currentList[i])
      //   }
      //   for (let i = 0; i <= componentList.length - 1; i++) {
      //     const item = componentList[i];
      //     if (item.dataType !== 'Null' && this.child[item.id].visibleStatus ()) {
      //       descriptor[item.key] = {
      //         ...item.rules,
      //         id: item.id,
      //         pattern: new RegExp (item.rules.pattern)
      //       }
      //     }
      //   }
      //   const validator = new Schema (descriptor);
      //   validator.validate (data, (errors) => {
      //     if (errors) {
      //       error = true
      //       errors.forEach (item => {
      //         this.child[descriptor[item.field].id].errorShow (item.message);
      //       })
      //     }
      //   });
      //   return error
      // },
      changeData ({ key, value }) {
        this.data[key] = value
      },
      // 获取 form 数据
      // getData () {
      //   const data = JSON.parse (JSON.stringify (this.data))
      //   let componentList = [];
      //   for (let i = 0; i <= this.currentList.length - 1; i++) {
      //     componentList.push (...this.currentList[i])
      //   }
      //   for (let i = 0; i <= componentList.length - 1; i++) {
      //     if (componentList[i].dataType === 'MultiData') {
      //       delete data[componentList[i].key]
      //       if (!this.child[componentList[i].id].visibleStatus ()) {
      //         delete data[componentList[i].key.split (';')[0]]
      //         delete data[componentList[i].key.split (';')[1]]
      //       }
      //     }
      //     if (!this.child[componentList[i].id].visibleStatus ()) {
      //       delete data[componentList[i].key]
      //     }
      //   }
      //   return data
      // },
      // 获取 form 数据 进行了分组
      // getDataByGroup () {
      //   const data = JSON.parse (JSON.stringify (this.data))
      //   let componentList = [];
      //   for (let i = 0; i <= this.currentList.length - 1; i++) {
      //     componentList.push (...this.currentList[i])
      //   }
      //   for (let i = 0; i <= componentList.length - 1; i++) {
      //     if (componentList[i].group) {
      //       let have = false
      //       this.group.forEach (item => {
      //         if (componentList[i].group === item.id) {
      //           have = item.key
      //         }
      //       })
      //       if (have) {
      //         if (!data[have]) {
      //           data[have] = {}
      //         }
      //         if (!this.child[componentList[i].id].visibleStatus ()) {
      //           delete data[componentList[i].key]
      //           if (componentList[i].dataType === 'MultiData') {
      //             delete data[componentList[i].key.split (';')[0]]
      //             delete data[componentList[i].key.split (';')[1]]
      //           }
      //         } else {
      //           if (componentList[i].dataType === 'MultiData') {
      //             data[have][componentList[i].key.split (';')[0]] = data[componentList[i].key.split (';')[0]]
      //             data[have][componentList[i].key.split (';')[1]] = data[componentList[i].key.split (';')[1]]
      //             delete data[componentList[i].key]
      //             delete data[componentList[i].key.split (';')[0]]
      //             delete data[componentList[i].key.split (';')[1]]
      //           } else {
      //             data[have][componentList[i].key] = data[componentList[i].key]
      //             delete data[componentList[i].key]
      //           }
      //         }
      //       }
      //     }
      //   }
      //   return data
      // },
      handleChangeKeyForDrag ({ dragItem }) {
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
          case 'Table':
            this.$set (data, dragItem.key, [])
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
      // changeSelectList ({ key, value }) {
      //   const currentList = this.currentList
      //   currentList.forEach (child => {
      //     child.forEach (item => {
      //       if (item.key === key) {
      //         item.ajaxList = value
      //       }
      //     })
      //   })
      //   this.currentList = currentList
      // },
    },
    // mounted () {
    //   this.init ()
    // }
  }
</script>
