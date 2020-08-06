const component = {
  title: '多项选择',
  version: '1.0.0',
  business: false,
  type: 'multiple',
  h: 2,
  disabled: false,
  labelWidth: 100,
  labelTextAlign: 'right',
  widthRatio: 100,
  required: false,
  selectListUrl: '',
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
  controlOthersUpdateTargetKeys: [],
  controlOthersHideTargetKeys: {},
  changeList: [
    'title',
    'labelTextAlign',
    'labelWidth',

    'widthRatio',
    'disabled',
    'required',
    'selectList',
    'selectListUrl',
    'controlOthersUpdate',
    'controlOthersHide',
  ]
}

export default component
