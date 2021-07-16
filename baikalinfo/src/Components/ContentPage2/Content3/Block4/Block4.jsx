import React from 'react';
import b4 from './Block4.module.css';

const Block4 = () => {
    return (
        <div className = {b4.bg}>

            <ul className = {b4.block4}>
                <p className = {b4.p1}>ИВАН ИВАНОВ</p>
                <p className = {b4.p2}>текст аналитики текст аналитики</p>
            </ul>

        </div>
    );
}

export default Block4;