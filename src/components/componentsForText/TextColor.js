import React, { useCallback, memo } from 'react';
import { changeTextColor } from './../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const TextColor = () => {
    const dispatch = useDispatch();
    const { color } = useSelector(state => state.data)

    const onChangeTextColor = useCallback((e) => {
        dispatch(changeTextColor(e.target.value))
    }, [dispatch]);

    return (
        <div>
            <input
                value={color}
                type="color"
                className="colorMania"
                onChange={onChangeTextColor}
            />
        </div>
    )
};

export default memo(TextColor);