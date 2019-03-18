import { ABOUT_MODAL, CONTACT_MODAL, CLOSE_MODAL } from "../actions/types";

const modalDefault = { about: false, contact: false }

export default function (state = modalDefault, action) {
    switch (action.type) {
        case ABOUT_MODAL:
            return Object.assign({}, modalDefault, { about: action.payload });
        case CONTACT_MODAL:
            return Object.assign({}, modalDefault, { contact: action.payload });
        case CLOSE_MODAL:
            return modalDefault;
        default:
            return state;
    }
}