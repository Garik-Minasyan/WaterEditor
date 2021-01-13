import React from 'react';
import SettingsText from '../components/componentsSettings/SettingsText';
import SettingsPanel from '../components/componentsSettings/SettingsPanel';
import SettingsLogo from '../components/componentsSettings/SettingsLogo';
import RenderingPanel from '../components/componentsRendering/RenderingPanel';
import RepeatType from './../components/componentsRendering/RepeatType';
import { SETTINGS_PANEL, SETTINGS_LOGO, SETTINGS_TEXT } from '../components/constants';
import { useSelector } from 'react-redux';

const Content = () => {
    const panelType = useSelector(state => state.waterMarkerReducer.panelType)
    const mode = useSelector(state => state.waterMarkerReducer.mode);

    let leftContent;

    switch (panelType) {
        case SETTINGS_PANEL:
            leftContent = <SettingsPanel />
            break;

        case SETTINGS_LOGO:
            leftContent = <SettingsLogo />
            break;
        case SETTINGS_TEXT:
            leftContent = <SettingsText />
            break;
        default:
            break
    };

    return (
        <div className="content">
            {leftContent}
            {mode ? <RepeatType /> : <RenderingPanel />}
        </div>
    );
};
export default Content;