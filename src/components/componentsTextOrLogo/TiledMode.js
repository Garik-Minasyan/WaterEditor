import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'antd';
import { singled } from '../../redux/actions';

const TiledMode = () => {
    const mode = useSelector(state => state.waterMarkerReducer.mode);
    const dispatch = useDispatch();
    return (
        <div className="tiledMode">
            <p>Tiled mode</p>
            <div className="singleOrTiled">
                <h5>Single</h5>
                <Switch onClick={() => dispatch(singled(!mode))} />
                <h5>Tiled</h5>
            </div>
        </div>
    );
};

export default TiledMode;