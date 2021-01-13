export const CHANGE_TYPE = "CHANGE_TYPE";
export const SAVE_DATA = "SAVE_DATA";
export const WRITE_TEXT = "WRITE_TEXT";
export const CHANGE_TEXT_SIZE = "CHANGE_TEXT_SIZE";
export const CHAHGE_TEXT_COLOR = "CHAHGE_TEXT_COLOR";
export const CHANGE_TEXT_FONT = "CHANGE_TEXT_FONT";
export const CHANGE_LOGO_OPACITY = "CHANGE_LOGO_OPACITY";
export const SINGLED_TYPE = "SINGLED_TYPE";
export const CHANGE_POSITION = "CHANGE_POSITION";
export const CHANGE_PADDING = "CHANGE_PADDING";

export const changeType = (payload) => {
    return {
        type: CHANGE_TYPE,
        payload
    }
};

export const saveData = () => {
    return {
        type: SAVE_DATA,
    }
};

export const writeText = (payload) => {
    return {
        type: WRITE_TEXT,
        payload
    }
};

export const changeTextSize = (payload) => {
    return {
        type: CHANGE_TEXT_SIZE,
        payload
    }
};

export const changeTextColor = (payload) => {
    return {
        type: CHAHGE_TEXT_COLOR,
        payload
    }
};

export const changeTextFont = (payload) => {
    return {
        type: CHANGE_TEXT_FONT,
        payload
    }
};;

export const changeLogoOpacity = (payload) => {
    return {
        type: CHANGE_LOGO_OPACITY,
        payload
    }
};

export const singled = (payload) => {
    return {
        type: SINGLED_TYPE,
        payload
    }
};

export const changePosition = (payload) => {
    return {
        type: CHANGE_POSITION,
        payload
    }
}

export const changePadding = (payload) => {
    return {
        type: CHANGE_PADDING,
        payload
    }
}
