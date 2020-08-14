const component = {
  title_zh: '多项选择',
  title_en: 'multiple',
  icon: 'ios-checkbox-outline',
  className: '',
  version: '1.0.0',
  componentType: 'base',
  componentVisibled: true,
  type: 'multiple',
  h: 2,
  disabled: false,
  labelWidth: 100,
  labelTextAlign: 'right',
  dataType: 'Array',
  widthRatio: 100,
  required: false,
  selectListUrl: '',
  selectList: [
    {
      value: 1,
      title: '1'
    },
    {
      value: 2,
      title: '2'
    }
  ],
  ajaxList: [],
  controlOthersUpdateTargetKeys: [],
  controlOthersHideTargetKeys: {},
  changeList: [
    'title',
    'labelTextAlign',
    'labelWidth',
    'width',

    'widthRatio',
    'disabled',
    'required',
    'selectList',
    'selectListUrl',
    'controlOthersUpdate',
    'controlOthersHide',
  ]
}

export default component
