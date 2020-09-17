const component = {
  title_zh: '多项选择',
  title_en: 'multiple',
  icon: 'ios-checkbox-outline',
  type: 'multiple',
  dataType: 'Array',
  selectListUrl: '',
  selectList: [
    {
      value: 1,
      label: '1'
    },
    {
      value: 2,
      label: '2'
    }
  ],
  ajaxList: [],
  controlOthersUpdateTargetKeys: [],
  controlOthersHideTargetKeys: {},
  rules: {
    required: false,
    pattern: '',
    message: '该项格式不正确'
  },
  changeList: [
    'labelTextAlign',
    'labelWidth',

    'widthRatio',
    'disabled',
    'selectList',
    'selectListUrl',
    'controlOthersUpdate',
    'controlOthersHide',
    'props',
    'rules',
  ]
}

export default component
