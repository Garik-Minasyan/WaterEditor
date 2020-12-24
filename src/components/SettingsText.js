import React from 'react';


const SettingsText = ({ writeText, changeTextSize, changeTextColor, changeTextFont }) => {
    return (
        <div className="settingsText">
            <div className="textInput">
                <input type="text"
                    placeholder="Write Text"
                    onChange={writeText}
                />
            </div>
            <div className="sizeRangeColor">
                <p>Size</p>
                <input type="range"
                    onChange={changeTextSize}
                    min="10"
                    max="90"
                />
                <input type="color" className="colorMania" onChange={changeTextColor} />
            </div>

            <div className="selectOptionBox">
                <p>Font</p>
                <select onChange={changeTextFont}>
                    <option>fantasy</option>
                    <option>sans-serif</option>
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