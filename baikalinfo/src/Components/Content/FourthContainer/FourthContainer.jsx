import React from 'react';
import Ad from './Ad/Ad';
import MainContent from './MainContent/MainContent';
import fourthcontainer from './FourthContainer.module.css'
import Categories from './Categories/Categories';
import Recomendation from './Recomendation/Recomendation';

const FourthContainer = () => {
    return (
        <div className = {fourthcontainer.page}>
            <MainContent />
            <Ad />
            <Categories />
            <Recomendation />
        </div>
    );
}

export default FourthContainer;