import React from 'react';
import { SETTINGS_PANEL } from '../App';

const Footer = ({ type, setType }) => {
    return (
        <div className="footer">
            {type !== SETTINGS_PANEL && <button onClick={() => setType(SETTINGS_PANEL)}>Cancel</button>}
            <button>Done</button>
        </div>
    );
};

export default Footer;