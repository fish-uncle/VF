const component = {
  title_zh: '图片',
  title_en: 'image',
  icon: 'ios-images-outline',
  type: 'image',
  dataType: 'Array',
  action: '',
  maxSize: 2048,
  fileFormat: 'jpg,jpeg,png',
  fileAccept: 'image/*',
  rules: {
    required: false,
    pattern: '',
    message: '该项格式不正确'
  },
  changeList: [
    'labelTextAlign',
    'labelWidth',
    'widthRatio',
    'maxSize',
    'action',
    'fileFormat',
    'fileAccept',

    'disabled',
    'props',
    'rules',

  ]
}

export default component
