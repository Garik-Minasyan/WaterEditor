import React from 'react';

const SettingsText = () => {
    return (
        <div>
            <div className="textInput">
                <input type="text" placeholder="Write Text" />
            </div>
            <div className="sizeRangeColor">
                <p>Size</p>
                <input type="range" />
                <div className="colorMania"></div>
            </div>
            <div className="selectOptionBox">
                <p>Font</p>
                <select>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
            </div>

            <div className="tiledMode">
                <p>Tiled mode</p>
                <div className="singleOrTiled">
                    <h5>Single</h5>
                    <div></div>
                    <h5>Tiled</h5>
                </div>
            </div>
            <div className="position">
                <p>Position</p>
                <div className="arrows">
                    <div className="smallSquare">
                        <div></div>
                    </div>
                    <div className="smallSquare">
                        <div></div>
                    </div>
                    <div className="smallSquare">
                        <div></div>
                    </div>
                    <div className="smallSquare">
                        <div></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SettingsText;