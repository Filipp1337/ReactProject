import React from 'react';
import sc from './SecondContent.module.css';

const SecondContent = () => {
    return (
        <div className = {sc.bg}>
            
            <ul className = {sc.head1}><p className = {sc.p}>Технологии</p></ul>
            <ul className = {sc.box1}>
                <p className = {sc.p1}>Что то тут написано</p>
                <p className = {sc.p2}>от Пользователя 1 - 21 янв. 2021</p>
            </ul>

            <ul className = {sc.text1}>
                <p className = {sc.p1}>Какойто заголовок от статьи</p>
                <p className = {sc.p2}>Какойто заголовок от статьи</p>
                <p className = {sc.p3}>Какойто заголовок от статьи</p>
                <p className = {sc.p4}>Какойто заголовок от статьи</p>
            </ul>

            <ul className = {sc.head2}><p className = {sc.p}>Путешествия</p></ul>
            <ul className = {sc.box2}>
                <p className = {sc.p1}>Что то тут написано</p>
                <p className = {sc.p2}>от Пользователя 1 - 21 янв. 2021</p>
            </ul>

            <ul className = {sc.text1}>
                <p className = {sc.p1}>Какойто заголовок от статьи</p>
                <p className = {sc.p2}>Какойто заголовок от статьи</p>
                <p className = {sc.p3}>Какойто заголовок от статьи</p>
                <p className = {sc.p4}>Какойто заголовок от статьи</p>
            </ul>

        </div>
    );
}

export default SecondContent;