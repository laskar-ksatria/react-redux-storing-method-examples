import { axiosInstance, errHandling } from '../index';
import { SET_POSTS, SET_POST_MESSAGE } from './type'

export const F_GET_POSTS = (dispatch) => {
    return new Promise((resolve, reject) => {
        axiosInstance({url: '/posts'})
            .then(({data}) => {
                dispatch({type: SET_POSTS, payload: data})
                resolve();
            })
            .catch(err => errHandling(err, reject))
    })
};

export const F_CHANGE_POST_MESSAGE = (dispatch, message) => {
    dispatch({type: SET_POST_MESSAGE, payload: message})
};