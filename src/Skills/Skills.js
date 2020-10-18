import React from 'react';
import style from './Skills.module.css'
import styleContainer from './../common/styles/container.module.css'
import {Skill} from "./Skill/Skill";
import itemsStyle from './../common/styles/itemBox.module.css'


export function Skills() {
    let skills = [
        {id: 1, title: 'JS', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {id: 2, title: 'CSS', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {id: 3, title: 'React', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {id: 4, title: 'Redux', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {id: 5, title: 'Storybook', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {id: 6, title: 'TDD', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
    ]
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={itemsStyle.itemBox}>
                    {skills.map(card => <Skill title={card.title} description={card.description}/>)}
                </div>
            </div>
        </div>
    );
}


