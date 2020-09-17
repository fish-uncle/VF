const component = {
  title_zh: '滑块',
  title_en: 'slider',
  icon: 'ios-options-outline',
  type: 'slider',
  dataType: 'Number',
  showInput: false,
  step: '10',
  max: '100',
  min: '0',
  rules: {
    required: false,
    pattern: '',
    message: '该项格式不正确'
  },
  changeList: [
    'labelTextAlign',
    'labelWidth',

    'widthRatio',
    'disabled',
    'showInput',
    'step',
    'max',
    'min',
    'props',
    'rules',
  ]
}

export default component
