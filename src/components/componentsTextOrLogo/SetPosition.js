import React from 'react';
import { BTN_FOR_POSITIN } from './../constants'

const SetPositin = ({ changePosition }) => {
    return (
        <div className="position">
            <p>Position</p>
            <div className="arrows">
                <div onClick={() => changePosition(BTN_FOR_POSITIN.topLeft)} className="smallSquare">
                    <div className="arrow"></div>
                </div>
                <div onClick={() => changePosition(BTN_FOR_POSITIN.topRight)} className="smallSquare">
                    <div className="arrow rotayte90deg"></div>
                </div>
                <div onClick={() => changePosition(BTN_FOR_POSITIN.bottomRight)} className="smallSquare">
                    <div className="arrow rotayte270deg"></div>
                </div>
                <div onClick={() => changePosition(BTN_FOR_POSITIN.bottomLeft)} className="smallSquare">
                    <div className="arrow rotayte180deg"></div>
                </div>

            </div>
        </div>
    );
};

export default SetPositin;