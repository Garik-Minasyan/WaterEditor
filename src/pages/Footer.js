import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { changeType, saveData, SAVE_DATA } from '../redux/actions';
import { SETTINGS_PANEL } from './../components/constants';


const Footer = () => {
    const dispatch = useDispatch();
    return (
        <div className="footer">
            {<button onClick={() => dispatch(changeType({ panelType: SETTINGS_PANEL }))}>Cancel</button>}
            {<button onClick={() => dispatch(saveData({ type: SAVE_DATA }))}>Done</button>}
        </div>
    );
};

export default memo(Footer);