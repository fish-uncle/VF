# Fish Uncle

![version](https://img.shields.io/badge/version-v1.0.0-brightgreen.svg?style=flat-square) [![MIT](https://img.shields.io/dub/l/vibe-d.svg?style=flat-square)](http://opensource.org/licenses/MIT) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

---

## 私库配置
```
npm config set @fish:registry http://172.81.212.149:4873
```

## 快速上手
   
下载
```
npm i @fish/cli --save-dev
```
开发环境服务
```
fish start vue 
fish start react 
```
打包
```
fish build prod vue // 生产环境
fish build test vue // 测试环境
fish build test react // 测试环境
fish build test react // 测试环境
```
上传
```
fish upload // 上传到 腾讯cos云存储
```