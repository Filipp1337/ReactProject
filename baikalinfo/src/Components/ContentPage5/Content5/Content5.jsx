import React from 'react';
import c5 from './Content5.module.css';


const Content5 = () => {
    return (
        <div className = {c5.bg}>
            <p className = {c5.p1}>ответить</p>
            <p className = {c5.p2}>комментарий</p>
            <textarea className = {c5.txtar1}></textarea>
            <p className = {c5.p3}>Имя*</p>
            <p className = {c5.p4}>Email*</p>
            <textarea className = {c5.txtar2}></textarea>
            <textarea className = {c5.txtar3}></textarea>
            <button className = {c5.btn}>Ответ</button>
        </div>
    );
}

export default Content5;