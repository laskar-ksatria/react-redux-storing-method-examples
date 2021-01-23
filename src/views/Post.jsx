import React, { useEffect } from 'react';
//We call user function from store
import { F_GET_POSTS, F_CHANGE_POST_MESSAGE } from '../store'
//Define useDispatch & useSelector
import { useDispatch, useSelector } from 'react-redux'

function Post() {

    //We define dispatch for dispatching the state
    const dispatch = useDispatch();
    
    //We call initialState from postReducer that you can see on store
    //With useSelector, it have a function with state parameters and returning the reducer that we needed
    const { postMessage, posts } = useSelector(state => state.postReducer)

    //Define a function for get posts data from API
    const geAllPost = () => F_GET_POSTS(dispatch).then(() => console.log("Data has been fetching"))

    useEffect(geAllPost, [dispatch])

    //function for change postMessage
    const handleChange = e => F_CHANGE_POST_MESSAGE(dispatch, e.target.value)

    return (
        <div >
            <h1>POSTS</h1>
            <input type="text" onChange={handleChange} placeholder="Change post message" />
            <div className="mt-4">
                <h5>Message: <span style={{color: 'blue', fontWeight: 'bold'}}>{postMessage}</span></h5>
            </div>
            <div className="mt-4">
                <h6 style={{fontWeight: 'bold'}}>Post</h6>
                {posts ? posts.map(post => <p key={post.id}>{post.title}</p>) : ""}
            </div>
        </div>
    )
};

export default Post;