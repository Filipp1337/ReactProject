import React from 'react';
import cr from './SocialNetwork.module.css';

const SocialNetwork = () => {
    return (
        <div className = {cr.bg}>
                <ul className = {cr.text}>Мы в соц. сетях</ul>
                <button className = {cr.btn1}>Twitter</button>
                <button className = {cr.btn2}>Facebook</button>
                <button className = {cr.btn3}>Google+</button>
                <button className = {cr.btn4}>Instagram</button>
                <button className = {cr.btn5}>Pinterest</button>
                <button className = {cr.btn6}>Linkedin</button>
        </div>
    );
}

export default SocialNetwork;