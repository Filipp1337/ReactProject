import React from 'react';
import b3 from './Block3.module.css';

const Block3 = () => {
    return (
        <div className = {b3.bg}>

            <ul className = {b3.block3}>
                <p className = {b3.p1}>ИВАН ИВАНОВ</p>
                <p className = {b3.p2}>текст аналитики текст аналитики</p>
            </ul>

        </div>
    );
}

export default Block3;