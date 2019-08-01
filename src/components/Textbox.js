import React from 'react';

const Textbox = ({ text, handleChange }) => {
    return (
        <textarea onChange={handleChange} defaultValue={text}></textarea>
    )
}

export default Textbox;