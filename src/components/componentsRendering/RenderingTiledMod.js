import React from 'react';
import { useSelector } from 'react-redux';
import { SETTINGS_LOGO, SETTINGS_TEXT } from '../constants';
import image from '../../assets/images/BeeTV_vector-file.svg';
import { v4 as uuidv4 } from 'uuid';

const RenderingTiledMod = () => {
    const { value, padding, opacity, fontSize,
        color, fontPath, canvasHeight, canvasWidth } = useSelector(state => state.data);
    const panelType = useSelector(state => state.panelType);

    const count = Math.ceil((canvasWidth / 100) * (canvasHeight / 100))
    console.log(canvasWidth)
    console.log(canvasHeight)

    let repeatType;
    switch (panelType) {
        case SETTINGS_TEXT:
            repeatType =
                (<p
                    style={{
                        fontSize: fontSize,
                        color: color,
                        fontFamily: fontPath
                    }}>
                    {value}
                </p>)
            break;
        case SETTINGS_LOGO:
            repeatType =
                (<img style={{
                    opacity: opacity
                }}
                    src={image}
                    alt="png"
                />)
            break;
        default:
            break;
    }
    return (
        <div className="repeatType">
            {
                new Array(count).fill().map(() =>
                    <div style={{ padding: padding }} key={uuidv4()}>
                        {repeatType}
                    </div>
                )
            }
        </div>
    )
}

export default RenderingTiledMod;