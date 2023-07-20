import React, { useState } from 'react';
import styles from './header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Header() {

    const [islogin,setIslogin] = useState(false)
    return (
        <header className={cx('container-fluid', 'bg-white')}>
            <div className={cx('container', 'header')}>
                <a href="/" className={cx('logo')}>
                    <img
                        className={cx('logo__img')}
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/353739863_1280996072514678_1945119932929597176_n.png?_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=mRpoRjLigaQAX-Bq5Xd&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdT-3WTjHpEjbnMwLBigTpLvkC18PXmoqCqXrfVLyZDJxg&oe=64C9A438"
                        alt=""
                    />
                </a>
                <ul className={cx('nav')}>
                    <li className={cx('nav-item')}>
                        <a className={cx('nav-item__link')} href="/">
                            Home
                        </a>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link className={cx('nav-item__link')} to="/search">
                            Room
                        </Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <a className={cx('nav-item__link')} href="/following">
                            Facilities
                        </a>
                    </li>
                    <li className={cx('nav-item')}>
                        <a className={cx('nav-item__link')} href="/profile">
                            Contact Us
                        </a>
                    </li>
                    <li className={cx('nav-item')}>
                        <a className={cx('nav-item__link')} href="/upload">
                            About
                        </a>
                    </li>

                    {islogin ? (
                        <>
                            <div className={cx('account')}>
                                <img
                                    src="https://i.pinimg.com/564x/92/26/5c/92265c40c8e428122e0b32adc1994594.jpg"
                                    alt=""
                                />
                                <div className={cx('menu-account')}>
                                    <div className={cx('menu-account__item')}>Tài khoản</div>
                                    <div className={cx('menu-account__item')}>Đăng xuất</div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <a className={cx('nav-item__link', 'btn', 'btn-light')} href="#">
                                Đăng nhập
                            </a>
                            <a className={cx('nav-item__link', 'btn', 'btn-light')} href="#">
                                Đăng ký
                            </a>
                        </>
                    )}
                </ul>
            </div>
        </header>
    );
}

export default Header;
