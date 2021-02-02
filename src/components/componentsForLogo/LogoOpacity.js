import React, { useCallback, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeLogoOpacity } from '../../redux/actions';

const LogoOpacity = () => {
    const { opacity } = useSelector(state => state.data);
    const dispatch = useDispatch();

    const onChangeLogoOpacity = useCallback((e) => {
        dispatch(changeLogoOpacity(+e.target.value))
    }, [dispatch]);

    return (
        <div className="opasityInput">
            <p>Opacity</p>
            <input
                value={opacity}
                type="range"
                onChange={onChangeLogoOpacity}
                min={0}
                max={1}
                step={0.05}
            />
        </div>
    );
};
export default memo(LogoOpacity);