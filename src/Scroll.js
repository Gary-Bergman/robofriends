import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '3px solid #0DCAC4', height: '800px' }}>
            {props.children}
        </div>
    )
}

export default Scroll;