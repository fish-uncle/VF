const component = {
  title_zh: '日期选择',
  title_en: 'datePicker',
  icon: 'ios-calendar-outline',
  type: 'datePicker',
  placeholder: '',
  timeFormat:"yyyy-MM-dd",
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
