import React from 'react';
import c3 from './Content3.module.css';


const Content3 = () => {
    return (
        <div className = {c3.bg}>
            <p className = {c3.phead}>Текущие статьи</p>
            <ul className = {c3.box1}></ul>
            <ul className = {c3.box2}></ul>
            <ul className = {c3.box3}></ul>
            <p className = {c3.p1}>какой то текст</p>
            <p className = {c3.p2}>какой то текст</p>
            <p className = {c3.p3}>какой то текст</p>
        </div>
    );
}

export default Content3;