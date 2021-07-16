import React from 'react';
import fc from './FourthContent.module.css';

const FourthContent = () => {
    return (
        <div className = {fc.bg}>
            <ul className = {fc.head}>
                <p className = {fc.p}>Видео</p>
            </ul>

            <ul className = {fc.box1}></ul>
            <p className = {fc.text1}>
                <p className = {fc.p1}>В какие дни и часы Онлайн-покупатели Чаще всего совершают покупки?</p>
                <p className = {fc.p2}>от <a href = '#'>Пользователя</a> 1 - 21 янв. 2021</p> 
            </p>

            <ul className = {fc.box2}></ul>
            <p className = {fc.text2}>
                <p className = {fc.p1}>В какие дни и часы Онлайн-покупатели Чаще всего совершают покупки?</p>
                <p className = {fc.p2}>от <a href = '#'>Пользователя</a> 1 - 21 янв. 2021</p> 
            </p>
        </div>
    );
}

export default FourthContent;