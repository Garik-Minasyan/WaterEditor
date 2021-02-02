import React, { useRef, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux'
import useDraggable from "../useDraggable";
import { SETTINGS_TEXT, SETTINGS_LOGO } from '../constants';
import Logo from './Logo';
import Text from './Text';

const RenderingSingleMod = () => {
    const panelType = useSelector(state => state.panelType);
    const imageCropParams = useSelector(state => state.data.imageCropParams);
    // const cardRef = useRef(null);
    // const panelRef = useRef(null);

    // useLayoutEffect(() => {
    //     if (panelRef.current) {
    //         const rect = panelRef.current.getBoundingClientRect()
    //         const sizes = { width: rect.width, height: rect.height }
    //         console.log(sizes)
    //     }
    // }, [panelRef])

    // useDraggable(cardRef, panelRef, imageCropParams);

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
        <div className="renderingPanel">
            <div style={{ top: imageCropParams.top, left: imageCropParams.left }} className="textOrLogo">
                {renderingType}
            </div>
        </div>
    )
};

export default RenderingSingleMod;
