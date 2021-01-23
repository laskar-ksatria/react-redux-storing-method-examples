import React, { useEffect } from 'react';
//We call user function from store
import { F_GET_USERS, F_CHANGE_USER_MESSAGE } from '../store'
//Define useDispatch & useSelector
import { useDispatch, useSelector } from 'react-redux'

function User() {

    //We define dispatch for dispatching the state
    const dispatch = useDispatch();
    
    //We call initialState from userReducer that you can see on store
    //With useSelector, it have a function with state parameters and returning the reducer that we needed
    const { userMessage, users } = useSelector(state => state.userReducer)

    //Define a function for get users data from API
    const geAllUsers = () => F_GET_USERS(dispatch).then(() => console.log("Data has been fetching"))

    useEffect(geAllUsers, [dispatch])

    //function for change userMessage
    const handleChange = e => F_CHANGE_USER_MESSAGE(dispatch, e.target.value)

    return (
        <div >
            <h1>USERS</h1>
            <input type="text" onChange={handleChange} placeholder="Change user message" />
            <div className="mt-4">
                <h5>Message: <span style={{color: 'blue', fontWeight: 'bold'}}>{userMessage}</span></h5>
            </div>
            <div className="mt-4">
                <h6 style={{fontWeight: 'bold'}}>Users Data</h6>
                {users ? users.map(user => <p key={user.id}>{user.name}, {user.email}</p>) : ""}
            </div>
        </div>
    )
};

export default User;