import React from 'react';
import Text from '../components/Text';

const RenderingEditor = ({ isOpen, text, formatText, textColor, textFont }) => {
    return (
        <div className="renderingEditor">
            {isOpen && <Text
                text={text}
                formatText={formatText}
                textColor={textColor}
                textFont={textFont} />}
        </div>
    );
};

export default RenderingEditor;