import React from 'react';
import logo from '../../assets/Pinterest.png'
import bell from '../../assets/bell.png'
import chat from '../../assets/chat.png'
import user from '../../assets/user.png'
import search from '../../assets/search.png'
import './Header.scss';

function Header(props) {
    return (
        <div className="header">
            <div className="header__left-header">
                <img src={logo} alt="logo" />
                <h3 className="header__item header__item--active">Trang chủ</h3>
                <h3 className="header__item ">Theo dõi</h3>
            </div>
            <div className="header__middle-header">
                <input value="" placeholder="Tìm kiếm" />
            </div>
            <div className="header__right-header">
                <img src={bell} alt="bell" />
                <img src={chat} alt="chat" />
                <img src={user} alt="user" />
            </div>
        </div>
    );
}

export default Header;