import React from 'react';
import FC from './SecondContainerContent.module.css'
const SecondContainer = () => {
    return (
        <div>
            <div className={FC.masonrylayout}>

            <div className={FC.masonrylayoutpanelcontent1}>
                <div className={FC.masonrylayoutpanelcontentblack1}>
                    <a href = "#"><p className = {FC.p1}>В мире</p></a>
                </div>
                <div className={FC.masonrylayoutpanelcontentwhite1}>
                    <p className={FC.p1}>В зимбабве выпал снег</p><br /><br />
                    <p className={FC.p2}>От <a href="#">Пользователя 1</a> - 21 ЯНВ 2021г.</p>
                </div>
            </div>

            <div className={FC.masonrylayoutpanelcontent2}>
                <div className={FC.masonrylayoutpanelcontentblack2}>
                    <a href = "#"><p className = {FC.p1}>Мода</p></a>
                </div>
                <div className={FC.masonrylayoutpanelcontentwhite2}>
                    <p className={FC.p1}>Новые сумочки из кожи пчел</p><br /><br />
                    <p className={FC.p2}>От <a href="#">Пользователя 1</a> - 21 ЯНВ 2021г.</p>
                </div>
            </div>
            
            <div className={FC.masonrylayoutpanelcontent3}>
                <div className={FC.masonrylayoutpanelcontentblack3}>
                    <a href = "#"><p className = {FC.p1}>Бизнес</p></a>
                </div>
                <div className={FC.masonrylayoutpanelcontentwhite3}>
                    <p className={FC.p1}>Биткойн опять полетел вниз, пора что то делать!</p><br /><br />
                    <p className={FC.p2}>От <a href="#">Пользователя 1</a> - 21 ЯНВ 2021г.</p>
                </div>
            </div>

            <div className={FC.masonrylayoutpanelcontent4}>
                <div className={FC.masonrylayoutpanelcontentblack4}>
                    <a href = "#"><p className = {FC.p1}>События</p></a>
                </div>
                <div className={FC.masonrylayoutpanelcontentwhite4}>
                    <p className={FC.p1}>На байкал слетелись все астрономы мира и Илон Маск</p><br /><br />
                    <p className={FC.p2}>От <a href="#">Пользователя 1</a> - 21 ЯНВ 2021г.</p>
                </div>
            </div>

            </div>
        </div>
    );
}

export default SecondContainer;