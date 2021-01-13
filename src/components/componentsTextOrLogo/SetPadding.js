import React from 'react';
import { useDispatch } from 'react-redux';
import { changePadding } from '../../redux/actions';

const SetPadding = () => {
    const dispatch = useDispatch();
    return (
        <div className="padding">
            <p>Padding</p>
            <input
                type="range"
                className="paddingInput"
                onChange={(e) => dispatch(changePadding(+e.target.value))}
            />
        </div>
    );
};

export default SetPadding;