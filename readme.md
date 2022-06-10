# xhr-mock-ext

是一个谷歌拓展项目  
通过修改 XHR 构造器来拦截 ajax 请求  
background 拓展页用来维护一下请求配置

## 如何使用？
1. clone这个项目  
2. 然后在根目录 ```npm run build```  
3. 之后使用 chrome 浏览器->更多工具->拓展程序 中 点击 ‘加载已解压的拓展程序’ 
4. 之后刷新你的应用 tab，在浏览器地址栏后面会看到 page_action 中的《M》图标
5. 点击《M》图标 进入 background 配置页面 添加一些请求配置

### 添加请求配置(临时)
点击左上角菜单 -> 分类管理 中 创建类型为请求的节点  
- 匹配URL
是一个正则字符串 匹配 xhr.open 的 url 
- 启用
启用 
- res json 
直接用 res json 响应匹配到的请求 
- res 中间件 
可以写一个函数，拟写的函数会用 new Function() 被创建 
参数为 config 
- res 类型 
还没写
- 响应拦截模式 
选择响应为 json / script / type 

### 更新配置 
刷新应用页面来触发 inject script 和 backgroung 的数据同步 

还在开发中，希望大家多多提意见