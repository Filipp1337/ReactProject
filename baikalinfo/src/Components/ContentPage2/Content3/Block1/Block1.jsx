import React from 'react';
import b1 from './Block1.module.css';

const Block1 = () => {
    return (
        <div className = {b1.bg}>

            <ul className = {b1.block1}>
                <p className = {b1.p1}>ИВАН ИВАНОВ</p>
                <p className = {b1.p2}>текст аналитики текст аналитики</p>
            </ul>

        </div>
    );
}

export default Block1;