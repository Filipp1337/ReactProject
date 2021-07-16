import React from 'react';
import Content1 from './Content1/Content1';
import Content2 from './Content2/Content2';
import Content3 from './Content3/Content3';
import Content4 from './Content4/Content4';
import Content5 from './Content5/Content5';
import p5 from './Page5.module.css';

const Page5 = () => {
    return (
        <div className = {p5.bg}>
            <Content1 />
            <Content2 />
            <Content3 />
            <Content4 />
            <Content5 />
        </div>
    );
}

export default Page5;