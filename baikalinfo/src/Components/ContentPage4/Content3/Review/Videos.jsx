import React from 'react';
import vi from './Videos.module.css';

const Videos = () => {
    return (
        <div className = {vi.bg}>
            <p className = {vi.head}>Последние видео</p>

            <ul className = {vi.box1}></ul>
            <p className = {vi.p1}>новая игра от риман студио</p>
            <p className = {vi.p4}>от Пользователя 1 - 21 янв. 2021</p>

            <ul className = {vi.box2}></ul>
            <p className = {vi.p2}>новая игра от риман студио</p>
            <p className = {vi.p5}>от Пользователя 1 - 21 янв. 2021</p>

            <ul className = {vi.box3}></ul>
            <p className = {vi.p3}>новая игра от риман студио</p>
            <p className = {vi.p6}>от Пользователя 1 - 21 янв. 2021</p>
        </div>
    );
}

export default Videos;