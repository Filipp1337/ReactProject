import React from 'react';
import DropdownList from './DropDown/DropDown';
import DropdownList1 from './DropDown/DropDown1/DropDown1';
import DropdownList2 from './DropDown/DropDown2/DropDown2';
import DropdownList3 from './DropDown/DropDown3/DropDown3';
import DropdownList4 from './DropDown/DropDown4/DropDown4';
import h from './Header.module.css';
import he from './HeaderOvHeader.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>

            <div className={he.header}><header >
                <NavLink to = '/page2'>Новости</NavLink>
                <NavLink to = "/page3">События</NavLink>
                <NavLink to = "/page4">Анонсы</NavLink>
                <NavLink to = "/page5">Контакты</NavLink>
                


            </header></div>

            <header className={h.header}>
                <NavLink to='/page1'>Baikal info</NavLink>
                <div>
                    <div className={h.dropdown}>
                        <ul className = {h.dp1}><DropdownList /></ul>
                        <ul className = {h.dp2}><DropdownList1 /></ul>
                        <ul className = {h.dp3}><DropdownList2 /></ul>
                        <ul className = {h.dp4}><DropdownList3 /></ul>
                        <ul className = {h.dp5}><DropdownList4 /></ul>
                    </div>
                </div>
            </header>

        </div>
    );
}
export default Header;