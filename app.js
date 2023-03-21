// 添加依赖
const express = require('express');
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');

// 官方实例的翻译，有改动

// 代理中间件选项
const options = {
  target: 'https://mastodon.84274001.xyz', // 目标地址

  // 把目标主机获取到的 Host 替换成目标地址
  // 当为 true 时，目标主机获取到的 Host 端口为 3001，反之为3000
  changeOrigin: true,

  ws: true, // 是否代理 WebSockets
  pathRewrite: {
    // '^/api/old-path': '/api/new-path', // 重写路径
    // '^/api/remove/path': '/path', // 移除中间的路径
  },
  router: {
    // 当 request.headers.host == 'dev.localhost:3000' 时,
    // 把目标地址 'http://www.example.org' 转换成 'http://localhost:8000'
    'owo.ee': 'owo.ee',
  },
};

// 创建代理 (without context)
const exampleProxy = createProxyMiddleware(options);

// 挂载 `exampleProxy` 到服务器
app.use('/', exampleProxy);

// ---------------
// 符合自己需求的写法
const optionProject = {
  target: 'https://mastodon.84274001.xyz',
  changeOrigin: false,
  ws: true,
  pathRewrite: {
    // '^/project-name': '/',
  },
};
const myProxy = createProxyMiddleware(optionProject);
// app.use('/project-name', myProxy);
app.listen(3000);