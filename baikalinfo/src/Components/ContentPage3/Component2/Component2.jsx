import React from 'react';
import c2 from './Component2.module.css';

const Component2 = () => {
    return (
        <div className = {c2.bg}>
            <p className = {c2.phead}>Последние новости</p>

            <ul className = {c2.box1}>
                <ul className = {c2.boxblack1}></ul>
                <ul className = {c2.boxwhite1}>
                    <p className = {c2.pp1}>тренды - 5 дней назад</p>
                    <p className = {c2.pp2}>askdaskdas jkasdhkajshdkajshd hasdjkahsdja </p>
                    <p className = {c2.pp3}>от Пользователь 1</p>
                </ul>
            </ul>

            <ul className = {c2.box2}>
                <ul className = {c2.boxblack2}></ul>
                <ul className = {c2.boxwhite2}>
                    <p className = {c2.pp1}>тренды - 5 дней назад</p>
                    <p className = {c2.pp2}>askdaskdas jkasdhkajshdkajshd hasdjkahsdja </p>
                    <p className = {c2.pp3}>от Пользователь 1</p>
                </ul>
            </ul>

            <ul className = {c2.box3}>
                <ul className = {c2.boxblack3}></ul>
                <ul className = {c2.boxwhite3}>
                    <p className = {c2.pp1}>тренды - 5 дней назад</p>
                    <p className = {c2.pp2}>askdaskdas jkasdhkajshdkajshd hasdjkahsdja </p>
                    <p className = {c2.pp3}>от Пользователь 1</p>
                </ul>
            </ul>

        </div>
    );
}

export default Component2;