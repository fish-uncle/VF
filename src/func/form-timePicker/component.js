const component = {
  title_zh: '时间选择',
  title_en: 'timePicker',
  icon: 'ios-time-outline',
  type: 'timePicker',
  placeholder: '',
  timeFormat:"HH’mm’ss",
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
