import React from 'react';
import { useSelector } from 'react-redux';
import { SETTINGS_LOGO, SETTINGS_TEXT } from './../constants';
import image from '../../assets/images/BeeTV_vector-file.svg';
import { v4 as uuidv4 } from 'uuid';

const RepeatType = () => {
    const panelType = useSelector(state => state.waterMarkerReducer.panelType);
    const value = useSelector(state => state.waterMarkerReducer.value);
    const padding = useSelector(state => state.waterMarkerReducer.padding)

    // const canvasWidth = useSelector(state => state.waterMarkerReducer.canvasWidth);
    // const canvasHeight = useSelector(state => state.waterMarkerReducer.canvasHeight);
    // console.log(canvasHeight)

    const count = 24 // Math.floor((canvasWidth / 100) * (canvasHeight / 100))
    const opacity = useSelector(state => state.waterMarkerReducer.opacity);
    const textSize = useSelector(state => parseInt(state.waterMarkerReducer.textSize));
    const color = useSelector(state => state.waterMarkerReducer.color);
    const fontPath = useSelector(state => state.waterMarkerReducer.fontPath)
    let repeatType;

    switch (panelType) {
        case SETTINGS_TEXT:
            repeatType = (<p style={{ fontSize: textSize, color: color, fontFamily: fontPath }}>{value}</p>)
            break;
        case SETTINGS_LOGO:
            repeatType = (<img style={{ opacity: opacity }} src={image} alt="png" />)
            break;
        default:
            break;
    }
    return (
        <div className="repeatType">
            {
                new Array(count).fill().map(() =>
                    <div style={{ padding: padding }} className="count" key={uuidv4()}>
                        {repeatType}
                    </div>
                )
            }
        </div>
    )
}

export default RepeatType;