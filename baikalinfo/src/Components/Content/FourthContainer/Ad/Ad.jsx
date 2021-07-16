import React from 'react';
import ad from './Ad.module.css';

const Ad = () => {
    return (
        <div className = {ad.bg}>
            <p className = {ad.p1}>Реклама</p>
            <p className = {ad.p2}>Продаем все что можно</p>
            <button className = {ad.button}>Купить сейчас</button>
        </div>
    );
}

export default Ad;