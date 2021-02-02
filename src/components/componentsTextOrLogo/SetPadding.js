import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePadding } from '../../redux/actions';

const SetPadding = () => {
    const dispatch = useDispatch();
    const { padding } = useSelector(state => state.data)

    const onChangePadding = useCallback((e) => {
        dispatch(changePadding(+e.target.value))
    }, [dispatch])

    return (
        <div className="padding">
            <p>Padding</p>
            <input
                value={padding}
                type="range"
                className="paddingInput"
                onChange={onChangePadding}
            />
        </div>
    );
};

export default React.memo(SetPadding);