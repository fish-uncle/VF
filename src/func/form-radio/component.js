const component = {
  title_zh: '单项选择',
  title_en: 'radio',
  icon: 'ios-radio-button-on',
  className: '',
  version: '1.0.0',
  componentType: 'base',
  type: 'radio',
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
    'labelTextAlign',
    'labelWidth',

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
