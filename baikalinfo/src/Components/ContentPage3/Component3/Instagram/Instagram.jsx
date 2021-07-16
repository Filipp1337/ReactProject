import React from 'react';
import inst from './Instagram.module.css';

const Instagram = () => {
    return (
        <div className = {inst.bg}>
            <p className = {inst.head}>Instagram лента</p>

            <ul className = {inst.boxs}>
                <ul className = {inst.box1}></ul>
                <ul className = {inst.box2}></ul>
                <ul className = {inst.box3}></ul>
                <ul className = {inst.box4}></ul>
                <ul className = {inst.box5}></ul>
                <ul className = {inst.box6}></ul>
            </ul>
        </div>
    );
}

export default Instagram;