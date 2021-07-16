import React from 'react';
import c1 from './Content1.module.css';

const Content1 = () => {
    return (
        <div className = {c1.bg}>
            <ul className = {c1.box1}>
                <p className = {c1.p1}>Событие 1</p>
                <p className = {c1.p2}>от пользователь 1-21 января 2021</p>
            </ul>

        </div>
    );
}

export default Content1;