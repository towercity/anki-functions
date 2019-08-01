import React from 'react';

const Textbox = ({ text, handleChange }) => {
    if (handleChange) {
        return (
            <textarea defaultValue={text} onChange={handleChange} />
        )
    } else {
        return (
            <textarea defaultValue={text} readOnly />
        )
    }
}

export default Textbox;