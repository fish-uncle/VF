const component = {
  title_zh: '日期范围',
  title_en: 'dateRange',
  icon: 'ios-calendar-outline',
  dataType: 'MultiData',
  type: 'dateRange',
  placeholder: '',
  timeFormat: "yyyy-MM-dd",
  clearable: true,
  rules: {
    required: false,
    pattern: '',
    message: '该项格式不正确'
  },
  changeList: [
    'labelTextAlign',
    'labelWidth',
    'widthRatio',

    'timeFormat',
    'placeholder',
    'disabled',
    'clearable',
    'props',
    'rules',
  ]
}

export default component
