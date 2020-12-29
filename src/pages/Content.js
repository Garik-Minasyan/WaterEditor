import React, { useCallback, useState } from 'react';
import SettingsText from '../components/componentsSettings/SettingsText';
import SettingsPanel from '../components/componentsSettings/SettingsPanel';
import SettingsLogo from '../components/componentsSettings/SettingsLogo';
import RenderingPanel from '../components/componentsRendering/RenderingPanel';
import { SETTINGS_PANEL, SETTINGS_LOGO, SETTINGS_TEXT } from '../components/constants';
import { INITIAL_CROP_PARAMS } from '../components/constants';
import { BTN_FOR_POSITIN } from '../components/constants';

const Content = ({ type, setType }) => {
    const [text, setText] = useState("Bee TV");
    const [textSize, setTextSize] = useState(30);
    const [textColor, setTextColor] = useState('#7dcb52');
    const [textFont, setTextFont] = useState('Montserrat');
    const [logoOpacity, setLogoOpacity] = useState(1);
    const [single, setSingle] = useState(true);
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const [position, setPosition] = useState({ INITIAL_CROP_PARAMS });

    const changePosition = (btnCoords) => {
        if (btnCoords === BTN_FOR_POSITIN.topLeft) {
            setPosition({
                ...position,
                top: 0,
                left: 0
            })
        }
        if (btnCoords === BTN_FOR_POSITIN.topRight) {
            setPosition({
                ...position,
                top: 0,
                left: containerSize.width - position.INITIAL_CROP_PARAMS.width
            })
        }
        if (btnCoords === BTN_FOR_POSITIN.bottomRight) {
            setPosition({
                ...position,
                top: containerSize.height - position.INITIAL_CROP_PARAMS.height,
                left: 0
            })
        }
        if (btnCoords === BTN_FOR_POSITIN.bottomLeft) {
            setPosition({
                ...position,
                top: containerSize.height - position.INITIAL_CROP_PARAMS.height,
                left: containerSize.width - position.INITIAL_CROP_PARAMS.width,
            })
        }

    }

    const singled = () => {
        setSingle(prevSingle => !prevSingle)
    };

    const writeText = useCallback((e) => {
        setText(e.target.value)
    }, [setText]);

    const changeTextSize = useCallback((e) => {
        setTextSize(e.target.value)
    }, [setTextSize]);

    const formatText = () => parseInt(textSize);

    const changeTextColor = useCallback((e) => {
        setTextColor(e.target.value)
    }, [setTextColor]);

    const changeTextFont = useCallback((e) => {
        setTextFont(e.target.value)
    }, [setTextFont]);


    const changeLogoOpacity = useCallback((e) => {
        setLogoOpacity(e.target.value)
    }, [setLogoOpacity]);

    let leftContent;

    switch (type) {
        case SETTINGS_PANEL:
            leftContent = <SettingsPanel setType={setType} />
            break;
        case SETTINGS_LOGO:
            leftContent = <SettingsLogo
                changePosition={changePosition}
                single={single}
                singled={singled}
                logoOpacity={logoOpacity}
                changeLogoOpacity={changeLogoOpacity}
            />
            break;
        case SETTINGS_TEXT:
            leftContent = <SettingsText
                changePosition={changePosition}
                textFont={textFont}
                textColor={textColor}
                textSize={textSize}
                writeText={writeText}
                changeTextSize={changeTextSize}
                changeTextColor={changeTextColor}
                changeTextFont={changeTextFont}
                single={single}
                singled={singled}
            />
            break;
        default:
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
                position={position}
                setContainerSize={setContainerSize}
            />
        </div>
    );
};

export default Content;