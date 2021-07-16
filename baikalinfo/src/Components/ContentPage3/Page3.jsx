import React from 'react';
import Component1 from './Component1/Component1';
import Component2 from './Component2/Component2';
import Component3 from './Component3/Component3';
import p3 from './Page3.module.css';

const Page3 = () => {
    return (
        <div className = {p3.bg}>
            <Component1 />
            <Component2 />
            <Component3 />
        </div>
    );
}

export default Page3;