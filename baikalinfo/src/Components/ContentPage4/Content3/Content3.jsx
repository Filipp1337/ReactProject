import React from 'react';
import c3 from './Content3.module.css';
import Post1 from './Post1/Post1';
import Post2 from './Post2/Post2';
import Post3 from './Post3/Post3';
import Post4 from './Post4/Post4';
import Post5 from './Post5/Post5';
import Post6 from './Post6/Post6';
import SocialNetwork from './SocialNetwork/SocialNetwork';
import BarPublication from './TopStats/BarPublication';
import Videos from './Review/Videos';

const Content3 = () => {
    return (
        <div className = {c3.bg}>
            <p className = {c3.headp}>Новости категории</p>

            <ul className = {c3.posts}>

                <Post1 />
                <Post2 />
                <Post3 />
                <Post4 />
                <Post5 />
                <Post6 />
                <SocialNetwork />
                <BarPublication />
                <Videos />

            </ul>

        </div>
    );
}

export default Content3;