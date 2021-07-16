import React from 'react';
import FC from './FirstContainer.module.css';

const FirstContainer = () => {
    return (
        <div>
            <div className={FC.masonrylayout}>

                <div className={FC.masonrylayoutpanel1}>
                    <div className={FC.masonrylayoutpanelcontent}>
                        <p className={FC.p1}>Всякий разный текст</p><br /><br />
                        <p className={FC.p2}>От <a href="#">Пользователя 1</a> - 21 ЯНВ 2021г.</p>
                    </div>
                </div>

                <div className={FC.masonrylayoutpanel2}>
                    <div className={FC.masonrylayoutpanelcontentblack}>
                        <a href = "#"><p className = {FC.p1}>В мире</p></a>
                    </div>
                </div>

                <div className={FC.masonrylayoutpanel12}>
                    <div className={FC.masonrylayoutpanelcontentblack}>
                    <a href = "#"><p className = {FC.p2}>Мода</p></a>
                    </div>
                </div>

                <div className={FC.masonrylayoutpanel13}>
                    <div className={FC.masonrylayoutpanelcontent}>
                        <p className={FC.p1}>Всякий разный текст</p><br /><br />
                        <p className={FC.p2}>От <a href="#">Пользователя 1</a> - 21 ЯНВ 2021г.</p>
                    </div>
                </div>

                <div className={FC.masonrylayoutpanel14}>
                    <div className={FC.masonrylayoutpanelcontent}>
                        <p className={FC.p1}>Всякий разный текст</p><br /><br />
                        <p className={FC.p2}>От <a href="#">Пользователя 1</a> - 21 ЯНВ 2021г.</p>
                    </div>
                </div>

                <div className={FC.masonrylayoutpanel15}>
                    <div className={FC.masonrylayoutpanelcontentblack}>
                    <a href = "#"><p className = {FC.p3}>Бизнес</p></a>
                    </div>
                </div>

                <div className={FC.masonrylayoutpanel3}>
                    <div className={FC.masonrylayoutpanelcontent3}>
                    <a href = "#"><p className = {FC.masonrylayoutpanelcontent31black}>События</p></a>
                        <div className={FC.masonrylayoutpanelcontent31}>
                        <p className={FC.p1}>БЛАБЛАБЛАБЛАБЛА</p><br /><br /><br /><br />
                        <p className={FC.p2}>От <a href="#">Пользователя 1</a> - 21 ЯНВ 2021г.</p>
                        </div>
                    </div>
                    
                </div>


            </div>
        </div>
    );
}

export default FirstContainer;