import React from 'react';
import style from './Projects.module.css'
import styleContainer from "../common/styles/container.module.css";
import itemsStyle from "../common/styles/itemBox.module.css";
import {Project} from "./Project/Project";


export function Projects() {

    return (
        <div className={style.projectBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={itemsStyle.itemBox}>
                    <Project/>
                    <Project/>
                </div>
            </div>
        </div>
    );
}
