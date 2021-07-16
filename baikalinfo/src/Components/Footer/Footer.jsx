import React from 'react';
import foot from './Footer.module.css';

const Footer = () => {
    return (
        <div className = {foot.bg}>

            <ul className = {foot.info}>Baikal info
            <ul className = {foot.circle1}></ul>
            <ul className = {foot.circle2}></ul>
            <ul className = {foot.circle3}></ul>
            <ul className = {foot.circle4}></ul>
            </ul>
             

            <p className = {foot.links}>
                Ссылки
                <p className = {foot.p1}>О нас</p>
                <p className = {foot.p2}>Новости</p>
                <p className = {foot.p3}>Анонсы</p>
                <p className = {foot.p4}>Поддержка</p>
                <p className = {foot.p5}>Контакты</p>
            </p>

            <p className = {foot.publication}>
                <p className = {foot.p}>Популярные публикации</p>
                <ul className = {foot.crcl1}></ul>
                <ul className = {foot.crcl2}></ul>
                <p className = {foot.pp1}>Какой то текст какой то статьи</p>
                <p className = {foot.pp2}>От Пользователя 1 - 21 янв. 2021</p>
                <p className = {foot.pp3}>Какой то текст какой то статьи</p>
                <p className = {foot.pp4}>От Пользователя 1 - 21 янв. 2021</p>
            </p>

            <ul className = {foot.subscribe}>
                <p className = {foot.tt1}>Подписаться на новости</p>
                <p className = {foot.tt2}>Подписаться на новости</p>
                <textarea className = {foot.txtar} name="text" cols="1" rows="1"с placeholder = 'Ваш Email...'></textarea> 
                <button className = {foot.btn}>OK</button>
            </ul>

        </div>
    );
}

export default Footer;