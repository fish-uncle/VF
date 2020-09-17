<template>
  <div>
    <v-form ref="form" :language="language" :view-scale="viewScale" :list="list" :labelWidth="labelWidth"
            :labelTextAlign="labelTextAlign"/>
    <div class="text-center">
      <Button type="primary" @click="handleSubmit">{{$t('model_preview_submit')}}</Button>
      <Button type="primary" @click="handleReset">{{$t('model_preview_reset')}}</Button>
      <Button type="primary" @click="handleEdit">{{$t('model_preview_edit')}}</Button>
      <Button type="primary" @click="handleRead">{{$t('model_preview_read')}}</Button>
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
        viewScale: '24:0',
        labelWidth: 120,
        labelTextAlign: 'right',
        language: 'zh'
      }
    },
    computed: mapState ([ "component" ]),
    methods: {
      handleReset(){
        this.$refs.form.reset ()
      },
      handleEdit () {
        this.$refs.form.statusEdit ()
      },
      handleRead () {
        this.$refs.form.statusRead ()
      },
      handleSubmit () {
        if (!this.$refs.form.validate.bind (this) ()) {
          console.log (this.$refs.form.getData ());
        }
      },
      mockList () {
        let result = [];
        const component = JSON.parse (JSON.stringify (this.component.list));
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
            ...dragItem,
            key, id: key, width: 12
          })
        });
        result.push (
          {
            ...Select,
            title_zh: '下拉（看我）',
            key: 'select2', id: 'select2',
            widthRatio: 100,
            width: 12,
            controlOthersUpdateTargetKeys: [ 'select3' ]
          },
          {
            ...Select,
            title_zh: '下拉（看我）',
            key: 'select3', id: 'select3',
            widthRatio: 100,
            selectListUrl: 'https://cdn.shenzhepei.com/VF/select.json?a=3',
            width: 12,
            controlOthersUpdateTargetKeys: [ 'select4' ]
          },
          {
            ...Select,
            title_zh: '下拉（看我）',
            key: 'select4', id: 'select4',
            widthRatio: 100,
            selectListUrl: 'https://cdn.shenzhepei.com/VF/select.json?a=4',
            width: 12,
            controlOthersUpdateTargetKeys: [ 'test_hide_key' ]
          }
        )
        result.forEach (item => {
          delete item.icon
          delete item.labelWidth
          delete item.labelTextAlign
          delete item.changeList
          delete item.version
          delete item.componentType
          item.title = item.title_zh
          delete item.title_zh
          delete item.title_en
        })
        this.list = [ result, [] ]
      }
    },
    mounted () {
      this.mockList ();
    }
  }
</script>