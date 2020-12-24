import React from 'react';
import Text from '../components/Text';

const RenderingEditor = ({ isOpen }) => {
    console.log(isOpen)
    return (
        <div className="renderingEditor">
            {isOpen && <Text />}

        </div>
    );
};

export default RenderingEditor;