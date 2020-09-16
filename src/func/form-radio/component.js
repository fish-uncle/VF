const component = {
  title_zh: '单项选择',
  title_en: 'radio',
  icon: 'ios-radio-button-on',
  componentType: 'base',
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
