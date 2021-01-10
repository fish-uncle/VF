const component = {
  title_zh: '单项选择',
  title_en: 'radio',
  icon: 'ios-radio-button-on',
  selectList: [
    {
      value: '11',
      label: '1'
    },
    {
      value: '22',
      label: '2'
    }
  ],
  customAjaxParams: {},
  ajaxList: [],
  selectListUrl: '',
  // defaultSelectIndex: 0,
  controlOthersUpdateTargetKeys: [],
  controlOthersHideTargetKeys: {},
  changeList: [
    // 'defaultSelectIndex',
    'selectList',
    'selectListUrl',
    'controlOthersUpdate',
    'controlOthersHide',
  ]
}

export default component
