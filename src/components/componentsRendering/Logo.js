import React from 'react';
import image from '../../assets/images/BeeTV_vector-file.svg';

const Logo = ({ logoOpacity }) => {
    return (
        <img style={{ opacity: logoOpacity }} alt="png" src={image} />
    )
}

export default Logo;