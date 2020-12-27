import React from 'react';

const SetPositin = ({ changePosition }) => {
    return (
        <div className="position">
            <p>Position</p>
            <div onClick={changePosition} className="arrows">
                <div id="1" className="smallSquare">
                    <div className="arrow"></div>
                </div>
                <div id="2" className="smallSquare">
                    <div className="arrow rotayte90deg"></div>
                </div>
                <div id="3" className="smallSquare">
                    <div className="arrow rotayte270deg"></div>
                </div>
                <div id="4" className="smallSquare">
                    <div className="arrow rotayte180deg"></div>
                </div>

            </div>
        </div>
    );
};

export default SetPositin;