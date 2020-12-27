import React from 'react';
import image from '../assets/images/BeeTV_vector-file.svg';

const Logo = ({ logoOpacity }) => {
    return (
        <div className="logo">
            <img style={{ opacity: logoOpacity }} alt="png" src={image} />
        </div>
    )
}

export default Logo;