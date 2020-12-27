import React from 'react';


const Text = ({ text, formatText, textColor, textFont }) => {
    return (
        <div className="text" >

            <p style={{
                fontSize: formatText,
                color: textColor,
                fontFamily: textFont
            }}>{text}</p>
        </div>
    );
};

export default Text;

