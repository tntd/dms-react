import React, { useState } from 'react';
import { Empty } from 'antd';

import './index.less';

export default props => {
    return (
        <div>
            <Empty
                imageStyle={{
                    height: 100,
                    margin: '20px 0'
                }}
                style={{ position: 'relative', top: '50px' }}
                description={
                    <span>
                        当前目录暂无开发接手
					</span>
                }
            />
        </div>
    );
}
