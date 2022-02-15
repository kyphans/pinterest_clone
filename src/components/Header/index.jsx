import React, { useRef, useState } from 'react';
import logo from '../../assets/Pinterest.png'
import bell from '../../assets/bell.png'
import chat from '../../assets/chat.png'
import user from '../../assets/user.png'
import styles from './Header.module.scss';
import PropTypes from 'prop-types';

Header.propTypes = {
    onSubmit: PropTypes.func,
};
Header.defaultProps = {
    onSubmit: null,
}

function Header(props) {

    const { onSubmit } = props
    const [input, setInput] = useState("")
    const typingTimeoutRef = useRef(null)

    function handleSearchTermChange(e) {
        const value = e.target.value;

        setInput(value);

        if (!onSubmit) return;

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        }

        //search debounce 
        typingTimeoutRef.current = setTimeout(() => {
            const formValue = {
                searchTerm: value,
            }
            onSubmit(formValue)
        }, 500)
    }

    return (
        <div className={styles['header']}>
            <div className={styles['header__left-header']}>
                <img src={logo} alt="logo" />
                <h3 className={`${styles['header__item']} ${styles['header__item--active']}`}>Trang chủ</h3>
                <h3 className={styles['header__item']}>Theo dõi</h3>
            </div>
            <div className={styles['header__middle-header']}>
                <form>
                    <input
                        type="text"
                        value={input}
                        placeholder="Tìm kiếm"
                        onChange={handleSearchTermChange}
                    />
                    {/* <button type="submit"></button> */}
                </form>
            </div>
            <div className={styles['header__right-header']}>
                <img src={bell} alt="bell" />
                <img src={chat} alt="chat" />
                <img src={user} alt="user" />
            </div>
        </div>
    );
}

export default Header;