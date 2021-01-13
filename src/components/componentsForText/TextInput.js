import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { writeText } from '../../redux/actions';

const TextInput = () => {
    const value = useSelector(state => state.waterMarkerReducer.value)
    console.log(value)
    const dispatch = useDispatch();
    return (
        <div className="textInput">
            <input
                value={value}
                type="text"
                maxLength={10}
                placeholder="Write Text"
                onChange={(e) => dispatch(writeText(e.target.value))}
            />
        </div>
    );
};

export default TextInput;