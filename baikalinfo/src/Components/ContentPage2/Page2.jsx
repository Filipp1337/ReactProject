import React from 'react';
import Content1 from './Content1/Content1';
import Content2 from './Content2/Content2';
import Content3 from './Content3/Content3';
import Content4 from './Content4/Content4';
import p2 from './Page2.module.css';

const Page2 = () => {
    return (
        <div className = {p2.bg}>
            <Content1 />
            <Content2 />
            <Content3 />
            <Content4 />
        </div>
    );
}

export default Page2;