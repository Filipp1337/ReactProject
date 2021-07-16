import React from 'react';
import mc from './MainContent.module.css';

const MainContent = () => {
    return (
        <div className = {mc.bg}>
            <ul className = {mc.head}><p className = {mc.p}>В мире</p></ul>

            <ul className = {mc.box1}>

                <ul className = {mc.boxblack1}>                    
                    <p className = {mc.blackp1}>Бизнес</p>
                </ul>

                <p className = {mc.p1}>Какой то заголовок какой то статьи</p>
                <p className = {mc.p2}>от <a href = '#'>Пользователя</a> 1 - 21 янв. 2021</p>
                <p className = {mc.p3}>начальный абзац статьи</p>

            </ul>

            <ul className = {mc.box2}>

                <ul className = {mc.boxblack2}>                    
                    <p className = {mc.blackp2}>Мода</p>
                </ul>

                <p className = {mc.p1}>Какой то заголовок какой то статьи</p>
                <p className = {mc.p2}>от <a href = '#'>Пользователя</a> 1 - 21 янв. 2021</p>
                <p className = {mc.p3}>начальный абзац статьи</p>

            </ul>

            <ul className = {mc.box3}>

                <ul className = {mc.boxblack3}>                    
                    <p className = {mc.blackp3}>Бизнес</p>
                </ul>

                <p className = {mc.p1}>Какой то заголовок какой то статьи</p>
                <p className = {mc.p2}>от <a href = '#'>Пользователя</a> 1 - 21 янв. 2021</p>
                <p className = {mc.p3}>начальный абзац статьи</p>

            </ul>

            <ul className = {mc.box4}>

                <ul className = {mc.boxblack4}>                    
                    <p className = {mc.blackp4}>В мире</p>
                </ul>

                <p className = {mc.p1}>Какой то заголовок какой то статьи</p>
                <p className = {mc.p2}>от <a href = '#'>Пользователя</a> 1 - 21 янв. 2021</p>
                <p className = {mc.p3}>начальный абзац статьи</p>

            </ul>

            <ul className = {mc.box5}>

                <ul className = {mc.boxblack5}>                    
                    <p className = {mc.blackp5}>События</p>
                </ul>

                <p className = {mc.p1}>Какой то заголовок какой то статьи</p>
                <p className = {mc.p2}>от <a href = '#'>Пользователя</a> 1 - 21 янв. 2021</p>
                <p className = {mc.p3}>начальный абзац статьи</p>

            </ul>

            <ul className = {mc.box6}>

                <ul className = {mc.boxblack6}>                    
                    <p className = {mc.blackp6}>События</p>
                </ul>

                <p className = {mc.p1}>Какой то заголовок какой то статьи</p>
                <p className = {mc.p2}>от <a href = '#'>Пользователя</a> 1 - 21 янв. 2021</p>
                <p className = {mc.p3}>начальный абзац статьи</p>

            </ul>

        </div>
    );
}

export default MainContent;