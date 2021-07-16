import React from 'react';
import FirstContainer from './FirstContainer/FirstContainer';
import FourthContainer from './FourthContainer/FourthContainer';
import SecondContainer from './SecondContainer/SecondContainer'
import ThirdContainer from './ThirdContainer/ThirdContainer';

const Page1 = () => {
    return (
        <div>
            <FirstContainer /> 
            <SecondContainer />
            <ThirdContainer />
            <FourthContainer />     
        </div>
    );
}

export default Page1;