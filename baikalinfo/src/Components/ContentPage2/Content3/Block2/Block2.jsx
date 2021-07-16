import React from 'react';
import b2 from './Block2.module.css';

const Block2 = () => {
    return (
        <div className = {b2.bg}>

            <ul className = {b2.block2}>
                <p className = {b2.p1}>ИВАН ИВАНОВ</p>
                <p className = {b2.p2}>текст аналитики текст аналитики</p>
            </ul>

        </div>
    );
}

export default Block2;