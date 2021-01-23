import { combineReducers } from 'redux'
import axios from 'axios'
//importing reducers
import userReducer from './user'
import postReducer from './posts'

//export User function & type
export * from './user/functions'
export * from './user/type'
export * from './posts/functions'
export * from './posts/type'


export const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

//ErrorHandling
export const errHandling = (err, rej) => {
    if (err.response && err.response.data && err.response.data.message) {
        alert(err.response.data.message)
    }else {
        alert("Oop, something wrong")
    }
    if (rej) rej(err)
}

//Combined Reducer
const rootReducer = combineReducers({ userReducer, postReducer })

export default rootReducer;

