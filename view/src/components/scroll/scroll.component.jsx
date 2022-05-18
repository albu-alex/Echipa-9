import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '4px solid white', height: '77vh', marginTop: '2em' }}>
            {props.children}
        </div>
    );
}

export default Scroll;