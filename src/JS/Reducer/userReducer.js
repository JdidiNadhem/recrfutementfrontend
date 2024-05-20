// InitialState

import { FAIL_USER, LOAD_USER } from "../Constatnts/User";

const InitialState = {
    User: null,
    load: false,
    errors: [],
};

// PURE FUNCTION

const userReducer = (state = InitialState, { type, payload }) => {
    switch (type) {
        case LOAD_USER:
            return {
                ...state,
                load: true
            }
        case LOAD_USER:
            return {
                ...state,
                User: payload.user,
                load: false
            }

        case FAIL_USER:
            return {
                ...state,
                load: false,
                errors: payload,
            };


        default:
            return state;
    }
};

export default userReducer;