import React from 'react';
import { useSelector } from 'react-redux';
import TiledMode from '../componentsTextOrLogo/TiledMode';
import SetPositin from '../componentsTextOrLogo/SetPosition';
import SetPadding from '../componentsTextOrLogo/SetPadding';
import LogoImage from '../componentsForLogo/LogoImage';
import LogoOpacity from '../componentsForLogo/LogoOpacity';

const SettingsLogo = () => {
    const mode = useSelector(state => state.waterMarkerReducer.mode);
    return (
        <div className="settingsLogo">
            <LogoImage />
            <LogoOpacity />
            <TiledMode />
            {mode ? <SetPadding /> : <SetPositin />}
        </div>
    );
};

export default SettingsLogo;