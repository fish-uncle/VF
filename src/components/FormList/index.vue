<template>
  <div class="vf-form-list fn-flex">
    <slot/>
    <modelData :data="data"/>
  </div>
</template>
<script>
  import { mapState } from 'vuex';
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
      ...mapState ([ 'center' ]),
      viewScale () {
        return this.center.viewScale.split (':')
      }
    },
    beforeDestroy () {
      this.$agent.$off ('formDataRemove', this.handleChangeKeyForRemove)
      this.$agent.$off ('formDataAdd', this.handleChangeKeyForDrag)
      this.$agent.$off ('formDataChange', this.handleChangeKeyForChangeList)
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
          this.child[item].update ()
        })
      },
      childMounted (obj) {
        this.child[obj.id] = obj
      },
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
      handleChangeKeyForChangeList ({ oldKey, newKey }) {
        const data = this.data[oldKey]
        this.$delete (this.data, oldKey)
        this.$set (this.data, newKey, data)
      },
      handleChangeKeyForRemove ({ key }) {
        const data = this.data
        if (key.indexOf (';') !== '-1') {
          const _key = key.split (';')
          _key.forEach (item => {
            this.$delete (data, item)
          })
        }
        this.$delete (data, key)
      },
      changeData ({ key, value }) {
        this.data[key] = value
      },
      getData () {
        return this.data
      },
    },
    mounted () {
      this.$agent.$on ('formDataRemove', this.handleChangeKeyForRemove)
      this.$agent.$on ('formDataAdd', this.handleChangeKeyForDrag)
      this.$agent.$on ('formDataChange', this.handleChangeKeyForChangeList)
    }
  }
</script>
<style lang="less">
  .vf-form-list {
    width: 100%;
  }
</style>
