import * as Type from './type'

const initialState = {
    users: null,
    userMessage: "Default message from user"
};

const userReducer = (state=initialState, action) => {
    let { type, payload } = action;
    switch(type) {
        case Type.SET_USERS:
            return {...state, users: payload}
        case Type.SET_USERS_MESSAGE:
            return {...state, userMessage: payload}
        default:
            return state;
    }
};

export default userReducer;

