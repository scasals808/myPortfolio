import React from 'react';
import style from './ContactForm.module.css'
import styleContainer from "../common/styles/container.module.css";
import itemsStyle from "../common/styles/itemBox.module.css";


export function ContactForm() {
    return (
        <div className={style.projectBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Contact</h2>
                <div className={itemsStyle.itemBox}>
                <form className={style.form}>
                    <p>
                        <input type={'text'} name={'name'} placeholder={'name'} className={style.feedbackInput}
                               id={'name'}/>
                    </p>
                    <p>
                        <input type={'email'} name={'email'} placeholder={'Email'} className={style.feedbackInput}
                               id={'email'}/>
                    </p>
                    <p>
                        <textarea name={'text'} id={'comment'} placeholder={'Message'} className={style.feedbackInput}/>
                    </p>
                    <input type={'submit'} value={'Submit'} className={style.buttonSubmit}/>
                </form>
            </div>
            </div>
        </div>
    );
}
