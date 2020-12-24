import React from 'react';

const SettingsEditor = ({ toggledState }) => {
    return (
        <div className="settingsEditor">
            <div className="logo" onClick={toggledState}>Your Logo</div>
            {/* {/* <div>or</div> */}
            <div className="typeText" onClick={toggledState}>Type Text</div>
        </div>
    );
};

export default SettingsEditor;