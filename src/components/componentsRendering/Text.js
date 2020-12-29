import React from 'react';


const Text = ({ text, formatText, textColor, textFont }) => {
    return (
        <p style={{
            fontSize: formatText,
            color: textColor,
            fontFamily: textFont
        }}>{text}</p>
    );
};

export default Text;

