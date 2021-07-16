import React from 'react';
import c4 from './Content4.module.css';

const Content4 = () => {
    return (
        <div className = {c4.bg}>
            <ul className = {c4.borderhead}><p className = {c4.phead}>Самые просматривамеые</p></ul>

            <ul className = {c4.columnbox1}>
                <ul className = {c4.sbox1}>
                    <p className = {c4.sboxp1}>текст аналитики текст аналитики</p>
                </ul>
                <ul className = {c4.sbox2}>
                    <p className = {c4.sboxp1}>текст аналитики текст аналитики</p>
                </ul>
                <ul className = {c4.sbox3}>
                    <p className = {c4.sboxp1}>текст аналитики текст аналитики</p>
                </ul>
                <ul className = {c4.sbox4}>
                    <p className = {c4.sboxp1}>текст аналитики текст аналитики</p>
                </ul>
                <ul className = {c4.sbox5}>
                    <p className = {c4.sboxp1}>текст аналитики текст аналитики</p>
                </ul>
            </ul>

            <ul className = {c4.columnbox2}>
                <ul className = {c4.sbox1}>
                    <p className = {c4.sboxp1}>текст аналитики текст аналитики</p>
                </ul>
                <ul className = {c4.sbox2}>
                    <p className = {c4.sboxp1}>текст аналитики текст аналитики</p>
                </ul>
                <ul className = {c4.sbox3}>
                    <p className = {c4.sboxp1}>текст аналитики текст аналитики</p>
                </ul>
                <ul className = {c4.sbox4}>
                    <p className = {c4.sboxp1}>текст аналитики текст аналитики</p>
                </ul>
                <ul className = {c4.sbox5}>
                    <p className = {c4.sboxp1}>текст аналитики текст аналитики</p>
                </ul>
            </ul>

            <ul className = {c4.columnad}>
                <p className = {c4.p1}>Реклама</p>
                <p className = {c4.p2}>продаем все что можно</p>
                <button className = {c4.buttn}><p className = {c4.p}>Купить сейчас</p></button>
            </ul>

        </div>
    );
}

export default Content4;