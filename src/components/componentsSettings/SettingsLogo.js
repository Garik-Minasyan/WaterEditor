import React from 'react';
import TiledMode from '../componentsTextOrLogo/TiledMode';
import SetPositin from '../componentsTextOrLogo/SetPosition';
import SetPadding from '../componentsTextOrLogo/SetPadding';
import LogoImage from '../componentsForLogo/LogoImage';
import LogoOpacity from '../componentsForLogo/LogoOpacity';


const SettingsLogo = ({ changeLogoOpacity, logoOpacity, single, singled, changePosition }) => {
    return (
        <div className="settingsLogo">
            <LogoImage />
            <LogoOpacity
                changeLogoOpacity={changeLogoOpacity}
                logoOpacity={logoOpacity}
            />
            <TiledMode singled={singled} />
            {single ? <SetPositin changePosition={changePosition}
            /> : <SetPadding />}

        </div>
    );
};

export default SettingsLogo;