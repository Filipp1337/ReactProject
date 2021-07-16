import React from 'react';
import cr from './Subscribers.module.css';

const Subscribers = () => {
    return (
        <div className = {cr.bg}>
                <ul className = {cr.texthead}>Подписаться на новости</ul> 
                <ul className = {cr.textgray}>Подпишитесь на наши новости</ul>
                <textarea className = {cr.txtar} name="text" cols="1" rows="1"с placeholder = 'Ваш Email'></textarea> 
                <button className = {cr.btn}>OK</button>  
        </div>
    );
}

export default Subscribers;