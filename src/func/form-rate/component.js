const component = {
  title_zh: '星级评分',
  title_en: 'rate',
  icon: 'ios-star-outline',
  type: 'rate',
  dataType: 'Number',
  placeholder: '',
  clearable: true,
  showText: false,
  character: '',
  rules: {
    required: false,
    pattern: '',
    message: '该项格式不正确'
  },
  changeList: [
    'labelTextAlign',
    'labelWidth',

    'placeholder',
    'widthRatio',
    'disabled',
    'clearable',
    'character',
    'showText',
    'props',
  ]
}

export default component
