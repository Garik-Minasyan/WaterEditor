import React, { useState } from 'react';
import image from '../assets/images/BeeTV_vector-file.svg';
import TiledMode from './TiledMode';
import SetPositin from './SetPosition';
import SetPadding from './SetPadding';


const SettingsLogo = ({ changeLogoOpacity }) => {
    const [single, setSingle] = useState(true);

    const singled = () => {
        setSingle(prevSingle => !prevSingle)
    };
    return (
        <div className="settingsLogo">
            <div className="imageDiv">
                <img src={image} alt="png" />
            </div>

            <div className="opasityInput">
                <p>Opacity</p>
                <input
                    type="range"
                    onChange={changeLogoOpacity}
                    min="-0.10"
                    max="10" />
            </div>

            <TiledMode singled={singled} />
            {single ? <SetPositin /> : <SetPadding />}

        </div>
    );
};

export default SettingsLogo;