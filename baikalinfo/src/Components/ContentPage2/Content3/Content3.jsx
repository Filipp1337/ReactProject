import React from 'react';
import Block1 from './Block1/Block1';
import Block2 from './Block2/Block2';
import Block3 from './Block3/Block3';
import Block4 from './Block4/Block4';
import c3 from './Content3.module.css';

const Content3 = () => {
    return (
        <div className = {c3.bg}>
            <ul className = {c3.borderhead}><p className = {c3.phead}>Аналитика</p></ul>

            <Block1 />
            <Block2 />
            <Block3 />
            <Block4 />

        </div>
    );
}

export default Content3;