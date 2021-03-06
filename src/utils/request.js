import { Message } from 'view-design'

import axios from 'axios'

axios.defaults.baseURL = '/'
axios.defaults.timeout = 10000

axios.interceptors.request.use(function (config) {
    return config
}, function (error) {
    return Promise.reject(error)
})

// {
//   data: '数据',
//   resultCode: '0000',
//   resultMsg：'错误信息'
// }
// 可自行判断 逻辑报错请求
const locale = localStorage.getItem('locale')
let errMessage = '网络异常，请重试'
if (locale === 'en') {
    errMessage = 'Network exception, please try again'
}
axios.interceptors.response.use(response => {
    const { data } = response
    if (data) {
        if (data.resultCode === '0000') {
            return data.data
        } else {
            Message.error(data.returnMessage || errMessage)
            // eslint-disable-next-line prefer-promise-reject-errors
            return Promise.reject(false)
        }
    } else {
        Message.error(errMessage)
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject(false)
    }
}, function (e) {
    Message.error(errMessage)
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject(false)
})

const request = window.VF.request ? window.VF.request : axios

export default request
