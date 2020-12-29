import React, { useRef, useEffect } from 'react';
import useDraggable from "../useDraggable";
import { SETTINGS_TEXT, SETTINGS_LOGO } from '../constants';
import Logo from './Logo';
import Text from './Text';

const RenderingPanel = ({
    position,
    type,
    text,
    formatText,
    textColor,
    textFont,
    logoOpacity,
    setContainerSize }) => {

    const cardRef = useRef(null);
    const panelRef = useRef(null);


    useEffect(() => {
        if (panelRef.current) {
            const rect = panelRef.current.getBoundingClientRect()
            const sizes = { width: rect.width, height: rect.height }
            setContainerSize(sizes)
        }
    }, [panelRef])
    useDraggable(cardRef, panelRef.current);

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
        <div className="renderingPanel" ref={panelRef}>
            <div style={{ top: position.top, left: position.left }} className="textOrLogo" ref={cardRef}>
                {renderingType}
            </div>
        </div>
    )
};

export default RenderingPanel;
