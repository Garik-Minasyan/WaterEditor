import React from 'react';

const TextSizeAndColor = ({ textColor, textSize, changeTextColor, changeTextSize }) => {
    return (
        <div className="sizeColor">
            <p>Size</p>
            <input
                vaalue={textSize}
                type="range"
                onChange={changeTextSize}
                min={10}
                max={90}
            />
            <input
                value={textColor}
                type="color"
                className="colorMania"
                onChange={changeTextColor}
            />
        </div>
    );
};

export default TextSizeAndColor