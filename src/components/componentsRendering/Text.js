import React from 'react';
import { useSelector } from 'react-redux';

const Text = () => {
    const { value, fontPath, fontSize, color } = useSelector(state => state.data);

    return (
        <p style={{
            fontSize: fontSize,
            color: color,
            fontFamily: fontPath,
        }}>{value}</p>
    );
};

export default Text;
