const component = {
  title_zh: '开关',
  title_en: 'switch',
  icon: 'ios-switch-outline',
  type: 'switch',
  dataType: 'Boolean',
  rules: {
    required: false,
    pattern: '',
    message: '该项格式不正确'
  },
  changeList: [
    'labelTextAlign',
    'labelWidth',

    'disabled',
    'props',
    'rules',
  ]
}

export default component
