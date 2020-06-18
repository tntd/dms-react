import React from 'react';
import Dms from '../lib';
import mockJsonBySql from './mock';
import 'antd/dist/antd.css';

const Home = props => (
    <pre style={{ backgroundColor: '#fff', padding: '20px' }}>
        {JSON.stringify(props, null, 4)}
    </pre>
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
