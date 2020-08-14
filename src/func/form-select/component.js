const component = {
  title_zh: '下拉选择',
  title_en: 'select',
  icon: 'ios-arrow-dropdown',
  className: '',
  version: '1.0.0',
  componentType: 'base',
  componentVisibled: true,
  type: 'select',
  h: 2,
  disabled: false,
  placeholder: '',
  labelWidth: 100,
  labelTextAlign: 'right',
  widthRatio: 100,
  required: false,
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
    'title',
    'labelTextAlign',
    'labelWidth',
    'width',

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
