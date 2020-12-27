import React from 'react';
import { SETTINGS_LOGO, SETTINGS_TEXT } from '../App';

const SettingsPanel = ({ setType }) => {
    return (
        <div className="settingsPanel">
            <button className="logobtn" onClick={() => setType(SETTINGS_LOGO)}>Your Logo</button>
            <div className="or">
                <h4>or</h4>
            </div>
            <button className="typeTextbtn" onClick={() => setType(SETTINGS_TEXT)}>Type Text</button>
        </div>
    );
};

export default SettingsPanel;