import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className={s.imgBlock}>
                <img className={s.img} src='https://ffwallpaper.com/wallup/monte-carlo/monte-carlo-41.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                ava + discription
            </div>
        </div>
    )
}

export default ProfileInfo;