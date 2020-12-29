import React from 'react';

const LogoOpacity = ({ logoOpacity, changeLogoOpacity }) => {
    return (
        <div className="opasityInput">
            <p>Opacity</p>
            <input
                type="range"
                value={logoOpacity}
                onChange={changeLogoOpacity}
                min={0}
                max={1}
                step={0.05}
            />
        </div>
    );
};
export default LogoOpacity;