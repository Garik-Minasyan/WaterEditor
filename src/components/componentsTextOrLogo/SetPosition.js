import React from 'react';
import { BTN_FOR_POSITIN } from './../constants';
import { changePosition } from '././../../redux/actions/index';
import { useDispatch, useSelector } from 'react-redux'

const SetPositin = () => {
    const dispatch = useDispatch();
    const imageCropParams = useSelector(state => state.waterMarkerReducer.imageCropParams)
    console.log(imageCropParams)

    return (
        <div className="position">
            <p>Position</p>
            <div className="arrows">
                <div onClick={() => dispatch(changePosition(BTN_FOR_POSITIN.topLeft))} className="smallSquare">
                    <div className="arrow"></div>
                </div>
                <div onClick={() => dispatch(changePosition(BTN_FOR_POSITIN.topRight))} className="smallSquare">
                    <div className="arrow rotayte90deg"></div>
                </div>
                <div onClick={() => dispatch(changePosition(BTN_FOR_POSITIN.bottomLeft))} className="smallSquare">
                    <div className="arrow rotayte270deg"></div>
                </div>
                <div onClick={() => dispatch(changePosition(BTN_FOR_POSITIN.bottomRight))} className="smallSquare">
                    <div className="arrow rotayte180deg"></div>
                </div>
            </div>
        </div>
    );
};

export default SetPositin;