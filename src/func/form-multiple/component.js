const component = {
  title_zh: '多项选择',
  title_en: 'multiple',
  icon: 'ios-checkbox-outline',
  componentType: 'base',
  type: 'multiple',
  dataType: 'Array',
  selectListUrl: '',
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
  controlOthersUpdateTargetKeys: [],
  controlOthersHideTargetKeys: {},
  changeList: [
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
