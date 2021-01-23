import * as Type from './type';

const initialState = {
    posts: null,
    postMessage: "Default message from post"
}

const postReducer = (state=initialState, action) => {
    let { type, payload } = action;
    switch(type) {
        case Type.SET_POSTS:
            return {...state, posts: payload}
        case Type.SET_POST_MESSAGE:
            return {...state, postMessage: payload}
        default:
            return state;
    }
}

export default postReducer;