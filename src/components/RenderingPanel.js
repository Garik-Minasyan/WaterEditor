import React, { useRef } from 'react';
import useDraggable from "./useDraggable";
import { SETTINGS_TEXT, SETTINGS_LOGO } from '../App';
import Logo from './Logo';
import Text from './Text';

const RenderingPanel = ({
    type,
    text,
    formatText,
    textColor,
    textFont,
    logoOpacity,
    children }) => {
    const cardRef = useRef(null);
    useDraggable(cardRef);

    let renderingType;

    switch (type) {
        case SETTINGS_TEXT:
            renderingType = <Text
                text={text}
                formatText={formatText}
                textColor={textColor}
                textFont={textFont}
            />
            break;
        case SETTINGS_LOGO:
            renderingType = <Logo
                logoOpacity={logoOpacity}
            />
        default:
            break;
    }
    return (
        <div className="renderingPanel">
            <div className="textOrLogo" ref={cardRef}>
                {children}
                {renderingType}
                <div className="resizer"></div>
            </div>

        </div>
    )
};

export default RenderingPanel;