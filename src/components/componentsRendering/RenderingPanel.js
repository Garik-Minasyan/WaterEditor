import React, { useRef, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux'
import useDraggable from "../useDraggable";
import { SETTINGS_TEXT, SETTINGS_LOGO } from '../constants';
import Logo from './Logo';
import Text from './Text';



const RenderingPanel = () => {

    const panelType = useSelector(state => state.waterMarkerReducer.panelType);
    const cardRef = useRef(null);
    const panelRef = useRef(null);

    useLayoutEffect(() => {
        if (panelRef.current) {
            const rect = panelRef.current.getBoundingClientRect()
            const sizes = { width: rect.width, height: rect.height }
            // setContainerSize(sizes)
        }
    }, [panelRef])

    // useDraggable(cardRef, panelRef, position);

    let renderingType;

    switch (panelType) {
        case SETTINGS_TEXT:
            renderingType = <Text />
            break;
        case SETTINGS_LOGO:
            renderingType = <Logo />
            break
        default:
            break;
    }
    return (
        <div className="renderingPanel" ref={panelRef}>
            <div className="textOrLogo" ref={cardRef}>
                {renderingType}
            </div>
        </div>
    )
};

export default RenderingPanel;
