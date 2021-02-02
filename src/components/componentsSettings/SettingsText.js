import React from 'react';
import { useSelector } from 'react-redux';
import SetPositin from '../componentsTextOrLogo/SetPosition';
import SetPadding from '../componentsTextOrLogo/SetPadding';
import TiledMode from '../componentsTextOrLogo/TiledMode';
import TextInput from '../componentsForText/TextInput';
import TextSize from '../componentsForText/TextSize';
import TextColor from '../componentsForText/TextColor';
import TextSelectBox from '../componentsForText/TextSelectBox';

const SettingsText = () => {
    const { mode } = useSelector(state => state.data);
    return (
        <div className="settingsText">
            <TextInput />
            <div className="sizeColor">
                <TextSize />
                <TextColor />
            </div>

            <TextSelectBox />
            <TiledMode />
            {mode ? <SetPositin /> : <SetPadding />}
        </div>
    );
};

export default SettingsText;