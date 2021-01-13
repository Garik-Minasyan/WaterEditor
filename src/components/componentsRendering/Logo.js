import React from 'react';
import { useSelector } from 'react-redux';
import image from '../../assets/images/BeeTV_vector-file.svg';

const Logo = () => {
    const opacity = useSelector(state => state.waterMarkerReducer.opacity)
    return (
        <img style={{ opacity: opacity }} alt="png" src={image} />
    )
}

export default Logo;