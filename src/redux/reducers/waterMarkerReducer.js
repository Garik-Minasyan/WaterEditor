import { SETTINGS_PANEL } from '../../components/constants';
import { DATA } from './../../components/constants';
import { BTN_FOR_POSITION } from '../../components/constants'
import {
    CHANGE_TEXT_SIZE, CHANGE_TYPE, SAVE_DATA,
    WRITE_TEXT, CHAHGE_TEXT_COLOR, CHANGE_TEXT_FONT,
    CHANGE_LOGO_OPACITY, SINGLED_TYPE, CHANGE_POSITION, CHANGE_PADDING
} from './../actions';

const initialState = {
    data: DATA,
    panelType: SETTINGS_PANEL,
};
const dataUpdater = (state) => (key, value) => {
    return {
        ...state,
        data: {
            ...state.data,
            [key]: value
        }
    };
};

const waterMarkerReducer = (state = initialState, action) => {
    const updateData = dataUpdater(state)
    switch (action.type) {
        case CHANGE_TYPE:
            return {
                ...state,
                panelType: action.payload.panelType,
            }
        case SAVE_DATA:
            console.log(state)
            return {
                ...state,
            }
        case SINGLED_TYPE:
            return updateData("mode", action.payload);
        case WRITE_TEXT:
            return updateData("value", action.payload);
        case CHANGE_TEXT_SIZE:
            return updateData("fontSize", action.payload);
        case CHAHGE_TEXT_COLOR:
            return updateData("color", action.payload);
        case CHANGE_TEXT_FONT:
            return updateData("fontPath", action.payload);
        case CHANGE_LOGO_OPACITY:
            return updateData("opacity", action.payload);
        case CHANGE_PADDING:
            return updateData("padding", action.payload);

        case CHANGE_POSITION: {
            let btnCoords;
            switch (action.payload) {
                case BTN_FOR_POSITION.topLeft:
                    btnCoords = {
                        top: 0,
                        left: 0
                    };
                    break;
                case BTN_FOR_POSITION.topRight:
                    btnCoords = {
                        top: 0,
                        left: state.data.canvasWidth - state.data.imageCropParams.width
                    };
                    break;
                case BTN_FOR_POSITION.bottomLeft:
                    btnCoords = {
                        top: state.data.canvasHeight - state.data.imageCropParams.height,
                        left: 0
                    };
                    break
                case BTN_FOR_POSITION.bottomRight:
                    btnCoords = {
                        top: state.data.canvasHeight - state.data.imageCropParams.height,
                        left: state.data.canvasWidth - state.data.imageCropParams.width
                    };
                    break
                default:
                    break
            }
            return {
                ...state,
                data: {
                    ...state.data,
                    imageCropParams: {
                        ...state.data.imageCropParams,
                        ...btnCoords
                    }
                },
            }
        };
        default:
            return state
    };
}

export default waterMarkerReducer;



