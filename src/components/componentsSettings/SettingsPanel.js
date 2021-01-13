import React from 'react';
import { SETTINGS_LOGO, SETTINGS_TEXT } from '../constants';
import { useDispatch } from 'react-redux';
import { changeType } from '../../redux/actions';


const SettingsPanel = () => {
    const dispatch = useDispatch();
    return (
        <div className="settingsPanel">
            <button className="logobtn" onClick={() => dispatch(changeType({ panelType: SETTINGS_LOGO }))}>Your Logo</button>
            <div className="or">
                <h4>or</h4>
            </div>
            <button className="typeTextbtn" onClick={() => dispatch(changeType({ panelType: SETTINGS_TEXT }))}>Type Text</button>
        </div>
    );
};

export default SettingsPanel;