## 动态数据
该功能针对，多项选择、下拉选择、单项选择组件。

### 第一步
在功能区添加该种类型的组件（多项选择、下拉选择、单项选择）

### 第二步
选择字段属性

### 第三步
查看到`选择项配置`

在`选择项数据地址`中配上你的ajax地址

附上一个测试ajax地址

https://cdn.shenzhepei.com/VF/test.json

### 第四步
如果你想要修改你的数据格式

store/center.js

```javascript
// 初始化 列表
changeSelectList: function (state, newState) {
  const list = state.list;
  list.forEach(item => {
    if (item.dragItem.key === newState.key) {
      item.dragItem.ajaxList = newState.value;
    }
  })
  state.list = list;
},
```
这里的newState.value就是传入值，进行相应的格式化就行了

### 第五步
如果你想要修改你的ajax请求整体返回格式

utils/request.js

```javascript
// {
//   data: '数据',
//   resultCode: '0000',
//   resultMsg：'错误信息'
// }
// 可自行判断 逻辑报错请求
axios.interceptors.response.use(response => {
  const {data} = response;
  const locale = localStorage.getItem('locale');
  let errMessage = '网络异常，请重试';
  if (locale === 'en') {
    errMessage = 'Network exception, please try again';
  }
  if (data) {
    if (data.resultCode === '0000') {
      return data.data
    } else {
      Message.error(data.returnMessage || errMessage)
      return Promise.reject(false);
    }
  } else {
    Message.error(errMessage)
    return Promise.reject(false);
  }
}, function (e) {
  Message.error(errMessage);
  return Promise.reject(false);
});
```
