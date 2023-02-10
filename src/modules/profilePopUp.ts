const CHANGE_USER: string = "profilePopUp/CHANGE_USER";
const CHANGE_DISPLAY: string = "profilePopUp/CHANGE_DISPLAY";
const CHANGE_POSITION: string = "profilePopUp/CHANGE_POSITION";

interface Action {
    type: string,
    id?: string,
    display?: string,
    top?: string,
    left?: string
}

export interface ProfilePopUpState {
    profilePopUpId: string | undefined,
    display: string | undefined,
    top: string | undefined,
    left: string | undefined
}

export const changeUser = (id: string): Action => ({ type: CHANGE_USER, id });
export const changeDisplay = (display: string): Action => ({ type: CHANGE_DISPLAY, display });
export const changePosition = (top: string, left: string): Action => ({ type: CHANGE_POSITION, top, left });

const initState: ProfilePopUpState = {
    profilePopUpId: undefined,
    display: undefined,
    top: undefined,
    left: undefined
}

function profilePopUp(state: ProfilePopUpState = initState, action: Action): ProfilePopUpState {
    switch(action.type) {
        case CHANGE_USER:
            return {
                ...state,
                profilePopUpId: action.id
            };

        case CHANGE_DISPLAY:
            return {
                ...state,
                display: action.display
            };

        case CHANGE_POSITION:
            return {
                ...state,
                top: action.top,
                left: action.left
            };
        
        default:
            return state;
    }
}

export default profilePopUp;