import React from 'react';
import rec from './Recomendation.module.css';

const Recomendation = () => {
    return (
        <div className = {rec.bg}>
            <p className = {rec.head}>Рекомендации</p>
            <ul className = {rec.box1}></ul>
            <p className = {rec.txt1}>Какой то текст какой то статьи</p>
            <p className = {rec.txt2}>от <a>Пользователя</a> 1 - 21 янв. 2021</p>

            <ul className = {rec.box2}></ul>
            <p className = {rec.txt3}>Какой то текст какой то статьи</p>
            <p className = {rec.txt4}>от <a>Пользователя</a> 1 - 21 янв. 2021</p>
        </div>
    );
}

export default Recomendation;