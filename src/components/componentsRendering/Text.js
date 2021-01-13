import React from 'react';
import { useSelector } from 'react-redux';

const Text = () => {
    const value = useSelector(state => state.waterMarkerReducer.value);
    const textSize = useSelector(state => parseInt(state.waterMarkerReducer.textSize));
    const color = useSelector(state => state.waterMarkerReducer.color);
    const fontPath = useSelector(state => state.waterMarkerReducer.fontPath)
    return (
        <p style={{
            fontSize: textSize,
            color: color,
            fontFamily: fontPath,
        }}>{value}</p>
    );
};

export default Text;
