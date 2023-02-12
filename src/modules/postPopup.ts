import { PostType } from "@/components/posts/Post"

const CHANGE_POPUP_POST: string = "postPopup/CHANGE_POPUP_POST";
const CHANGE_POPUP_DISPLAY: string = "postPopup/CHANGE_POPUP_DISPLAY";

interface Action {
    type: string,
    popupPost?: PostType
    popupDisplay?: string
}

export interface PostPopupState {
    popupPost?: PostType
    popupDisplay?: string
}

export const changePopupPost = (popupPost: PostType): Action => ({ type: CHANGE_POPUP_POST, popupPost });
export const changePopupDisplay = (popupDisplay: string): Action => ({ type: CHANGE_POPUP_DISPLAY, popupDisplay });

const initState: PostPopupState = {
    popupPost: undefined,
    popupDisplay: undefined
};

function postPopup(state: PostPopupState = initState, action: Action): PostPopupState {
    switch(action.type) {
        case CHANGE_POPUP_POST:
            return ({
                ...state,
                popupPost: action.popupPost
            });

        case CHANGE_POPUP_DISPLAY:
            return ({
                ...state,
                popupDisplay: action.popupDisplay
            });

        default:
            return state;
    }
}

export default postPopup;