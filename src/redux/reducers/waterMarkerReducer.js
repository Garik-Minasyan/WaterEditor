import { SETTINGS_PANEL } from '../../components/constants';
import { DATA } from './../../components/constants';
import { BTN_FOR_POSITIN } from '../../components/constants'
import {
    CHANGE_TEXT_SIZE, CHANGE_TYPE, SAVE_DATA,
    WRITE_TEXT, CHAHGE_TEXT_COLOR, CHANGE_TEXT_FONT,
    CHANGE_LOGO_OPACITY, SINGLED_TYPE, CHANGE_POSITION, CHANGE_PADDING
} from './../actions';

const initialState = {
    data: DATA,
    panelType: SETTINGS_PANEL,
};


const waterMarkerReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TYPE:
            return {
                ...state,
                panelType: action.payload.panelType,
            }
        case SINGLED_TYPE:
            return {
                ...state,
                mode: action.payload
            }
        case SAVE_DATA:
            console.log(state)
            return {
                ...state,
            }
        case WRITE_TEXT:
            return {
                ...state,
                value: action.payload
            }
        case CHANGE_TEXT_SIZE:
            return {
                ...state,
                textSize: action.payload
            }
        case CHAHGE_TEXT_COLOR:
            return {
                ...state,
                color: action.payload
            }
        case CHANGE_TEXT_FONT:
            return {
                ...state,
                fontPath: action.payload
            }
        case CHANGE_LOGO_OPACITY:
            return {
                ...state,
                opacity: action.payload
            }
        case CHANGE_PADDING:
            return {
                ...state,
                padding: action.payload
            }
        case CHANGE_POSITION: {
            let btnCoords;
            switch (btnCoords) {
                case BTN_FOR_POSITIN.topLeft:
                    return {
                        top: 0,
                        left: 0
                    };
                case BTN_FOR_POSITIN.topRight:
                    return {
                        top: 0,
                        left: state.data.canvasWidth - state.data.imageCropParams.width
                    }
                case BTN_FOR_POSITIN.bottomLeft:
                    return {
                        top: state.data.canvasHeight - state.data.imageCropParams.height,
                        left: 0
                    }
                case BTN_FOR_POSITIN.bottomRight:
                    return {
                        top: state.data.canvasHeight - state.data.imageCropParams.height,
                        left: state.dadta.canvasWidth - state.data.imageCropParams.width
                    }
                default:
            }
            return {
                ...state,
                imageCropParams: {
                    ...state.data.imageCropParams,
                    imageCropParams: action.payload
                }
            }

        };
        default:
            return state
    };
}
export default waterMarkerReducer;



