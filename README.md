# 小而美的 DMS Web 管理系统
同盾UED团队倾情推出极简DMS，复杂系统只需要一个组件搞定，而且暴露出来的api也非常简单，必须要的参数只有action，action返回的是一个Promise对象；

## 系统截图
基本信息
<div>
    <a href="https://tnt.tongdun.me">
        <img width="100%" src="https://raw.githubusercontent.com/tntd/npm-resource/main/dms-react/1.jpg">
    </a>
</div>
SQL窗口
<div>
    <a href="https://tnt.tongdun.me">
        <img width="100%" src="https://raw.githubusercontent.com/tntd/npm-resource/main/dms-react/2.jpg">
    </a>
</div>


## 安装
```bash
npm i @tntd/dms-react --save
```

## 页面引用
```jsx
import React from 'react';
import Dms from '../lib';
import mockJsonBySql from './mock';
import 'antd/dist/antd.css';

const Home = props => (
    <div>
        <h4>自定义Home</h4>
        <pre style={{ backgroundColor: '#fff', padding: '20px' }}>
            {JSON.stringify(props, null, 4)}
        </pre>
    </div>
);

const App = () => (
    <Dms
        isDevelopmentEnv={true}
        title="星辰DMS"
        action={(sql, { sqls } = {}) => {
            console.log('excute sql:', sql, sqls);
            return new Promise(resolve => {
                resolve(
                    mockJsonBySql(sql)
                );
            });
        }}
        renderHome={Home}
    />
);

export default App;
```
