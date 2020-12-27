import React, { useState } from 'react';
import SettingsText from '../components/SettingsText';
import SettingsPanel from '../components/SettingsPanel';
import SettingsLogo from '../components/SettingsLogo';
import RenderingPanel from '../components/RenderingPanel';
import { SETTINGS_PANEL, SETTINGS_LOGO, SETTINGS_TEXT } from '../App';

const Content = ({ type, setType }) => {
    const [text, setText] = useState("Bee TV");
    const [textSize, setTextSize] = useState(30);
    const [textColor, setTextColor] = useState('#7dcb52');
    const [textFont, setTextFont] = useState('Montserrat');
    const [logoOpacity, setLogoOpacity] = useState(20)

    const writeText = (e) => {
        setText(e.target.value)
    };

    const changeTextSize = (e) => {
        setTextSize(e.target.value)
    };

    function formatText() {
        const size = textSize;
        return parseInt(size);
    };

    const changeTextColor = (e) => {
        setTextColor(e.target.value)
    };

    const changeTextFont = (e) => {
        setTextFont(e.target.value)
    };

    const changePosition = (id) => {
        console.log(id)
    };

    const changeLogoOpacity = (e) => {
        setLogoOpacity(e.target.value)
        console.log(e.target.value)
    };

    let leftContent;

    switch (type) {
        case SETTINGS_PANEL:
            leftContent = <SettingsPanel setType={setType} />
            break;
        case SETTINGS_LOGO:
            leftContent = <SettingsLogo
                changeLogoOpacity={changeLogoOpacity}
            />
            break;
        case SETTINGS_TEXT:
            leftContent = <SettingsText
                writeText={writeText}
                changeTextSize={changeTextSize}
                changeTextColor={changeTextColor}
                changeTextFont={changeTextFont}
                changePosition={changePosition}

            />
            break;
        default:
            break
    };

    return (
        <div className="content">
            {leftContent}
            <RenderingPanel
                type={type}
                textFont={textFont}
                textColor={textColor}
                formatText={formatText()}
                text={text}
                logoOpacity={logoOpacity}
            />
        </div>
    );
};

export default Content;