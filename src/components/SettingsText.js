import React, { useState } from 'react';
import SetPositin from './SetPosition';
import SetPadding from './SetPadding';
import TiledMode from './TiledMode';


const SettingsText = ({
    writeText,
    changeTextSize,
    changeTextColor,
    changeTextFont,
    changePosition }) => {

    const [single, setSingle] = useState(true);

    const singled = () => {
        setSingle(prevSingle => !prevSingle)
    };

    return (
        <div className="settingsText">
            <div className="textInput">
                <input
                    type="text"
                    placeholder="Write Text"
                    onChange={writeText}
                />
            </div>
            <div className="sizeColor">
                <p>Size</p>
                <input
                    type="range"
                    onChange={changeTextSize}
                    min="10"
                    max="90"
                />
                <input
                    type="color"
                    className="colorMania"
                    onChange={changeTextColor}
                />
            </div>

            <div className="selectOptionBox">
                <p>Font</p>
                <select onChange={changeTextFont}>
                    <option>Montserrat</option>
                    <option>fantasy</option>
                    <option>sans-serif</option>
                </select>
            </div>
            <TiledMode singled={singled} />
            {single ? <SetPositin changePosition={changePosition} /> : <SetPadding />}
        </div>
    );
};

export default SettingsText;