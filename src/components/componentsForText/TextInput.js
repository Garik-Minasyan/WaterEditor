import React, { useCallback, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { writeText } from '../../redux/actions';

const TextInput = () => {
    const { value } = useSelector(state => state.data)
    const dispatch = useDispatch();

    const onWriteText = useCallback((e) => {
        dispatch(writeText(e.target.value))
    }, [dispatch]);

    return (
        <div className="textInput">
            <input
                value={value}
                type="text"
                maxLength={10}
                placeholder="Write Text"
                onChange={onWriteText}
            />
        </div>
    );
};

export default memo(TextInput);