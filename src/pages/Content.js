import React, { useState } from 'react';
import SettingsText from '../components/SettingsText';
import SettingsEditor from '../components/SettingsEditor';
// import SettingsLogo from '../components/SettingsLogo';
import RenderingEditor from '../components/RenderingEditor';

const Content = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggledState = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    return (
        <div className="content">
            {isOpen ? <SettingsText /> : <SettingsEditor toggledState={toggledState} />}
            <RenderingEditor isOpen={isOpen} />
        </div>
    );
};

export default Content;