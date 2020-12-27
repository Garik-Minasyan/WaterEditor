import React, { useRef } from 'react';
import useDraggable from "./useDraggable";

const Text = ({ text, formatText, textColor, textFont, children }) => {
    const cardRef = useRef(null);
    useDraggable(cardRef);
    return (
        <div className="text" ref={cardRef}>
            {children}
            <p style={{
                fontSize: formatText,
                color: textColor,
                fontFamily: textFont
            }}>{text}</p>
        </div>
    );
};

export default Text;

