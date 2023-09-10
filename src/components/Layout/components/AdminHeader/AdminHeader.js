/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './AdminHeader.module.scss';
import classNames from 'classnames/bind';

import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

export default function HeaderAdmin() {
    const user = useSelector((state) => state.user.user);
    const handleClick = ()=>{
        localStorage.clear()
        window.location.href='/'
    }
    return (
        <div className={cx('header')}>
            <div className={cx('container', 'content')}>
                <div className={cx('logo')}>BookingDreams</div>
                <nav className={cx('nav')}>
                   
                    <div className={cx('nav-avatar')}>
                        <img
                            className={cx('avatar')}
                            src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2022/05/hinh-avatar-doi-dep-2022-6-696x696.jpg?fit=700%2C20000&quality=95&ssl=1"
                            alt="ảnh đại diện"
                        />

                        <div className={cx('menu')}>
                            <a className={cx('dropdown-item')} href="#" onClick={handleClick}>
                                Đăng xuất
                            </a>
                        </div>
                    </div>
                    <li style={{listStyle:'none',cursor:'pointer'}}>
                        <span href="">{user.hoTen}</span>
                    </li>
                </nav>
            </div>
        </div>
    );
}
