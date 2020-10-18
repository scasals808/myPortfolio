import React from 'react';
import style from './Project.module.css'


export function Project() {

    return (
        <div className={style.project}>
            <div className={style.image}>
                <img width={'350px'} height={'250px'} src='https://i.pinimg.com/originals/89/59/2b/89592b3392fee110134235e95d80dbf7.jpg'/>
                <a className={style.link} href={''}>See more</a>
            </div>
            <div className={style.description}>
                <h3>Title</h3>
                <span>
                    Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua Ut enim...
                </span>
            </div>
        </div>
    );
}