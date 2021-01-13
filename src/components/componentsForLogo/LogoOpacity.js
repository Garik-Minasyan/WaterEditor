import React from 'react';
import { useDispatch } from 'react-redux';
import { changeLogoOpacity } from '../../redux/actions';

const LogoOpacity = () => {
    const dispatch = useDispatch();
    return (
        <div className="opasityInput">
            <p>Opacity</p>
            <input
                type="range"
                onChange={(e) => dispatch(changeLogoOpacity(e.target.value))}
                min={0}
                max={1}
                step={0.05}
            />
        </div>
    );
};
export default LogoOpacity;