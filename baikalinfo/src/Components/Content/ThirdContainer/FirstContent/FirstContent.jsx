import React from 'react';
import fc from './FirstContent.module.css';

const FirstContent = () => {
    return (
        <div className = {fc.bg}>
            <ul className = {fc.head}><p className = {fc.p}>Колонка Редактора</p></ul>
            <ul className = {fc.box1}><p className = {fc.p}>9 Вещей, которые следует учитывать, прежде чем соглашаться на новую работу</p></ul>
            <ul className = {fc.box2}><p className = {fc.p}>Правительство Ужесточает правила, чтобы гарантировать здоровье</p></ul>
            <ul className = {fc.box3}><p className = {fc.p}>(Инфографика) возможен ли Вообще баланс между работой и личной жизнью?</p></ul>
            <ul className = {fc.box4}><p className = {fc.p}>Рассматривает ли Uber возможность продажи своего бизнеса в Юго-Восточной Азии?</p></ul>
        </div>
    );
}

export default FirstContent;