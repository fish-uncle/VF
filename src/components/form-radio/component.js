const component = {
  title: '单项选择',
  version: '1.0.0',
  business: false,
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
      title: '选项1'
    },
    {
      value: 2,
      title: '选项2'
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
