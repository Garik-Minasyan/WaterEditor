import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTextSize } from '../../redux/actions';

const TextSize = () => {
    const dispatch = useDispatch();
    const { fontSize } = useSelector(state => state.data)

    const onChangeTextSize = useCallback((e) => {
        dispatch(changeTextSize(+e.target.value))
    }, [dispatch]);

    return (
        <div className="textSize">
            <p>Size</p>
            <input
                value={fontSize}
                type="range"
                onChange={onChangeTextSize}
                min={10}
                max={90}
            />
        </div>
    );
};

export default memo(TextSize) 