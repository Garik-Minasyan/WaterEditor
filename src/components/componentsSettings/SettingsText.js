import React from 'react';
import SetPositin from '../componentsTextOrLogo/SetPosition';
import SetPadding from '../componentsTextOrLogo/SetPadding';
import TiledMode from '../componentsTextOrLogo/TiledMode';
import TextInput from '../componentsForText/TextInput';
import TextSizeAndColor from '../componentsForText/TextSizeAndColor';
import TextSelectBox from '../componentsForText/TextSelectBox';


const SettingsText = ({
    single,
    singled,
    writeText,
    textFont,
    textColor,
    textSize,
    changeTextSize,
    changeTextColor,
    changeTextFont,
    changePosition }) => {

    return (
        <div className="settingsText">
            <TextInput writeText={writeText} />
            <TextSizeAndColor
                textColor={textColor}
                textSize={textSize}
                changeTextColor={changeTextColor}
                changeTextSize={changeTextSize}
            />
            <TextSelectBox changeTextFont={changeTextFont} textFont={textFont} />
            <TiledMode singled={singled} />
            {single ? <SetPositin changePosition={changePosition} /> : <SetPadding />}
        </div>
    );
};

export default SettingsText;