const component = {
  title_zh: '下拉选择',
  title_en: 'select',
  icon: 'ios-arrow-dropdown',
  componentType: 'base',
  type: 'select',
  placeholder: '',
  addLink: [],
  clearable: true,
  removeLink: [],
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
  customAjaxParams: {},
  ajaxList: [],
  selectListUrl: '',
  controlOthersUpdateTargetKeys: [],
  controlOthersHideTargetKeys: {},
  // defaultSelectIndex: 0,
  events: [
    'init',
    'show',
    'hide'
  ],
  changeList: [
    'labelTextAlign',
    'labelWidth',

    'placeholder',
    'widthRatio',
    'disabled',
    'required',
    'clearable',
    // 'defaultSelectIndex',
    'selectList',
    'selectListUrl',
    'controlOthersUpdate',
    'controlOthersHide',
  ]
}

export default component
