import React from 'react';
import { useSelector } from 'react-redux';
import SetPositin from '../componentsTextOrLogo/SetPosition';
import SetPadding from '../componentsTextOrLogo/SetPadding';
import TiledMode from '../componentsTextOrLogo/TiledMode';
import TextInput from '../componentsForText/TextInput';
import TextSizeAndColor from '../componentsForText/TextSizeAndColor';
import TextSelectBox from '../componentsForText/TextSelectBox';

const SettingsText = () => {
    const mode = useSelector(state => state.waterMarkerReducer.mode);
    return (
        <div className="settingsText">
            <TextInput />
            <TextSizeAndColor />
            <TextSelectBox />
            <TiledMode />
            {mode ? <SetPadding /> : <SetPositin />}
        </div>
    );
};

export default SettingsText;