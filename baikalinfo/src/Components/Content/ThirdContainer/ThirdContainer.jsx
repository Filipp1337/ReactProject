import React from 'react';
import FirstContent from './FirstContent/FirstContent';
import FourthContent from './FourthContent/FourthContent';
import SecondContent from './SecondContent/SecondContent';
import ThirdContent from './ThirdContent/ThirdContent';

const ThirdContainer = () => {
    return (
        <div>
            <FirstContent />
            <SecondContent />
            <ThirdContent />
            <FourthContent />
        </div>
    );
}

export default ThirdContainer;