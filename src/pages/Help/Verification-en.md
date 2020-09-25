## Verification-
Main dependent packages used[async-validator](https://github.com/yiminghe/async-validator)

In the verification attribute, you can configure it the same as the `async validator`

### Example
The input must be equal to ABC
```
{'pattern': '','validator':'return value==="abc"','message': '该项格式不正确'}
```

You can see that the function is passed in as a string

Then the `rule` and `value` parameters will be passed in the form of new function internally

### Handwriting
If you don't develop on a platform, you write JSON

It can be written like this
```json5
{
  id: 'test_id',
  key: 'test_key',
  // ...
  required: false,
  rules: '{\'pattern\': \'\',\'validator\':\'return value==="abc"\',\'message\': \'该项格式不正确\'}'
}
```