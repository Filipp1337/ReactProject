import React from 'react';
import c4 from './Content4.module.css';


const Content4 = () => {
    return (
        <div className = {c4.bg}>
            <p className = {c4.phead}>3 Коментария</p>
            <ul className = {c4.box1}>
                <ul className = {c4.crcl1}>
                    <p className = {c4.p1}>Пользователь 1</p>
                    <p className = {c4.p2}>Какой то длинный предлинный комментарий</p>
                    <p className = {c4.p3}>Ответить</p>
                </ul>
            </ul>
            <ul className = {c4.box2}>
                <ul className = {c4.crcl2}>
                    <p className = {c4.p1}>Пользователь 1</p>
                    <p className = {c4.p2}>Какой то длинный предлинный комментарий</p>
                    <p className = {c4.p3}>Ответить</p>
                </ul>
            </ul>
            <ul className = {c4.box3}>
                <ul className = {c4.crcl3}>
                    <p className = {c4.p1}>Пользователь 1</p>
                    <p className = {c4.p2}>Какой то длинный предлинный комментарий</p>
                    <p className = {c4.p3}>Ответить</p>
                </ul>
            </ul>
        </div>
    );
}

export default Content4;