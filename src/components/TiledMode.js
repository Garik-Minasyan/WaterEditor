import React from 'react';
import { Switch } from 'antd';

const TiledMode = ({ singled }) => {
    return (
        <div className="tiledMode">
            <p>Tiled mode</p>
            <div className="singleOrTiled">
                <h5>Single</h5>
                <Switch onClick={singled} />
                <h5>Tiled</h5>
            </div>
        </div>
    );
};

export default TiledMode;