import React from 'react';
import c2 from './Content2.module.css';

const Content2 = () => {
    return (
        <div className = {c2.bg}>

            <ul className = {c2.borderhead}>
                <p className = {c2.phead}>Политические новости</p>
            </ul>

            <ul className = {c2.layer1}>
                <ul className = {c2.sbox1l1}>
                    <ul className = {c2.textgrid1}>
                        <p className = {c2.textp1}>Политика</p>
                        <p className = {c2.textp2}>какой то заголовок</p>
                        <p className = {c2.textp3}>фывфывфсьсмаывдл лдфыводлфыс лфдыводлфовы лфодывофддфыовдфовы</p>
                    </ul>
                </ul>

                <ul className = {c2.bbox1l1}>
                    <p className = {c2.txtbboxl11}>политика</p>
                    <p className = {c2.txtbboxl12}>Секретные комнаты обнаружились в эрмитаже</p>
                </ul>

                <ul className = {c2.sbox2l1}>
                    <ul className = {c2.textgrid2}>
                        <p className = {c2.textp1}>Политика</p>
                        <p className = {c2.textp2}>какой то заголовок</p>
                        <p className = {c2.textp3}>фывфывфсьсмаывдл лдфыводлфыс лфдыводлфовы лфодывофддфыовдфовы</p>
                    </ul>
                </ul>

            </ul>

            <ul className = {c2.layer2}>

                <ul className = {c2.sbox1l2}>
                    <ul className = {c2.textgrid3}>
                        <p className = {c2.textp1}>Политика</p>
                        <p className = {c2.textp2}>какой то заголовок</p>
                        <p className = {c2.textp3}>фывфывфсьсмаывдл лдфыводлфыс лфдыводлфовы лфодывофддфыовдфовы</p>
                    </ul>
                </ul>

                <ul className = {c2.bbox1l2}>
                    <p className = {c2.txtbboxl21}>политика</p>
                    <p className = {c2.txtbboxl22}>Лукашенко копает картошку</p>
                </ul>

                <ul className = {c2.sbox2l2}>
                    <ul className = {c2.textgrid4}>
                        <p className = {c2.textp1}>Политика</p>
                        <p className = {c2.textp2}>какой то заголовок</p>
                        <p className = {c2.textp3}>фывфывфсьсмаывдл лдфыводлфыс лфдыводлфовы лфодывофддфыовдфовы</p>
                    </ul>
                </ul>

            </ul>

        </div>
    );
}

export default Content2;