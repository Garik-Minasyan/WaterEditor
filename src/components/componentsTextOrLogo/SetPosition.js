import React, { useCallback } from 'react';
import { BTN_FOR_POSITION } from './../constants';
import { changePosition } from '././../../redux/actions/index';
import { useDispatch } from 'react-redux'

const SetPositin = () => {
    const dispatch = useDispatch();

    const onChangePosition = useCallback((buttonKey) => {
        dispatch(changePosition(buttonKey))
    }, [dispatch]);

    return (
        <div className="position">
            <p>Position</p>
            <div className="arrows">
                <div onClick={() => onChangePosition(BTN_FOR_POSITION.topLeft)} className="smallSquare">
                    <div className="arrow"></div>
                </div>
                <div onClick={() => onChangePosition(BTN_FOR_POSITION.topRight)} className="smallSquare">
                    <div className="arrow rotayte90deg"></div>
                </div>
                <div onClick={() => onChangePosition(BTN_FOR_POSITION.bottomLeft)} className="smallSquare">
                    <div className="arrow rotayte270deg"></div>
                </div>
                <div onClick={() => onChangePosition(BTN_FOR_POSITION.bottomRight)} className="smallSquare">
                    <div className="arrow rotayte180deg"></div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(SetPositin);