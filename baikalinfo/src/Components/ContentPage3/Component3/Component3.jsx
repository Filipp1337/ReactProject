import React from 'react';
import Ad from './Ad/Ad';
import c3 from './Component3.module.css';
import Instagram from './Instagram/Instagram';
import Subscribers from './SubscribeComponent/Subscribers';
import Videos from './Videos/Videos';

const Component3 = () => {
    return (
        <div className = {c3.bg}>
            <p className = {c3.phead}>Доступно в подписке</p>

            <ul className = {c3.box}>

                <ul className = {c3.sbox1}>                    
                    <p className = {c3.sb1p1}>тренды - 5 дней назад</p>
                    <p className = {c3.sb1p2}>Заголовок 1</p>
                    <p className = {c3.sb1p3}>от Пользователь 1</p>
                    <p className = {c3.sb1p4}>Фывлфврфывр рофывфрлыврфл рфлоыврлф врло фрыво рфо офывлрфы вро флыврлфрывло</p>
                    <p className = {c3.border}></p>
                </ul>

                <ul className = {c3.sbox2}>                    
                    <p className = {c3.sb2p1}>тренды - 5 дней назад</p>
                    <p className = {c3.sb2p2}>Заголовок 1</p>
                    <p className = {c3.sb2p3}>от Пользователь 1</p>
                    <p className = {c3.sb2p4}>Фывлфврфывр рофывфрлыврфл рфлоыврлф врло фрыво рфо офывлрфы вро флыврлфрывло</p>
                    <p className = {c3.border}></p>
                </ul>

                <ul className = {c3.sbox3}>                    
                    <p className = {c3.sb3p1}>тренды - 5 дней назад</p>
                    <p className = {c3.sb3p2}>Заголовок 1</p>
                    <p className = {c3.sb3p3}>от Пользователь 1</p>
                    <p className = {c3.sb3p4}>Фывлфврфывр рофывфрлыврфл рфлоыврлф врло фрыво рфо офывлрфы вро флыврлфрывло</p>
                    <p className = {c3.border}></p>
                </ul>

                <ul className = {c3.sbox4}>                    
                    <p className = {c3.sb4p1}>тренды - 5 дней назад</p>
                    <p className = {c3.sb4p2}>Заголовок 1</p>
                    <p className = {c3.sb4p3}>от Пользователь 1</p>
                    <p className = {c3.sb4p4}>Фывлфврфывр рофывфрлыврфл рфлоыврлф врло фрыво рфо офывлрфы вро флыврлфрывло</p>
                    <p className = {c3.border}></p>
                </ul>

                <ul className = {c3.sbox5}>                    
                    <p className = {c3.sb5p1}>тренды - 5 дней назад</p>
                    <p className = {c3.sb5p2}>Заголовок 1</p>
                    <p className = {c3.sb5p3}>от Пользователь 1</p>
                    <p className = {c3.sb5p4}>Фывлфврфывр рофывфрлыврфл рфлоыврлф врло фрыво рфо офывлрфы вро флыврлфрывло</p>
                    <p className = {c3.border}></p>
                </ul>

                <ul className = {c3.sbox6}>                    
                    <p className = {c3.sb6p1}>тренды - 5 дней назад</p>
                    <p className = {c3.sb6p2}>Заголовок 1</p>
                    <p className = {c3.sb6p3}>от Пользователь 1</p>
                    <p className = {c3.sb6p4}>Фывлфврфывр рофывфрлыврфл рфлоыврлф врло фрыво рфо офывлрфы вро флыврлфрывло</p>
                </ul>
                
            </ul>

            <Instagram />
            <Videos />
            <Ad />
            <Subscribers />

        </div>
    );
}

export default Component3;