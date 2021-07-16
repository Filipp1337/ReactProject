import React from 'react';
import headersecond from './HeaderSecondContainer.module.css';

const Header = () => {
    return (
        <div className = {headersecond.header}>
            <header>
                <p className = {headersecond.p}>Последние новости</p>                     
                <a className = {headersecond.a} href="#">В мире</a>
                <a className = {headersecond.a} href="#">События</a>
                <a className = {headersecond.a} href="#">События</a>
                <a className = {headersecond.a} href="#">Мода</a>                 
            </header>
        </div>
    );
}
export default Header;