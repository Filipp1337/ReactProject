import React from 'react';
import ca from './Categories.module.css';

const Categories = () => {
    return (
        <div className = {ca.bg}>
            <p className = {ca.p1}>Категории</p>
            <p className = {ca.p2}>В мире<p className  = {ca.p}>5</p></p>
            <p className = {ca.p3}>События<p className  = {ca.p}>7</p></p>
            <p className = {ca.p4}>Бизнес<p className  = {ca.p}>5</p></p>
            <p className = {ca.p5}>Мода<p className  = {ca.p}>10</p></p>
            <p className = {ca.p6}>Инвестиции<p className  = {ca.p}>10</p></p>
            <p className = {ca.p7}>Технологии<p className  = {ca.p}>7</p></p>
        </div>
    );
}

export default Categories;