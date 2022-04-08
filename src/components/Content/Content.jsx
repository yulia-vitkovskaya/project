import React from 'react';
import s from './Content.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';


const Content = (props) => {

    return (
    <div className = {s.content}>
        <ProfileInfo />
        <MyPosts posts={props.ProfilePage.posts}
                 newPostText={props.ProfilePage.newPostText}
                 dispatch={props.dispatch}/>
    </div>
    )
}

export default Content;