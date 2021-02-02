import React from 'react';
import SettingsText from '../components/componentsSettings/SettingsText';
import SettingsPanel from '../components/componentsSettings/SettingsPanel';
import SettingsLogo from '../components/componentsSettings/SettingsLogo';
import RenderingSingleMod from '../components/componentsRendering/RenderingSingleMod';
import RenderingTiledMod from './../components/componentsRendering/RenderingTiledMod';
import { SETTINGS_PANEL, SETTINGS_LOGO, SETTINGS_TEXT } from '../components/constants';
import { useSelector } from 'react-redux';

const Content = () => {
    const panelType = useSelector(state => state.panelType)
    const { mode } = useSelector(state => state.data);

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
            {mode ? <RenderingSingleMod /> : <RenderingTiledMod />}
        </div>
    );
};
export default Content;