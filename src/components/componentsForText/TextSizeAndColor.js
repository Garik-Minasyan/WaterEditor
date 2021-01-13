import React from 'react';
import { useDispatch } from 'react-redux';
import { changeTextColor, changeTextSize } from '../../redux/actions';

const TextSizeAndColor = () => {
    const dispatch = useDispatch();
    return (
        <div className="sizeColor">
            <p>Size</p>
            <input
                type="range"
                onChange={(e) => dispatch(changeTextSize(e.target.value))}
                min={10}
                max={90}
            />
            <input
                type="color"
                className="colorMania"
                onChange={(e) => dispatch(changeTextColor(e.target.value))}
            />
        </div>
    );
};

export default TextSizeAndColor