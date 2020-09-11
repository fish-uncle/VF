<template>
  <div class="vf-form-list fn-flex">
    <slot/>
    <modelData :data="data"/>
  </div>
</template>
<script>
  import { mapState } from 'vuex';
  import { findComponentsDownward } from '../../utils'
  import ModelData from "../ModelData";

  export default {
    data () {
      return {
        data: {},
        child: {}
      }
    },
    components: {
      ModelData,
    },
    name: 'FormList',
    computed: {
      ...mapState ([ "center" ]),
      viewScale () {
        return this.center.viewScale.split (':')
      }
    },
    beforeDestroy () {
      this.$agent.$off ('formData', this.dataAdd)
      this.$agent.$off ('formData', this.dataRemove)
    },
    methods: {
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
      childMounted (obj) {
        this.child[obj.id] = obj
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
          default:
            data[dragItem.key] = ''
        }
        this.data = data
      },
      dataRemove ({ key }) {
        const data = this.data
        if (key.indexOf (';') !== '-1') {
          const _key = key.split (';')
          _key.forEach (item => {
            delete data[item]
          })
        }
        delete data[key]
        this.data = data
      },
      changeData ({ key, value }) {
        this.data[key] = value
      }
    },
    mounted () {
      this.$agent.$on ('formDataAdd', this.dataAdd)
      this.$agent.$on ('formDataRemove', this.dataRemove)
    }
  }
</script>
<style lang="less">
  .vf-form-list {
    width: 100%;
  }
</style>
