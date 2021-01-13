import React from 'react';
import { useDispatch } from 'react-redux';
import { changeTextFont } from '../../redux/actions';

const TextSelectBox = () => {
    const dispatch = useDispatch();
    return (
        <div className="selectOptionBox">
            <p>Font</p>
            <select onChange={(e) => dispatch(changeTextFont(e.target.value))}>
                <option>Montserrat</option>
                <option>fantasy</option>
                <option>sans-serif</option>
            </select>
        </div>
    );
};

export default TextSelectBox;