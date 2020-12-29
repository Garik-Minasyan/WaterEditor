import React from 'react';

const TextSelectBox = ({ changeTextFont, textFont }) => {
    return (
        <div className="selectOptionBox">
            <p>Font</p>
            <select onChange={changeTextFont} value={textFont}>
                <option>Montserrat</option>
                <option>fantasy</option>
                <option>sans-serif</option>
            </select>
        </div>
    );
};

export default TextSelectBox;