//Import axiosInstance from store index
import { axiosInstance, errHandling } from '../index'
import { SET_USERS, SET_USERS_MESSAGE } from './type'

export const F_GET_USERS = (dispatch) => {
    return new Promise((resolve, reject) => {
        axiosInstance({url: "/users"})
        .then(({data}) => {
            dispatch({type: SET_USERS, payload: data})
            resolve()
        })
        .catch(err => errHandling(err, reject))
    })
};

export const F_CHANGE_USER_MESSAGE = (dispatch, message) => {
    dispatch({type: SET_USERS_MESSAGE, payload: message})
};