## 数据校验
主要使用的依赖包[async-validator](https://github.com/yiminghe/async-validator)

在校验属性里与`async-validator`同样的配置即可

### 示例
输入内容一定要等于abc
```
{'pattern': '','validator':'return value==="abc"','message': '该项格式不正确'}
```

可以看到function是以字符串的形式传入的

然后内部会通过new function的形式传入`rule`，`value`参数

### 手写
如果你不在平台上开发，而是手写json

可以这么写
```json5
{
  id: 'test_id',
  key: 'test_key',
  // ...
  required: false,
  rules: '{\'pattern\': \'\',\'validator\':\'return value==="abc"\',\'message\': \'该项格式不正确\'}'
}
```