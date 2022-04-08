import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/state";



const MyPosts = (props) => {
    
    let postsElement = props.posts.map(p => <Post message={p.text} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();
    let addPost = () => {
        if (props.newPostText != '')
        {
            props.dispatch(addPostActionCreator());
            //props.dispatch( {type: 'UPDATE-NEW-POST', newText: ''} );
        }
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostActionCreator(text)
        props.dispatch(action);
    }

    return <div classname={s.postsBlock}>
        <h3>My Posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange}
                        ref={newPostElement}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost} disabled={!props.newPostText}>Add post</button>
            </div>
        </div>

        <div className={s.posts}>
            {postsElement}
        </div>
    </div>

}

export default MyPosts;