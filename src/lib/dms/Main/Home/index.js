
import React from 'react';

export default props => (
    <pre style={{ backgroundColor: '#fff', padding: '20px' }}>
        {JSON.stringify(props, null, 4)}
    </pre>
);
