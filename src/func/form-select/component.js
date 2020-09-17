const component = {
  title_zh: '下拉选择',
  title_en: 'select',
  icon: 'ios-arrow-dropdown',
  type: 'select',
  placeholder: '',
  addLink: [],
  clearable: true,
  removeLink: [],
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
  customAjaxParams: {},
  ajaxList: [],
  selectListUrl: '',
  controlOthersUpdateTargetKeys: [],
  controlOthersHideTargetKeys: {},
  // defaultSelectIndex: 0,
  rules: {
    required: false,
    pattern: '',
    message: '该项格式不正确'
  },
  changeList: [
    'labelTextAlign',
    'labelWidth',

    'placeholder',
    'widthRatio',
    'disabled',
    'clearable',
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
