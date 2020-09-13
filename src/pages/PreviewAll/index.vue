<template>
  <div>
    <v-form ref="form" :view-scale="viewScale" :list="list"/>
    <div class="text-center">
      <Button type="primary" @click="handleSubmit">{{$t('model_preview_submit')}}</Button>
    </div>
  </div>
</template>
<script>
  import { mapState } from "vuex";
  import Select from '../../func/form-select/component'

  export default {
    data () {
      return {
        list: [ [], [] ],
        viewScale: '24:0'
      }
    },
    computed: mapState ([ "component" ]),
    methods: {
      handleSubmit () {
        if (!this.$refs.form.verifyRequired.bind (this) ()) {
          console.log (this.$refs.form.getData ());
        }
      },
      mockList () {
        let result = [];
        const component = this.component.list;
        const i = Math.floor (Math.random () * (component.length - 1));
        const j = Math.floor (Math.random () * (component.length - 1));
        component.forEach ((dragItem, index) => {
          const key_i = Math.random (5).toString (32).replace ('0.', '')
          const key_l = Math.random (5).toString (32).replace ('0.', '')
          let key = `${dragItem.type}_${key_i}`
          if (dragItem.dataType === 'TimeRange') {
            key += `;${key_l}`
          }
          i === index ? dragItem.required = true : void 0;
          j === index ? dragItem.required = true : void 0;
          if (dragItem.type === 'image') {
            dragItem.action = 'https://cdn.shenzhepei.com/VF/upload.json'
            dragItem.defaultList = [
              {
                'name': '1.jpg',
                'url': 'https://cdn.shenzhepei.com/VF/images/1.jpg'
              },
            ]
          }
          if (dragItem.type === 'input') {
            key = 'test_hide_key'
          }
          if (dragItem.type === 'radio') {
            dragItem.title_zh = '单项（点我）'
            dragItem.controlOthersHideTargetKeys = {
              '1': 'test_hide_key'
            }
          }
          if (dragItem.type === 'select') {
            dragItem.title_zh = '下拉（看我）'
            dragItem.selectListUrl = 'https://cdn.shenzhepei.com/VF/select.json?a=1'
          }
          if (dragItem.type === 'table') {
            dragItem.columns = 'demo-zh'
            dragItem.tableAjaxUrl = 'https://cdn.shenzhepei.com/VF/table.json'
          }
          result.push ({
            dragItem: {
              ...dragItem,
              key, id: key, width: 50
            }
          })
        });
        result.push (
          {
            dragItem: {
              ...Select,
              title_zh: '下拉（看我）',
              key: 'select2', id: 'select2',
              labelWidth: 120,
              widthRatio: 100,
              labelTextAlign: 'right',
              width: 50,
              controlOthersUpdateTargetKeys: [ 'select3' ]
            }
          },
          {
            dragItem: {
              ...Select,
              title_zh: '下拉（看我）',
              key: 'select3', id: 'select3',
              labelWidth: 120,
              widthRatio: 100,
              labelTextAlign: 'right',
              selectListUrl: 'https://cdn.shenzhepei.com/VF/select.json?a=3',
              width: 50,
              controlOthersUpdateTargetKeys: [ 'select4' ]
            }
          },
          {
            dragItem: {
              ...Select,
              title_zh: '下拉（看我）',
              key: 'select4', id: 'select4',
              labelWidth: 120,
              widthRatio: 100,
              labelTextAlign: 'right',
              selectListUrl: 'https://cdn.shenzhepei.com/VF/select.json?a=4',
              width: 50,
              controlOthersUpdateTargetKeys: [ 'test_hide_key' ]
            }
          }
        )
        this.list = [ result, [] ]
      }
    },
    mounted () {
      this.mockList ();
    }
  }
</script>