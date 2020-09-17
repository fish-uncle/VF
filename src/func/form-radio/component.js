const component = {
  title_zh: '单项选择',
  title_en: 'radio',
  icon: 'ios-radio-button-on',
  type: 'radio',
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
  // defaultSelectIndex: 0,
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
    // 'defaultSelectIndex',
    'selectList',
    'selectListUrl',
    'controlOthersUpdate',
    'controlOthersHide',
    'props',
    'rules',
  ]
}

export default component
