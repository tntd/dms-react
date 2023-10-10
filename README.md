# 小而美的 DMS Web 管理系统
TNT 倾情推出极简DMS，复杂系统只需要一个组件搞定，而且暴露出来的api也非常简单，必须要的参数只有action，action返回的是一个Promise对象；

## 系统截图
基本信息
<div>
    <img width="100%" src="https://raw.githubusercontent.com/tntd/npm-resource/main/dms-react/1.jpg">
</div>
<div>
    <img width="100%" src="https://raw.githubusercontent.com/tntd/npm-resource/main/dms-react/2.jpg">
</div>

## 安装
```bash
npm i @tntd/dms-react --save
```

## 页面引用
```jsx
import React from 'react';
import Dms, { mockJsonBySql } from "@tntd/dms-react";
import 'antd/dist/antd.css';    // dms 依赖 antd，正常使用不用引入

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
        title="TNT DMS"
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

## 前后端约定推荐
```js
url: /dms/execute
method: post
params: str
```

传入的参数使用```AES```进行加密
```js
import CryptoJS from "crypto-js";

// Encrypt加密
const ciphertext = CryptoJS.AES.encrypt(value, "OrF7l2hF81yhVEtxfYKUYxsPsxfM4fZm");
```

完整示例
```js
import DMS from '@tntd/dms-react';
import CryptoJS from 'crypto-js';
import { message } from 'antd';
import service from './service';    // 改成你自己使用的service
import 'antd/es/tree/style/index.less';
import 'antd/es/tabs/style/index.less';

export default () => (
	<DMS
		isDevelopmentEnv={true}
		title="司南DMS"
		action={(sql, { sqls } = {}) => {
			sqls = sqls || [sql];

			return service.executeSql({
				values: sqls.filter(sql => sql && sql.trim()).map(
					sql => CryptoJS.AES.encrypt(encodeURIComponent(sql), 'OrF7l2hF81yhVEtxfYKUYxsPsxfM4fZm').toString()
				)
			}).catch(err => message.error(err.message || err.toString()));
		}}
		renderHome={<div>自定义 home</div>}
	/>
);
```