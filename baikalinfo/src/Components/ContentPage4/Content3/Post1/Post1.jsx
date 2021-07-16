import React from 'react';
import p1 from './Post1.module.css';

const Post1 = () => {
    return (
                <ul className = {p1.post1}>

                    <p className = {p1.hedp1}>новости</p>
                    <ul className = {p1.box1p1}></ul>

                        <p className = {p1.p1}>Заголовок номер 1</p>
                        <p className = {p1.p2}>от Пользователь 1 - 21 января , 2021
                            <p className = {p1.borderpo1p2}></p>
                        </p>
                          
                    
                    <ul className = {p1.sbox1p1}>
                        <p className = {p1.p1}>новая игра от риман студио</p>
                        <p className = {p1.p2}>от Пользователь 1 - 21 января , 2021</p>
                        <p className = {p1.bordersb1p2}></p>  
                    </ul>   

                     <ul className = {p1.sbox2p1}>
                        <p className = {p1.p1}>новая игра от риман студио</p>
                        <p className = {p1.p2}>от Пользователь 1 - 21 января , 2021</p>
                        <p className = {p1.bordersb2p2}></p>  
                    </ul>                   

                </ul>
    );
}

export default Post1;