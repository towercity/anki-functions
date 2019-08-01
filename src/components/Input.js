import React from 'react';

const Input = ({text, onChange }) => {
    return (
        <input type="text" value={text} onChange={onChange} />
    )
}

export default Input;