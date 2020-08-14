const component = {
  title_zh: '单项选择',
  title_en: 'radio',
  icon: 'ios-radio-button-on',
  className: '',
  version: '1.0.0',
  componentType: 'base',
  componentVisibled: true,
  type: 'radio',
  h: 2,
  disabled: false,
  labelWidth: 100,
  labelTextAlign: 'right',
  widthRatio: 100,
  required: false,
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
  // defaultSelectIndex: 0,
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
    // 'defaultSelectIndex',
    'selectList',
    'selectListUrl',
    'controlOthersUpdate',
    'controlOthersHide',
  ]
}

export default component
