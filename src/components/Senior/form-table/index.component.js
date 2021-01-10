const component = {
  title_zh: '常规表格',
  title_en: 'table',
  icon: 'ios-grid-outline',
  dataType: 'Table',
  labelWidth: 0,
  columns: [
    {
      key: 'test',
      title: 'test',
      type:'input'
    }
  ],
  tableAjaxUrl: '',
  changeList: [
    'widthRatio',
    'labelWidth',

    'columns',
    'tableAjaxUrl',
    'props',
  ]
}

export default component
