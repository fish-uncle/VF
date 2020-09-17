const component = {
  title_zh: '时间范围',
  title_en: 'timeRange',
  icon: 'ios-time-outline',
  dataType: 'TimeRange',
  type: 'timeRange',
  placeholder: '',
  timeFormat: "HH’mm’ss",
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
