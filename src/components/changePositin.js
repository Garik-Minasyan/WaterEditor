import React, { useState } from 'react'
import { INITIAL_CROP_PARAMS } from '../components/constants';
import { BTN_FOR_POSITIN } from '../components/constants';


export const ChangePosition = (btnCoords) => {

    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const [position, setPosition] = useState({ INITIAL_CROP_PARAMS });

    if (btnCoords === BTN_FOR_POSITIN.topLeft) {
        setPosition({
            ...position,
            top: 0,
            left: 0
        })
    }
    if (btnCoords === BTN_FOR_POSITIN.topRight) {
        setPosition({
            ...position,
            top: 0,
            left: containerSize.width - position.INITIAL_CROP_PARAMS.width
        })
    }
    if (btnCoords === BTN_FOR_POSITIN.bottomRight) {
        setPosition({
            ...position,
            top: containerSize.height - position.INITIAL_CROP_PARAMS.height,
            left: 0
        })
    }
    if (btnCoords === BTN_FOR_POSITIN.bottomLeft) {
        setPosition({
            ...position,
            top: containerSize.height - position.INITIAL_CROP_PARAMS.height,
            left: containerSize.width - position.INITIAL_CROP_PARAMS.width,
        })
    }

}