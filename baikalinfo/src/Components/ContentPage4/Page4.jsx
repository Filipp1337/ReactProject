import React from 'react';
import Content1 from './Content1/Content1';
import Content2 from './Content2/Content2';
import Content3 from './Content3/Content3';
import p4 from './Page4.module.css';

const Page4 = () => {
    return (
        <div className = {p4.bg}>
            <Content1 />
            <Content2 />
            <Content3 />
        </div>
    );
}

export default Page4;