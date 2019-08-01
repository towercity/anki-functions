import React from 'react';

const Textbox = ({ text, handleChange }) => {
    return (
        <textarea onChange={handleChange} value={text}></textarea>
    )
}

export default Textbox;