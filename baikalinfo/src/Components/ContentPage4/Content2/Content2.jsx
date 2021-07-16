import React from 'react';
import c2 from './Content2.module.css';

const Content2 = () => {
    return (
        <div className = {c2.bg}>
            <ul className = {c2.box}>
                <p className = {c2.p1}>Реклама</p>
                <p className = {c2.p2}>продаем все что можно</p>
                <button className = {c2.btn}><p className = {c2.p}>купить сейчас</p></button>
            </ul>
        </div>
    );
}

export default Content2;