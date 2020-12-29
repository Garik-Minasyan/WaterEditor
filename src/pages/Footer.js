import React from 'react';
import { SETTINGS_PANEL } from './../components/constants';

const Footer = ({ type, setType }) => {
    return (
        <div className="footer">
            {type && <button onClick={() => setType(SETTINGS_PANEL)}>Cancel</button>}
            <button>Done</button>
        </div>
    );
};

export default Footer;