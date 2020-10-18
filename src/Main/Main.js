import React from "react";
import style from './Main.module.css'
import styleContainer from './../common/styles/container.module.css'

export function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Lorem ipsum</span>
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
}