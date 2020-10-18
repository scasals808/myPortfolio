import React from "react";
import style from './Footer.module.css'
import styleContainer from "../common/styles/container.module.css";
import itemsStyle from "../common/styles/itemBox.module.css";



export const Footer = () => {
    return <div className={style.footerBlock}>
        <div className={`${styleContainer.container} ${style.footerContainer}`}>
            <h2>Иван Иванов</h2>
            <div className={style.icons}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
            </div>
            <h3> © 2020 Все права защищены</h3>
        </div>
    </div>
}