import React, { useCallback, memo } from 'react';
import { useDispatch } from 'react-redux';
import { changeTextFont } from '../../redux/actions';

const TextSelectBox = () => {
    const dispatch = useDispatch();

    const onChangeTextFont = useCallback((e) => {
        dispatch(changeTextFont(e.target.value))
    }, [dispatch]);

    return (
        <div className="selectOptionBox">
            <p>Font</p>
            <select onChange={onChangeTextFont}>
                <option>Montserrat</option>
                <option>fantasy</option>
                <option>sans-serif</option>
            </select>
        </div>
    );
};

export default memo(TextSelectBox);