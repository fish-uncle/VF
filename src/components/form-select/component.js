const component = {
  title: '下拉选择',
  version: '1.0.0',
  business: false,
  type: 'select',
  h: 2,
  disabled: false,
  labelWidth: 100,
  labelTextAlign: 'right',
  widthRatio: 100,
  required: false,
  addLink: [],
  removeLink: [],
  selectList: [
    {
      value: 1,
      title: '选项1'
    },
    {
      value: 2,
      title: '选项2'
    }
  ],
  customAjaxParams: {},
  ajaxList: [],
  selectListUrl: '',
  controlOthersUpdateTargetKeys: [],
  controlOthersHideTargetKeys: {},
  // defaultSelectIndex: 0,
  changeList: [
    'title',
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
