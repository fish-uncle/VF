## Dynamic data
This function aims at multiple selection, drop-down selection and single selection components.

### Step one
Add this type of component in the ribbon (multiple selection, drop-down selection, single selection)

### Step two
Select field properties

### Step three
View the `option configuration`

Match your `Ajax address` in the option data address

Attach a test Ajax address

https://cdn.shenzhepei.com/VF/select.json

### Step four
If you want to change your data format

store/center.js

```javascript
// Initialization list
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
there newState.value Just pass in the value and format it accordingly

### Step five
If you want to modify the overall return format of your Ajax request

utils/request.js

```javascript
// {
//   data: 'data',
//   resultCode: '0000',
//   resultMsg：'error message'
// }
// It can judge logic error request by itself
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

