import React from 'react';
import HeaderSecondContainer from './HeaderSecondContainer/HeaderSecondContainer';
import SecondContainerContent from './Content/SecondContainerContent'
import BarPublication from './BarPublication/BarPublication';
import secondcontainer from './SecondContainer.module.css'
import Subscribers from './Subscribers/Subscribers'
import SocialNetwork from './SocialNetwork/SocialNetwork';

const SecondContainer = () => {
    return (
        <div className = {secondcontainer.page}>
            <HeaderSecondContainer />
            <SecondContainerContent />
            <BarPublication />
            <Subscribers />
            <SocialNetwork />
        </div>
    );
}

export default SecondContainer;