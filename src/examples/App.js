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
        action={sql => {
            console.log('excute sql:', sql);
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
