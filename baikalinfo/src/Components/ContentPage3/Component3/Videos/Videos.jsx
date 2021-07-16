import React from 'react';
import vi from './Videos.module.css';

const Videos = () => {
    return (
        <div className = {vi.bg}>
            <p className = {vi.head}>Последние видео</p>

            <ul className = {vi.box1}></ul>
            <p className = {vi.p1}>наименование 1</p>

            <ul className = {vi.box2}></ul>
            <p className = {vi.p2}>наименование 2</p>

            <ul className = {vi.box3}></ul>
            <p className = {vi.p3}>наименование 3</p>
        </div>
    );
}

export default Videos;