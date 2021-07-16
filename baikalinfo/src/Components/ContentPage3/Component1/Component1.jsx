import React from 'react';
import c1 from './Component1.module.css';

const Component1 = () => {
    return (
        <div className = {c1.bg}>
            <ul className = {c1.bigbox}></ul>

            <ul className = {c1.box2}>
                <p className = {c1.head}>Топ новости</p>

                <ul className = {c1.smallbox1}>
                    <p className = {c1.p1}>Тренды - 3 дня назад</p>
                    <p className = {c1.p2}>очень интересная статья </p>
                </ul>

                <ul className = {c1.smallbox2}>
                    <p className = {c1.p1}>Тренды - 3 дня назад</p>
                    <p className = {c1.p2}>очень интересная статья </p>
                </ul>

                <ul className = {c1.textsc1}>
                    <p className = {c1.tp1}>Тренды - 5 дней назад</p>
                    <p className = {c1.tp2}>Супермодели, модели и топ модели в баклашах</p>
                </ul>
            </ul>
        </div>
    );
}

export default Component1;