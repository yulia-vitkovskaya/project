import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    const src = 'https://drasler.ru/wp-content/uploads/2019/05/%D0%A4%D0%BE%D1%82%D0%BE-%D0%BD%D0%B0-%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9-%D1%81%D1%82%D0%BE%D0%BB-%D0%BA%D0%BE%D1%88%D0%BA%D0%B8-%D0%B8-%D0%BA%D0%BE%D1%82%D1%8F%D1%82%D0%B0-%D0%BA%D0%BE%D0%BB%D0%BB%D0%B5%D0%BA%D1%86%D0%B8%D1%8F-23.jpg'

    return (
        <div className ={s.item}>
            <div className={s.imgAndMessage}>
            <div className={s.itemImg}>
                <img className={s.img} src={src}></img>
            </div>
            <div className={s.message}>
                {props.message}
            </div>
        </div>
            <div className={s.likes}>
                <span>likes </span> { props.likesCount }
            </div>
        </div>
    )
}

export default Post;