import {Message} from "view-design";

import axios from 'axios';

axios.defaults.baseURL = '/';
axios.defaults.timeout = 10000;

axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

// {
//   data: '数据',
//   resultCode: '0000',
//   resultMsg：'错误信息'
// }
// 可自行判断 逻辑报错请求
axios.interceptors.response.use(response => {
  const {data} = response;
  if (data) {
    if (data.returnCode === '0000') {
      return data.result
    } else {
      Message.error(data.returnMessage || '网络异常，请重试')
      return Promise.reject(false);
    }
  } else {
    Message.error('网络异常，请重试')
    return Promise.reject(false);
  }
}, function (e) {
  Message.error('网络异常，请重试');
  return Promise.reject(false);
});

export default axios;
