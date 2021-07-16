import React from 'react';
import cr from './BarPublication.module.css';

const BarPublication = () => {
    return (
        <div className = {cr.bg}>
                <ul className = {cr.text}>Популярные публикации</ul>
                <ul className = {cr.crcl1}></ul><ul className = {cr.textpubl1}>Говорим о многом всяком интересном<br/><p className = {cr.p}>От <a>пользователя</a> 1 - 21 ЯНВ. 2021</p></ul>
                <ul className = {cr.crcl2}></ul><ul className = {cr.textpubl2}>Побежали побежали наши пальчики устали<p className = {cr.p}>От <a>пользователя</a> 1 - 21 ЯНВ. 2021</p></ul>
                <ul className = {cr.crcl3}></ul><ul className = {cr.textpubl3}>Гитара - лучший инструмент<p className = {cr.p}>От <a>пользователя</a> 1 - 21 ЯНВ. 2021</p></ul>
                <ul className = {cr.crcl4}></ul><ul className = {cr.textpubl4}>Карнавал в Иркутске, будет ли?<p className = {cr.p}>От <a>пользователя</a> 1 - 21 ЯНВ. 2021</p></ul>
        </div>
    );
}

export default BarPublication;